import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism'

export function CodeBlock({ language, value }: { language: string; value: string }) {
  return (
    <SyntaxHighlighter language={language} style={oneDark} 
    line-clamp-3
     showLineNumbers={true}
    numberStyle={{ color: '#6c757d', fontSize: '0.875rem' }}
    // lineNumberContainerStyle={{ paddingRight: '8px', userSelect: 'none'
     className="rounded-md bg-red-600 my-4">
      {value}
    </SyntaxHighlighter>
  )
}
