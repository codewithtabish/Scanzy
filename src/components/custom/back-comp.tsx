'use client';

import { useRouter } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function BackButton({
  label = 'Go Back',
  position = 'top-6 cursor-pointer left-10',
}: {
  label?: string;
  position?: string;
}) {
  const router = useRouter();

  return (
    <div className={`absolute z-50 ${position}`}>
      <Button
        variant="outline"
        onClick={() => router.back()}
        className="flex items-center"
      >
        <ArrowLeft className="h-4 w-4 mr-2" />
        <span>{label}</span>
      </Button>
    </div>
  );
}
