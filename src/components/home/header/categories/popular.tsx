import React from 'react';
import { POPULAR_CATEGIRIES } from '@/src/components/home/header/categories/helper';
import Image from 'next/image';

const Popular = () => {
  return (
    <div className="h-[206px] bg-white px-10 py-6 flex flex-col gap-4 rounded-2xl">
      <span className="text-lg font-bold">Poplular categories</span>
      <div className="flex justify-between">
        {POPULAR_CATEGIRIES.map(({ id, title, img }) => (
          <div
            key={id}
            className="w-[176px] h-[114px] bg-yellow relative rounded-2xl overflow-hidden cursor-pointer"
          >
            <Image src={img} alt={title} className="w-full h-full object-cover absolute" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Popular;
