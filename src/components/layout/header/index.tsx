import React from 'react';
import mymarketLogo from '@/public/logo.svg';
import Image from 'next/image';
import FielterInput from './autoSuggest';
import { CustomButton } from '@components/ui/button';
import { Heart, MessagesSquare, PlusCircle, ShoppingCart, User2, Menu } from 'lucide-react';
import Tnet from '@components/shared/icons/tnet';

const Icons = [
  {
    id: 1,
    icon: <MessagesSquare size={16} color="#272a37" className="stroke-[3px]" />,
  },
  {
    id: 2,
    icon: <Heart size={16} color="#272a37" className="stroke-[3px]" />,
  },
  {
    id: 3,
    icon: <ShoppingCart size={16} color="#272a37" className="stroke-[3px]" />,
  },
];

const Header = () => {
  return (
    <div className="border-b-2 border-white">
      <div className="flex h-20 justify-between max-w-[1272px] mx-auto items-center ">
        <div className="h-[40px] w-[150px] mr-7">
          <Image src={mymarketLogo} alt="logo" priority />
        </div>
        <FielterInput />
        <div className="flex items-center gap-5">
          <CustomButton>
            <PlusCircle size={24} className="mr-2 stroke-3 stroke-[#ffff] fill-yellow" />
            <span className="text-xs">დამატება</span>
          </CustomButton>
          <div className="flex gap-5  border-x-2 border-white px-5">
            {Icons.map((item) => (
              <React.Fragment key={item.id}>{item.icon}</React.Fragment>
            ))}
          </div>
          <div className="flex gap-6 items-center">
            <CustomButton>
              <User2 size={16} color="#fec900" className="mr-2" />
              <span>ავტორიზაცია</span>
            </CustomButton>
            <Menu size={16} color="#272a37" />
            <Tnet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
