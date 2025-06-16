"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ScanSearch } from "lucide-react"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { detectAIContent } from "@/actions/ai-conetent-detection"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

export default function AIDetector() {
  const [text, setText] = useState("")
  const [providers, setProviders] = useState<string[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [result, setResult] = useState<any>(null)

  const handleProviderToggle = (provider: string) => {
    setProviders((prev) =>
      prev.includes(provider)
        ? prev.filter((p) => p !== provider)
        : [...prev, provider]
    )
  }

  const handleCheck = async () => {
    setLoading(true)
    setError(null)
    setResult(null)

    try {
      if (providers.length === 0) {
        setError("Please select at least one provider.")
        setLoading(false)
        return
      }

      if (text.trim().length < 300) {
        setError("Please enter at least 300 characters of text.")
        setLoading(false)
        return
      }

      const response = await detectAIContent({
        text,
        providers: providers as ["sapling" | "winstonai", ...("sapling" | "winstonai")[]],
      })

      setResult(response)
    } catch {
      setError("Something went wrong while detecting AI content.")
    } finally {
      setLoading(false)
    }
  }

  const ProviderResultCard = ({
    name,
    data,
    providers,
  }: {
    name: string
    data: any
    providers: string[]
  }) => {
    const isSingle = providers.length === 1
    const originalCount = data.items.filter(
      (item: any) => item.prediction.toLowerCase() === "original"
    ).length
    const isMostlyOriginal = originalCount >= data.items.length / 2

    return (
      <Card className={isSingle ? "w-full col-span-2" : "w-full"}>
        <CardHeader>
        <CardTitle
  className="capitalize font-semibold flex flex-col gap-1"
>
  <span className="text-primary">
    {/* {name} – AI Score: {(data.ai_score * 100).toFixed(2)}% */}
  </span>
  <span className="text-red-600 py-2 font-medium">
    AI Detected: {(data.ai_score * 100).toFixed(2)}%
  </span>
  <span className="text-green-600 py-2 font-medium">
    Original: {(100 - data.ai_score * 100).toFixed(2)}%
  </span>
</CardTitle>

        </CardHeader>
        {/* <CardContent>
          <Tabs defaultValue="visual" className="w-full">
            <TabsList className="mb-4">
              <TabsTrigger value="visual">Visual</TabsTrigger>
              <TabsTrigger value="api">API Response</TabsTrigger>
            </TabsList>

            <TabsContent value="visual">
              <div className="space-y-3 text-sm">
                {data.items.map((item: any, i: number) => {
                  const isOriginal =
                    item.prediction.toLowerCase() === "original"
                  return (
                    <div
                      key={i}
                      className="bg-muted p-4 rounded border space-y-2"
                    >
                      <div>
                        <strong>Prediction:</strong>{" "}
                        <span
                          className={
                            isOriginal
                              ? "text-green-600 font-semibold"
                              : "text-red-600 font-semibold"
                          }
                        >
                          {item.prediction}
                        </span>
                      </div>
                      <div>
                        <strong className="text-primary font-bold">
                          Score:
                        </strong>{" "}
                        <span
                          className={
                            isOriginal
                              ? "text-green-600 font-bold"
                              : "text-primary font-bold"
                          }
                        >
                          {(item.ai_score * 100).toFixed(2)}%
                        </span>
                      </div>
                      <p className="text-muted-foreground">"{item.text}"</p>
                    </div>
                  )
                })}
                {data.cost && (
                  <p className="text-xs text-right text-muted-foreground pt-2">
                    Provider Cost: ${data.cost}
                  </p>
                )}
              </div>
            </TabsContent>

            <TabsContent value="api">
              <pre className="text-xs p-2 bg-muted rounded overflow-x-auto">
                {JSON.stringify(data, null, 2)}
              </pre>
            </TabsContent>
          </Tabs>
        </CardContent> */}
      </Card>
    )
  }

  const wordCount = text.trim().split(/\s+/).filter(Boolean).length
  const charCount = text.trim().length

  return (
    <div className="w-full max-w-3xl mx-auto p-6 rounded-xl  space-y-6">
      <div className="relative">
        <div className="absolute top-2 left-4 text-xs text-muted-foreground">
          Words: {wordCount} | Characters: {charCount}
        </div>

        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Write or paste at least 300 characters..."
          rows={16}
          className="w-full h-[300px] p-4 pt-[40px] border border-gray-400 rounded-lg focus:outline-none resize-none leading-6"
        />

        <div className="absolute bottom-4 right-4 flex gap-2 z-10">
          <Button

            onClick={handleCheck}
            disabled={loading || !text.trim() || text.trim().length < 300}
            size="sm"
            className="rounded-full px-3 py-2 flex items-center gap-1 shadow"
          >
            <ScanSearch className="w-4 h-4" />
            {loading ? "Checking..." : "Detect"}
          </Button>
        </div>
      </div>

      <div className="flex justify-end">
        <div className="space-y-3 text-right max-w-md">
          <p className="text-sm text-muted-foreground font-medium">
            <strong>Select Providers:</strong>
          </p>

          <div className="flex gap-4 justify-end">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="sapling"
                checked={providers.includes("sapling")}
                onCheckedChange={() => handleProviderToggle("sapling")}
              />
              <Label htmlFor="sapling">Sapling</Label>
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox
                id="winstonai"
                checked={providers.includes("winstonai")}
                onCheckedChange={() => handleProviderToggle("winstonai")}
              />
              <Label htmlFor="winstonai">Winston AI</Label>
            </div>
          </div>

          {error && <p className="text-sm text-red-500">{error}</p>}
        </div>
      </div>

      {result?.data && (
        <div
          className={`grid gap-6 mt-6 ${
            providers.length === 1 ? "grid-cols-1" : "md:grid-cols-2"
          }`}
        >
          {providers.includes("sapling") && result.data.sapling && (
            <ProviderResultCard
              name="sapling"
              data={result.data.sapling}
              providers={providers}
            />
          )}
          {providers.includes("winstonai") && result.data.winstonai && (
            <ProviderResultCard
              name="winstonai"
              data={result.data.winstonai}
              providers={providers}
            />
          )}
        </div>
      )}
    </div>
  )
}
