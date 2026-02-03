import React from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { motion, HTMLMotionProps } from 'motion/react';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: 'primary' | 'outline' | 'ghost' | 'whatsapp';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', isLoading, children, ...props }, ref) => {
    const baseStyles = "inline-flex items-center justify-center rounded-lg font-montserrat font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98]";
    
    const variants = {
      primary: "bg-[#8B5CF6] text-white hover:bg-[#7C3AED] shadow-lg hover:shadow-[#8B5CF6]/25 dark:hover:shadow-[#8B5CF6]/40 glow-effect",
      outline: "border-2 border-[#8B5CF6] text-[#8B5CF6] hover:bg-[#8B5CF6]/10 dark:text-[#A78BFA] dark:border-[#A78BFA] dark:hover:bg-[#A78BFA]/10",
      ghost: "text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-white/10",
      whatsapp: "bg-[#25D366] text-white hover:bg-[#20BD5A] shadow-lg hover:shadow-[#25D366]/25"
    };

    const sizes = {
      sm: "h-9 px-4 text-xs uppercase tracking-wider",
      md: "h-11 px-6 text-sm uppercase tracking-wider",
      lg: "h-14 px-8 text-base uppercase tracking-wider"
    };

    return (
      <motion.button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        disabled={isLoading}
        {...props}
      >
        {isLoading ? (
          <span className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
        ) : null}
        {children}
      </motion.button>
    );
  }
);
Button.displayName = "Button";
