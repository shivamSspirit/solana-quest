import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@components/ui/card"
import Link from "next/link"
import { Button } from "./button"
import { Lock, Rocket } from "@lib/icons"

interface ChallegeCardProps {
  serial: number,
  icon: string,
  title: string,
  description: string,
  unlocked: boolean,
  link: string
}
const ChallengeCard: React.FC<ChallegeCardProps> = ({unlocked, icon, title, serial, link, description}) => {
  return (
    <Card className="">
      <CardHeader>
        <CardDescription className="text-card-foreground">Challenge #{serial}</CardDescription>
        <span dangerouslySetInnerHTML={{__html: icon}} />
        <CardTitle className="pt-1 font-medium">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="leading-6" >{description}  </p>
      </CardContent>
      <CardFooter className="w-full" >
        <Button asChild disabled={!unlocked} className={"tracking-wide gap-2 "} outerClass="w-full" >
          <Link href={link} aria-disabled={!unlocked}>
            {unlocked ? (
              <>
                <Rocket />
                START QUEST
              </>
            ) : (
                <>
                  <Lock />
                  LOCKED
                </>
              ) }
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

export default ChallengeCard