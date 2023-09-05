import React from 'react';
import { cn } from '@/src/lib/utils';
import Image from 'next/image';
import superVip from '@/public/super_vip.jpeg';

const SuperVip = () => {
  return (
    <div
      className={cn`max-w-[1272px] m-auto h-[350px] bg-[#ffff] overflow-hidden flex flex-col px-8 py-12 items-start
      gap-4 rounded-[24px] mb-16`}
    >
      <div className="flex items-center gap-3">
        <span className="bg-yellow text-xs px-2 rounded-full">s-vip</span>
        <span className="uppercase font-bold">SUPER VIP</span>
        <span className="text-sm underline underline-offset-1 text-blue-200 cursor-pointer">
          114 განცხადება
        </span>
      </div>
      <div className="overflow-x-auto w-full flex gap-8 justify-between">
        {[...Array(9)].map((_, i) => (
          <div key={i} className="flex flex-col gap-4">
            <div className="min-w-[125px] h-[130px] bg-white rounded-lg cursor-pointer overflow-hidden">
              <Image src={superVip} alt="gaming-consoles" className="h-full w-full object-cover" />
            </div>
            <span className="max-w-[116px] text-xs text-ellipsis overflow-hidden whitespace-nowrap block">
              სასწრაფოდ! საცხობის ინვენტარი
            </span>
            <span className="text-sm text-gray font-bold">18.00 $</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SuperVip;
