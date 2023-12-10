import ThemeSwitcher from "./ThemeSwitcher"
import { Button } from "./ui/button"
import { Wallet } from "lucide-react"

const Header = () => {
  return (
    <header className="flex gap-4 w-fit ml-auto mr-4 sm:mr-10 mt-8">
      <Button className="gap-2 px-8">
        <Wallet />
        Connect Wallet
      </Button>
      <ThemeSwitcher />
    </header>
  )
}

export default Header
