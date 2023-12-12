const Icon: React.FC<{className?: string}> = ({className}) => {
  return (
    <svg className={className} width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M19.2302 22C14.5687 20.2517 9.43169 20.2517 4.77021 22M19.9422 18.207L22.4272 7.44C22.5692 6.824 21.8162 6.406 21.3692 6.853C18.8132 9.409 14.4782 8.519 13.1362 5.163L12.3712 3.251C12.3414 3.17702 12.2901 3.11364 12.224 3.06901C12.1579 3.02438 12.08 3.00053 12.0002 3.00053C11.9204 3.00053 11.8425 3.02438 11.7764 3.06901C11.7103 3.11364 11.659 3.17702 11.6292 3.251L10.8642 5.163C9.52221 8.52 5.18721 9.41 2.63121 6.853C2.18421 6.406 1.43121 6.823 1.57321 7.44L4.05821 18.207C9.17877 16.2867 14.8217 16.2867 19.9422 18.207Z" stroke="url(#paint0_linear_121_921)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <defs>
        <linearGradient id="paint0_linear_121_921" x1="12.0002" y1="3.00053" x2="12.0002" y2="22" gradientUnits="userSpaceOnUse">
          <stop stop-color="hsl(var(--title))"/>
          <stop offset="1" stop-color="hsl(var(--title))" stop-opacity="0.6"/>
        </linearGradient>
      </defs>
    </svg>
  )
}

export default Icon
