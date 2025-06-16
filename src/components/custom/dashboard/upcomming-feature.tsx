// components/custom/dashboard/upcoming-features.tsx

import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

const features = [
  {
    title: "AI Text Summarizer",
    description: "Quickly generate concise summaries for long content and PDFs.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-primary"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6M9 16h6M13 8H9m12 4a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Real-Time Grammar Check",
    description: "Fix grammar mistakes and improve clarity on the fly.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-primary"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
      </svg>
    ),
  },
  {
    title: "Voice-to-Text AI",
    description: "Convert audio to editable and searchable text in seconds.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-primary"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18v4m0 0h-4m4 0h4m-4-4a4 4 0 100-8 4 4 0 000 8z" />
      </svg>
    ),
  },
]

export default function UpcomingFeatures() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 px-4">
      {features.map((feature, index) => (
        <Card key={index} className="flex flex-col gap-2">
          <CardHeader className="flex items-center space-y-2">
            <div className="rounded-full bg-muted p-2">{feature.icon}</div>
            <div>
              <CardTitle className="text-lg">{feature.title}</CardTitle>
              <CardDescription>{feature.description}</CardDescription>
            </div>
          </CardHeader>
        </Card>
      ))}
    </div>
  )
}
