import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/src/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center text-sm cursor-pointer ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default:
          'rounded-[20px] border-2 border-solid border-white hover:border-yellow leading-4 max-w-32 font-bold text-xs',
        ghost:
          'rounded-[20px] border-2 bg-blue-100 text-blue-200 border-white hover:border-blue-200 leading-4 max-w-32 font-bold text-xs',
        discount:
          'rounded-[20px] border-2 bg-red-100 text-red-200 border-white hover:border-red-200 leading-4 max-w-32 font-bold text-xs',
        link: '',
      },
      size: {
        default: 'h-10 px-3 py-0',
        sm: 'h-[56px] w-12',
        lg: '',
        icon: '',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const CustomButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
    );
  },
);
CustomButton.displayName = 'Button';

export { CustomButton, buttonVariants };
