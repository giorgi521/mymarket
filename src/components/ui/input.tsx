import * as React from 'react';

import { cn } from '@/src/lib/utils';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const CustomInput = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return <input type={type} className={cn('w-[300px]', className)} ref={ref} {...props} />;
  },
);
CustomInput.displayName = 'Input';

export { CustomInput };
