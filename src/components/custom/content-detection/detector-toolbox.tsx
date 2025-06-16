"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { BrushCleaningIcon, ScanSearch } from "lucide-react"
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
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

type Provider = "sapling" | "winstonai"

export default function AIDetector() {
  const [text, setText] = useState("")
  const [providers, setProviders] = useState<Provider[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [result, setResult] = useState<any>(null)

  const handleProviderToggle = (provider: Provider) => {
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
      if (!navigator.onLine) {
        throw new Error("No internet connection. Please check your network.")
      }

      if (providers.length === 0) {
        throw new Error("Please select at least one provider.")
      }

      if (text.trim().length < 300) {
        throw new Error("Please enter at least 300 characters of text.")
      }

      const controller = new AbortController()
      const timeoutId = setTimeout(() => controller.abort(), 15000)
          const response = await detectAIContent({
        text,
        providers: providers as ["sapling" | "winstonai", ...("sapling" | "winstonai")[]],
      })

    //   const response = await detectAIContent(
    //     {
    //       text,
    //       providers,
    //     },
    //     { signal: controller.signal }
    //   )

      clearTimeout(timeoutId)
      setResult(response)
    } catch (err: any) {
      if (err.name === "AbortError") {
        setError("Request timed out. Please try again.")
      } else {
        setError(err.message || "Something went wrong while detecting AI content.")
      }
    } finally {
      setLoading(false)
    }
  }

  const resetAll = () => {
    setText("")
    setProviders([])
    setResult(null)
    setError(null)
    setLoading(false)
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
          <CardTitle className="capitalize font-semibold flex flex-col gap-1">
            <span className="text-primary">
              {name}
            </span>
            <span className="text-red-600 py-1 font-medium">
              AI Detected: {(data.ai_score * 100).toFixed(2)}%
            </span>
            <span className="text-green-600 py-1 font-medium">
              Original: {(100 - data.ai_score * 100).toFixed(2)}%
            </span>
          </CardTitle>
        </CardHeader>
      </Card>
    )
  }

  const wordCount = text.trim().split(/\s+/).filter(Boolean).length
  const charCount = text.trim().length

  return (
    <div className="w-full max-w-3xl mx-auto p-6 rounded-xl space-y-6">
      {/* Avatar Dropdown Reset Button */}
      <div className="flex justify-end">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Avatar className="cursor-pointer border hover:shadow">
              <AvatarImage src="/avatar.png" />
              <AvatarFallback>
                <BrushCleaningIcon  
                className="w-5 h-5 text-sm"
                />

              </AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger >
          <DropdownMenuContent className="w-44">
            <DropdownMenuItem onClick={resetAll}>
              Reset All States
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Text Input */}
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

      {/* Provider Selection */}
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

      {/* Results */}
      {result?.data && (
        <div
          className={`grid gap-6 mt-6 ${
            providers.length === 1 ? "grid-cols-1" : "md:grid-cols-2"
          }`}
        >
          {providers.includes("sapling") && result.data.sapling && (
            <ProviderResultCard
              name="Sapling"
              data={result.data.sapling}
              providers={providers}
            />
          )}
          {providers.includes("winstonai") && result.data.winstonai && (
            <ProviderResultCard
              name="Winston AI"
              data={result.data.winstonai}
              providers={providers}
            />
          )}
        </div>
      )}
    </div>
  )
}
