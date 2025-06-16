'use server'

import axios from 'axios'

export async function checkPlagiarism(text: string, title: string = '') {
  try {
    const response = await axios.post(
      'https://api.edenai.run/v2/text/plagia_detection',
      {
        providers: ['winstonai'],
        text,
        title,
      },
      {
        headers: {
          authorization: `Bearer ${process.env.EDENAI_API_KEY}`,
        },
      }
    )

    const data = response.data
    console.log('Plagiarism response:', data)

    if (data?.winstonai?.plagia_score !== undefined) {
      return {
        success: true,
        // Normalize the plagia_score (0–100) to 0–1 float
        score: Number(data.winstonai.plagia_score) / 100,
        flagged_text: '', // winstonai may not return this
        details: data.winstonai.items,
      }
    } else {
      return {
        success: false,
        message: 'No results returned by provider.',
      }
    }
  } catch (error: any) {
    console.error('Plagiarism API Error:', error.response?.data || error.message)
    return {
      success: false,
      message: error.response?.data?.message || 'An unexpected error occurred.',
    }
  }
}
