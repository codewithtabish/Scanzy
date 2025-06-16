import React from 'react'
import { SparklesText } from "@/components/magicui/sparkles-text";

const PlagiarismTopCard = () => {
  return (
    <div>
      <div className='flex flex-col items-center justify-center text-center p-4 md:p-8'>

        <SparklesText>
          Free Plagiarism Checker
        </SparklesText>

        <p className='dark:gray-500 text-gray-600 text-sm mt-4'>
          Scan your content to find any duplicated or copied text across the web using our free plagiarism checker.
        </p>
        
      </div>
    </div>
  )
}

export default PlagiarismTopCard
