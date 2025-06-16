import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const ProviderResultCard = ({ name, data }: { name: string; data: any }) => {
  return (
    <Card className="w-full max-w-xl">
      <CardHeader>
        <CardTitle className="capitalize">{name} (Score: {data.ai_score.toFixed(4)})</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3 text-sm">
        {data.items.map((item: any, index: number) => (
          <div key={index} className="p-3 border rounded bg-muted">
            <p><strong>Prediction:</strong> {item.prediction}</p>
            <p><strong>Score:</strong> {item.ai_score.toFixed(4)}</p>
            <p className="mt-1 text-muted-foreground">"{item.text}"</p>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
