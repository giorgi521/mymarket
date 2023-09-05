import React from 'react';
import { BadgePercent, ShoppingBag } from 'lucide-react';
import CustomLink from './customLink';
import { CustomButton } from '../components/ui/button';
import { buttonVariants } from '@/src/components/ui/button';

const EVENT_DATA = [
  {
    id: 1,
    icon: <ShoppingBag />,
    title: 'განვადებით მეორადები',
    link: '/',
    variant: 'ghost',
  },
  {
    id: 1,
    icon: <BadgePercent />,
    title: 'გასდაკლება',
    link: '/',
    variant: 'discount',
  },
];

const Events = () => {
  return (
    <div className="h-[58px] bg-[#ffff] w-full">
      <div className="max-w-[1272px] m-auto flex items-center h-full gap-4">
        {EVENT_DATA.map(({ id, title, icon, link, variant }) => (
          <CustomLink href={link} key={id}>
            <CustomButton className="gap-2" variant={variant as 'ghost' | 'discount'}>
              {icon}
              <span>{title}</span>
            </CustomButton>
          </CustomLink>
        ))}
      </div>
    </div>
  );
};

export default Events;
