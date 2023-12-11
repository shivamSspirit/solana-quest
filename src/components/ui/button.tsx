import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "lib/utils"

const buttonBorderVariants = cva(
  `from-[-12.59%] via-[50.97%] to-[86.21%] rounded-full p-[0.1rem]
text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 inline-block overscroll-none overflow-hidden `,
  {
    variants: {
      variant: {
        default: `bg-border-gradient from-border-stop-start
via-border-stop-mid/0 to-border-stop-end `,
        destructive:
        `bg-border-gradient from-destructive-stop-start
via-border-stop-mid/0 to-destructive-stop-end`,
        outline:
        `bg-border-gradient from-border-stop-start
via-border-stop-mid/0 to-border-stop-end `,
        secondary:
        `bg-border-gradient from-border-stop-start
via-border-stop-mid/0 to-border-stop-end `,
        ghost: `bg-transparent`,
        link: `bg-transparent `,
      }
    },
    defaultVariants: {
      variant: "default",
    },
  },
)

const buttonVariants = cva(
  `flex items-center justify-center whitespace-nowrap rounded-full 
from-[-4.59%] to-[100%] `,
  {
    variants: {
      variant: {
        default: "bg-button-gradient from-primary-stop-start/90 to-primary-stop-end text-primary-foreground hover:from-primary-stop-start hover:to-primary-stop-end",
        destructive:
        "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
        "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
        "bg-secondary hover:bg-secondary/90",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-foreground underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> {
    asChild?: boolean,
    outerClass?: string
  }

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, disabled, variant, size, asChild = false, children, outerClass, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <span
        className={cn(buttonBorderVariants({ variant }), disabled && "opacity-50 pointer-events-none" ,outerClass)}
        {...props}
      >
        <Comp
          ref={ref}
          className={cn(buttonVariants({ variant, size, className }), "cursor-pointer")} >{children}
        </Comp>
      </span>
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
