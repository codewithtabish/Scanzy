'use client';

import { useRouter } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function BackButton({
  label = '',
  position = 'top-6 cursor-pointer  left-10',
  bg='bg-gray-400',
}: {
  label?: string;
  position?: string;
    bg?: string;

}) {
  const router = useRouter();

  return (
    <div className={`absolute z-50 ${position}`}>
      <Button
        variant="outline"
        onClick={() => router.back()}
        className="flex  bg cursor-pointer  justify-center items-center rounded-md w-10 h-6"
      >
        <ArrowLeft className="h-4 w-8 text-white" />
        <span>{label}</span>
      </Button>
    </div>
  );
}
