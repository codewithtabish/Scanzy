'use server'

import { z } from 'zod'

const schema = z.object({
  text: z.string().min(300, 'Text must be at least 300 characters'),
  providers: z.array(z.enum(['sapling', 'winstonai'])).nonempty('Select at least one provider'),
})

type Input = z.infer<typeof schema>

export async function detectAIContent(input: Input) {
  const validated = schema.safeParse(input)

  if (!validated.success) {
    return { error: validated.error.flatten().fieldErrors }
  }

  try {
    const res = await fetch('https://api.edenai.run/v2/text/ai_detection', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.EDENAI_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        text: validated.data.text,
        providers: validated.data.providers.join(','),
      }),
    })

    const data = await res.json()

    return {
      data,
      status: 'success',
    }
  } catch (err) {
    console.error('AI detection error:', err)
    return {
      error: 'Failed to fetch AI detection results',
    }
  }
}
