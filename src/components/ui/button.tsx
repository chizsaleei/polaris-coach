'use client'

import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

/**
 * Tailwind v4-friendly button using shadcn-style patterns.
 * Uses design tokens from globals.css (e.g., bg-primary, text-foreground, border).
 */
const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors ' +
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 ' +
    'border',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground hover:opacity-95 border-transparent',
        secondary: 'bg-secondary text-secondary-foreground hover:opacity-95 border-transparent',
        outline: 'bg-background text-foreground hover:bg-muted/60 border-border',
        ghost: 'bg-transparent hover:bg-muted/60 text-foreground border-transparent',
        destructive:
          'bg-destructive text-destructive-foreground hover:opacity-95 border-transparent',
      },
      size: {
        sm: 'h-9 px-3',
        md: 'h-10 px-4',
        lg: 'h-11 px-5',
        icon: 'h-10 w-10 p-0',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
    },
  },
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp ref={ref} className={cn(buttonVariants({ variant, size }), className)} {...props} />
    )
  },
)
Button.displayName = 'Button'

export { buttonVariants }
