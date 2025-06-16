'use client'

import { useState } from 'react'
import { BrushCleaningIcon, ScanSearch } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { checkPlagiarism } from '@/actions/plagirisim-checker'
import { ShieldCheck, AlertCircle, BookMarked } from 'lucide-react'

export default function PlagiarismChecker() {
  const [text, setText] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [result, setResult] = useState<{
    score: number
    flagged_text?: string
    details?: any[]
  } | null>(null)

  const charCount = text.trim().length
  const wordCount = text.trim().split(/\s+/).filter(Boolean).length

  const resetAll = () => {
    setText('')
    setError(null)
    setResult(null)
    setLoading(false)
  }

  const handleCheck = async () => {
    setLoading(true)
    setError(null)
    setResult(null)

    try {
      if (!navigator.onLine) throw new Error('No internet connection.')

      if (charCount < 100) {
        throw new Error('Please enter at least 100 characters.')
      }

      const controller = new AbortController()
      const timeoutId = setTimeout(() => controller.abort(), 15000)

      const response = await checkPlagiarism(text)
      clearTimeout(timeoutId)

      if (response.success && typeof response.score === 'number') {
        setResult({
          score: Number(response.score),
          flagged_text: response.flagged_text || '',
          details: Array.isArray(response.details) ? response.details : [],
        })
      } else {
        throw new Error(response.message || 'Unexpected response from API.')
      }
    } catch (err: any) {
      if (err.name === 'AbortError') {
        setError('Request timed out. Please try again.')
      } else {
        setError(err.message || 'Something went wrong.')
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="w-full max-w-3xl mx-auto p-6 rounded-xl space-y-6">
      {/* Avatar Dropdown for Reset */}
      <div className="flex justify-end">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Avatar className="cursor-pointer border hover:shadow">
              <AvatarImage src="/avatar.png" />
              <AvatarFallback>
                <BrushCleaningIcon className="w-5 h-5" />
              </AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-44">
            <DropdownMenuItem onClick={resetAll}>Reset All States</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Word/Char Count and Text Input */}
      <div className="relative">
        <div className="absolute top-2 left-4 text-xs text-muted-foreground">
          Words: {wordCount} | Characters: {charCount}
        </div>

        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Paste or write at least 100 characters to check for plagiarism..."
          rows={16}
          className="w-full h-[300px] p-4 pt-[40px] border border-gray-400 rounded-lg focus:outline-none resize-none leading-6"
        />

        <div className="absolute bottom-4 right-4 flex gap-2 z-10">
          <Button
            onClick={handleCheck}
            disabled={loading || charCount < 100}
            size="sm"
            className="rounded-full px-3 py-2 flex items-center gap-1 shadow"
          >
            <ScanSearch className="w-4 h-4" />
            {loading ? 'Checking...' : 'Check Plagiarism'}
          </Button>
        </div>
      </div>

      {/* Error Message */}
      {error && <p className="text-sm text-red-500 text-right">{error}</p>}

      {/* Results Card */}
      {result && (
       <Card className="mt-6 w-full border border-gray-200 shadow-sm rounded-xl">
  <CardHeader className="flex items-center gap-3 bg-gray-100 rounded-t-xl px-4 py-3">
    <BookMarked className="text-blue-600 w-5 h-5" />
    <CardTitle className="text-lg font-semibold text-gray-800">
      Plagiarism Results
    </CardTitle>
  </CardHeader>

  <CardContent className="space-y-4 p-5 text-sm">
    <div className="flex items-center gap-2">
      <ShieldCheck className="text-green-600 w-4 h-4" />
      <p className="text-green-700 font-medium">
        Originality Score:{' '}
        <span className="font-semibold">
          {typeof result.score === 'number'
            ? `${(100 - result.score * 100).toFixed(2)}%`
            : 'N/A'}
        </span>
      </p>
    </div>

    <div className="flex items-center gap-2">
      <AlertCircle className="text-red-600 w-4 h-4" />
      <p className="text-red-600 font-medium">
        Plagiarism Score:{' '}
        <span className="font-semibold">
          {typeof result.score === 'number'
            ? `${(result.score * 100).toFixed(2)}%`
            : 'N/A'}
        </span>
      </p>
    </div>

    {result.flagged_text && result.flagged_text.trim() && (
      <div>
        <p className="font-semibold text-gray-700 mb-1">Flagged Text:</p>
        <div className="border p-3 rounded-md bg-gray-50 text-gray-600 text-sm leading-6">
          {result.flagged_text}
        </div>
      </div>
    )}
  </CardContent>
</Card>
      )}
    </div>
  )
}
