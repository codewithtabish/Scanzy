"use client"

import { useUser } from "@clerk/nextjs"
import { useEffect, useState } from "react"
import { IconTrendingUp } from "@tabler/icons-react"

import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

type ToolUsage = {
  tool: string
  count: number
  lastUsed: string
  trend: "up" | "down"
}

export function SectionCards() {
  const { user } = useUser()
  const [tools, setTools] = useState<ToolUsage[]>([])

  useEffect(() => {
    if (!user) return

    // Simulate different hardcoded data for each user (you can later fetch from DB)
    const fakeToolStats: ToolUsage[] = [
      {
        tool: "AI Content Detection",
        count: 32,
        lastUsed: "2025-06-14",
        trend: "up",
      },
      {
        tool: "Plagiarism Checker",
        count: 21,
        lastUsed: "2025-06-13",
        trend: "up",
      },
      {
        tool: "Sentiment Detection",
        count: 14,
        lastUsed: "2025-06-12",
        trend: "up",
      },
      // {
      //   tool: "Summarizer",
      //   count: 7,
      //   lastUsed: "2025-06-10",
      //   trend: "down",
      // },
    ]

    setTools(fakeToolStats)
  }, [user])

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 px-4 lg:px-6">
      {tools.map((tool, index) => (
        <Card key={index} className="@container/card">
          <CardHeader>
            <CardDescription>{tool.tool}</CardDescription>
            <CardTitle className="text-2xl font-semibold tabular-nums">
              {tool.count} Uses
            </CardTitle>
            <CardAction>
              <Badge variant="outline">
                <IconTrendingUp className="size-4" />
                {tool.trend === "up" ? "+10%" : "-5%"}
              </Badge>
            </CardAction>
          </CardHeader>
          <CardFooter className="flex-col items-start gap-1.5 text-sm">
            <div className="font-medium flex items-center gap-1">
              Last used: <span>{tool.lastUsed}</span>
            </div>
            <div className="text-muted-foreground">
              Usage tracked for your account
            </div>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}
