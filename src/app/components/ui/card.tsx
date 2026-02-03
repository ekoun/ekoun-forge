import React from 'react';
import { motion, HTMLMotionProps } from 'motion/react';
import { cn } from './utils';

interface CardProps extends Omit<HTMLMotionProps<"div">, 'children'> {
  hoverEffect?: boolean;
  children?: React.ReactNode;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, hoverEffect = true, children, ...props }, ref) => {
    return (
      <motion.div
        ref={ref}
        className={cn(
          "relative overflow-hidden rounded-2xl bg-white p-6 shadow-sm dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 transition-colors",
          hoverEffect && "hover:shadow-lg hover:shadow-[#8B5CF6]/5 dark:hover:shadow-[#8B5CF6]/10 hover:border-[#8B5CF6]/20 dark:hover:border-[#8B5CF6]/30 group",
          className
        )}
        {...props}
      >
        {children}
        {hoverEffect && (
          <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-tr from-[#8B5CF6]/5 to-transparent" />
        )}
      </motion.div>
    );
  }
);
Card.displayName = "Card";
