import React from 'react';
import Popular from './popular';
import Slider from './slider';

const Categories = () => {
  return (
    <div className="h-[620px] py-6 p-10 bg-[#ffff] overflow-hidden rounded-3xl w-full flex flex-col justify-between gap-6">
      <Slider />
      <Popular />
    </div>
  );
};

export default Categories;
