import Link, { LinkProps } from 'next/link';
import { PropsWithChildren } from 'react';

interface Props {
  newTab?: boolean;
}

const CustomLink = ({ children, newTab, ...props }: PropsWithChildren<LinkProps> & Props) => {
  return (
    <Link {...props} legacyBehavior>
      <a target={newTab ? '_blank' : '_self'}>{children}</a>
    </Link>
  );
};

export default CustomLink;
