import React from 'react';
import GooglePlayBadgeIcon from '@/src/components/shared/icons/googlePlayBadge';
import AppStoreBadgeIcon from '@/src/components/shared/icons/appStoreBadge';
import { FOOTER_NAV, RULES, TNET_IMAGES } from '@/src/components/layout/footer/helper';
import TnetWidthTxt from '@/src/components/shared/icons/tnetWidthTxt';
import { ArrowUpFromDot } from 'lucide-react';
import CustomLink from '@/src/components/shared/customLink';

const Footer = () => {
  return (
    <div className="flex flex-col w-full absolute bottom-0">
      <div className="h-12 bg-yellow flex items-center justify-center">
        <ArrowUpFromDot className="stroke-white cursor-pointer" />
      </div>
      <div className="h-[116px] w-[1272px] mx-auto flex items-center gap-2 ">
        <CustomLink
          newTab
          href="https://play.google.com/store/apps/details?id=ge.my.mymarket&utm_camapaign=marketing&utm_source=facebook&utm_term=main+video"
        >
          <GooglePlayBadgeIcon />
        </CustomLink>
        <CustomLink
          newTab
          href="https://apps.apple.com/us/app/mymarket-ge/id1560783192?utm_camapaign=marketing&utm_source=facebook&utm_term=main+video"
        >
          <AppStoreBadgeIcon />
        </CustomLink>
        <div className="max-w-[330px] text-grey-default opacity-60 text-xs">
          გადმოწერე აპლიკაცია და მიიღე მუდმივად განახლებული ინფორმაცია მარტივად
        </div>
      </div>
      <div className="w-full h-[374px] border divide-white">
        <div className="flex max-w-[1272px] h-full items-center mx-auto">
          <div className="flex flex-wrap justify-between w-full">
            {FOOTER_NAV.map(({ id, title, list, icons }) => (
              <div key={id}>
                <div className="text-grey-default text-xs font-bold mb-4 cursor-pointer">
                  {title}
                </div>
                <div>
                  {list.map(({ id, title }) => (
                    <div key={id} className="w-full">
                      <div className="text-grey-default text-xs mb-4 opacity-70 cursor-pointer">
                        {title}
                      </div>
                    </div>
                  ))}
                  {icons && (
                    <div className="flex gap-2">
                      {icons.map(({ id, icon }) => (
                        <div key={id}>
                          <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white [&>*]:stroke-yellow cursor-pointer">
                            {icon}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="h-[64px] max-w-[1272px] mx-auto flex items-center gap-4">
          {RULES.map(({ id, title }) => (
            <div key={id} className="text-xs cursor-pointer underline underline-offset-1">
              {title}
            </div>
          ))}
        </div>
        <div className="h-[64px] max-w-[1272px] mx-auto rounded-[64px] border flex gap-4 pr-4">
          <div className="h-full w-[130px] bg-darkBlue rounded-[64px] flex items-center justify-center">
            <TnetWidthTxt />
          </div>
          <div className="flex justify-between items-center w-full">
            {TNET_IMAGES.map(({ id, icon }) => (
              <span>{icon}</span>
            ))}
          </div>
        </div>
        <div className="flex justify-between py-10 max-w-[1272px] mx-auto">
          <div className="text-xs">
            This site is protected by reCAPTCHA and the GooglePrivacy PolicyandTerms of Serviceapply
          </div>
          <div className="text-xs">{`© ${new Date().getFullYear()} ყველა უფლება დაცულია`}</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
