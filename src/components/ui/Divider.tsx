import { cn } from "@lib/utils"

const Divider: React.FC<{className?: string}> = ({className}) => {
  return (
    <span className={cn("inline-block w-full h-[3px] bg-gradient-to-r from-transparent via-primary to-transparent ",className)} />
  )
}

export default Divider
