import React from 'react';
import mymarketLogo from '@/public/logo.svg';
import Image from 'next/image';
import FielterInput from './autoSuggest';
const Header = () => {
  return (
    <div className="flex gap-7 h-20 max-w-[1272px]">
      <div className="h-[40px] w-[150px]">
        <Image src={mymarketLogo} alt="logo" priority />
      </div>
      <FielterInput />
      <div className="flex">
        <div>damateba</div>
        <div className="flex">
          <div>message</div>
          <div>hurt</div>
          <div>cart</div>
        </div>
        <div className="flex">
          <div>auth</div>
          <div>navbar</div>
          <div>ather web application</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
