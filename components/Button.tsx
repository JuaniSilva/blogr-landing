import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  fullWidth?: boolean;
  className?: string;
}

export default function Button({
  children,
  variant = 'primary',
  fullWidth = false,
  className,
}: ButtonProps) {
  const variants = {
    primary:
      'bg-gradient-to-r from-gradient-light-red to-gradient-red text-white',
    secondary: 'bg-white text-primary-red',
    outline: 'border border-white bg-transparent text-white',
    ghost: '',
  };
  const buttonWidth = fullWidth ? 'w-full' : 'w-fit';

  return (
    <button
      className={cn(
        'rounded-full px-10 py-3 font-bold',
        buttonWidth,
        variants[variant],
        className
      )}
    >
      {children}
    </button>
  );
}
