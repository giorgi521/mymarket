import React from 'react';
import Image from 'next/image';
import first from '@/public/2.png';
import second from '@/public/142.png';
import third from '@/public/1064.png';
import fifth from '@/public/250.png';
import sixth from '@/public/1066.png';
import seventh from '@/public/1067.png';

const data = [
  {
    img: first,
    title: 'საოჯახო ტექნიკა',
  },
  {
    img: second,
    title: 'სპორტი და დასვენება',
  },
  {
    img: third,
    title: 'ტექნიკა',
  },
  {
    img: fifth,
    title: 'რემონტი',
  },
  {
    img: sixth,
    title: 'სახლი და ბაღი',
  },
  {
    img: seventh,
    title: 'სილამაზე და მოდა',
  },
];

const Circles = () => {
  return (
    <div className="max-w-[1272px] m-auto pb-[56px] flex justify-between gap-4 overflow-y-auto">
      {data.map(({ img, title }, i) => (
        <div key={i} className="flex flex-col items-center gap-2 cursor-pointer ">
          <div className="w-[180px] h-[180px] flex items-center justify-center bg-[#ffff] hover:bg-yellow rounded-full">
            <Image src={img} alt="first" className="w-[120px] h-[120px]" />
          </div>
          <span className="text-sm font-bold">{title}</span>
        </div>
      ))}
    </div>
  );
};

export default Circles;
