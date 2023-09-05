import React, { useMemo } from 'react';
import { NAV_LEFT } from '@/src/components/home/header/navBar/helper';

const HoverNavResult = ({ id }: { id: number }) => {
  const data = useMemo(() => {
    return NAV_LEFT.find((item) => item.id === id);
  }, [id]);

  return (
    <div className="flex flex-col gap-9">
      {data && <span className="text-lg font-bold">{data.title}</span>}
      <div className="grid grid-cols-3 gap-x-3">
        {data &&
          data.list.map(({ id, title, subTitle }) => (
            <div key={id} className="px-2 mb-9">
              <span className="text-sm font-bold cursor-pointer">{title}</span>
              {subTitle && (
                <div className="flex flex-col gap-[13px] mt-5">
                  {subTitle.map(({ id, title }) => (
                    <span className="text-sm relative text-grey-100 cursor-pointer" key={id}>
                      {title}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
      </div>
    </div>
  );
};

export default HoverNavResult;
