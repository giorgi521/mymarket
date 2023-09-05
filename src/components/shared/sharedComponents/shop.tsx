import { CustomButton } from '@/src/components/ui/button';
import { cn } from '@/src/lib/utils';
import { reverse } from 'dns';
import Image, { StaticImageData } from 'next/image';
import React from 'react';

const OnlineShop = ({
  title,
  desc,
  buttonTxt,
  rightToleft,
  img,
}: {
  title: string;
  desc: string;
  buttonTxt: string;
  rightToleft?: boolean;
  img: StaticImageData;
}) => {
  return (
    <div
      className={cn`max-w-[1272px] m-auto h-[350px] bg-[#ffff] flex px-20 items-center ${
        rightToleft && 'flex-row-reverse'
      } justify-between rounded-[24px] mb-16`}
    >
      <div className="flex flex-col gap-6 max-w-[455px]">
        <span className="text-2xl font-bold">{title}</span>
        <span className="">{desc}</span>
        <CustomButton className="bg-yellow w-[50%] rounded-lg">{buttonTxt}</CustomButton>
      </div>
      <Image src={img} alt="shopNow" className="h-[300px] w-[50%]" />
    </div>
  );
};

export default OnlineShop;
