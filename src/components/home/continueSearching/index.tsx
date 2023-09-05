'use client';
import { CustomButton } from '@/src/components/ui/button';
import { cn } from '@/src/lib/utils';
import { Heart, MoveRight } from 'lucide-react';
import React, { useState } from 'react';

const ContinueSearch = () => {
  const [active, setActive] = useState(false);
  return (
    <div className="max-w-[1272px] m-auto py-16">
      <div className="flex w-full items-center justify-between">
        <div className="flex gap-4 items-center">
          <span className="font-bold text-lg">გააგრძელე ძიება</span>
          <CustomButton
            onClick={() => {
              setActive(false);
            }}
            className={cn`px-6 ${!active && 'bg-gray-200'}`}
          >
            ბოლო
          </CustomButton>
          <CustomButton
            onClick={() => {
              setActive(true);
            }}
            className={cn`px-6 ${active && 'bg-gray-200'}`}
          >
            შენახული
          </CustomButton>
        </div>
        <MoveRight className="cursor-pointer hover:stroke-yellow" />
      </div>
      <div className="flex gap-6 overflow-y-auto">
        {[1, 2, 3, 4, 5, 6, 7].map((_, index) => (
          <div
            key={index}
            className="min-w-[397px] h-[82px] flex items-center justify-between px-7 bg-[#ffff] rounded-2xl mt-7 cursor-pointer"
          >
            <span className="max-w-[200px] text-sm text-ellipsis overflow-hidden whitespace-nowrap block">
              სამედიცინო ინვერტარის გაქირავება
            </span>
            <div className="rounded-full w-10 h-10 border-white border flex items-center justify-center">
              <Heart className="fill-white stroke-gray-200" size={16} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContinueSearch;
