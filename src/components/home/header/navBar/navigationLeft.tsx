'use client';

import React, { useState } from 'react';
import { NAV_LEFT } from '@/src/components/home/header/navBar/helper';
import { ChevronRight } from 'lucide-react';
import HoverNavResult from './hoverNavResult';
import { cn } from '@/src/lib/utils';

const NavigationLeft = ({
  show,
  id,
  setShowNavInfo,
}: {
  show: boolean;
  id: number;
  setShowNavInfo: (value: any) => void;
}) => {
  const MouseOver = (id: number) => {
    setShowNavInfo({ show: true, id });
  };

  const MouseLeave = () => {
    setShowNavInfo({ show: false, id: 0 });
  };
  return (
    <div
      onMouseLeave={MouseLeave}
      className={cn`h-[620px] ${
        show ? 'w-full' : 'w-[320px]'
      }  transition-all duration-500 z-100 min-w-[320px] ease-in-out overflow-hidden py-6 px-5 bg-[#ffff] rounded-2xl flex`}
    >
      <div
        style={{
          background:
            'linear-gradient(#fff 30%,hsla(0,0%,100%,0)) top,linear-gradient(hsla(0,0%,100%,0),#fff 70%) bottom,radial-gradient(farthest-side at 50% 0,rgba(0,0,0,.1),transparent) top,radial-gradient(farthest-side at 50% 100%,rgba(0,0,0,.1),transparent) bottom',
          backgroundAttachment: 'local,local,scroll,scroll',
          backgroundRepeat: 'no-repeat',
          backgroundSize: '100% 20px,100% 7px,100% 14px,100% 7px',
          flexShrink: '0',
        }}
        className="h-[572px] pr-6 relative overflow-y-auto
       flex flex-col [&>div]:text-grey-100 after:content-[''] after:w-[2px]
        after:h-[620px] after:absolute after:right-0 after:top-0 after:origin-top
         after:bg-white after:rounded-2xl  hover:[&>div]:text-yellow"
      >
        {NAV_LEFT.map(({ id, title, icon }) => (
          <div
            key={id}
            onMouseOver={() => MouseOver(id)}
            className="hover:bg-hover-default cursor-pointer flex items-center justify-between p-2 rounded-xl"
          >
            <div className="flex items-center gap-4">
              <div className="[&>*]:w-4 [&>*]:h-4">{icon}</div>
              <span className="text-sm">{title}</span>
            </div>
            <ChevronRight className="w-6 h-6 text-[#ffff]" />
          </div>
        ))}
      </div>
      {
        <div
          className={cn`h-[572px] relative overflow-y-auto px-6 transition-opacity duration-200 delay-500 ease-in-out ${
            show ? 'opacity-100' : 'opacity-0 absolute'
          }`}
        >
          <HoverNavResult id={id} />
        </div>
      }
    </div>
  );
};

export default NavigationLeft;
