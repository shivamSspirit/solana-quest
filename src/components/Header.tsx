import CustomConnect from "./CustomConnect"
import ThemeSwitcher from "./ThemeSwitcher"

const Header = () => {


  return (
    <header className="flex gap-4 w-fit ml-auto mr-4 sm:mr-10 mt-8">
      <CustomConnect />      
      <ThemeSwitcher />
    </header>
  )
}

export default Header
