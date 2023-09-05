'use client';
import React, { useEffect } from 'react';
import NavigationLeft from './navBar/navigationLeft';
import Categories from './categories';
import { useState } from 'react';
import Events from '@/src/components/shared/secHeaderButtons';

const Header = () => {
  const [showCategories, setSowCategories] = useState(false);
  const [{ show, id }, setShowNavInfo] = useState({
    show: false,
    id: 0,
  });

  useEffect(() => {
    if (show) {
      setSowCategories(show);
    }
    setTimeout(() => {
      setSowCategories(show);
    }, 500);
  }, [show]);

  return (
    <div className="relative">
      <Events />
      <div className="flex gap-4 max-w-[1272px] m-auto py-4">
        <NavigationLeft show={show} id={id} setShowNavInfo={setShowNavInfo} />
        {!showCategories && <Categories />}
      </div>
    </div>
  );
};

export default Header;
