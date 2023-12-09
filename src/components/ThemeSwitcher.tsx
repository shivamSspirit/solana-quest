import { useTheme } from "next-themes"
import { Button } from "./ui/button"

const ThemeSwitcher = () => {
  const {setTheme, theme} = useTheme()

  function toggleTheme() {
    if(theme === "light") setTheme("dark")
    else setTheme("light")
  }

  return <Button variant="secondary" size="icon" onClick={toggleTheme}>
    {theme === "dark" && (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        viewBox="0 0 24 24"
      >
        <g clipPath="url(#clip0_84_1313)">
          <mask
            id="mask0_84_1313"
            style={{ maskType: "luminance" }}
            width="24"
            height="24"
            x="0"
            y="0"
            maskUnits="userSpaceOnUse"
          >
            <path fill="#fff" d="M0 0h24v24H0V0z"></path>
          </mask>
          <g mask="url(#mask0_84_1313)">
            <path
              stroke="url(#paint0_linear_84_1313)"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 23v-1m-7.778-2.222l.707-.707M1 12h1m2.222-7.778l.707.707M12 2V1m7.071 3.929l.707-.707M22 12h1m-3.929 7.071l.707.707M18 12a6 6 0 11-12 0 6 6 0 0112 0z"
            ></path>
          </g>
        </g>
        <defs>
          <linearGradient
            id="paint0_linear_84_1313"
            x1="12"
            x2="12"
            y1="1"
            y2="23"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="hsl(var(--start-stop))"></stop>
            <stop offset="1" stopColor="hsl(var(--end-stop))"></stop>
          </linearGradient>
          <clipPath id="clip0_84_1313">
            <path fill="#fff" d="M0 0H24V24H0z"></path>
          </clipPath>
        </defs>
      </svg>
    )}
    {theme === "light" && (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        fill="none"
        viewBox="0 0 20 20"
      >
        <path
          stroke="url(#paint0_linear_317_2983)"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M18.997 11.907A7.949 7.949 0 018.09 1a9.112 9.112 0 1010.907 10.907z"
        ></path>
        <defs>
          <linearGradient
            id="paint0_linear_317_2983"
            x1="9.998"
            x2="9.998"
            y1="1"
            y2="18.997"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="hsl(var(--start-stop))"></stop>
            <stop offset="1" stopColor="hsl(var(--end-stop))"></stop>
          </linearGradient>
        </defs>
      </svg>
    )}
  </Button>
}

export default ThemeSwitcher
