const Icon: React.FC<{className?: string}> = ({className}) => {
  return (
    <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12.5 21C13.5 21 22.5 15.9768 22.5 8.94427C22.5 3.50672 15.6625 0.66165 12.5 5.4274C9.33207 0.653479 2.5 3.5018 2.5 8.94428C2.5 15.9768 11.5 21 12.5 21Z" stroke="url(#paint0_linear_84_1026)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <defs>
        <linearGradient id="paint0_linear_84_1026" x1="13.1165" y1="5.11765" x2="13.1165" y2="18.8067" gradientUnits="userSpaceOnUse">
          <stop stop-color="hsl(var(--title))"/>
          <stop offset="1" stop-color="hsl(var(--title))" stop-opacity="0.6"/>
        </linearGradient>
      </defs>
    </svg>
  )
}

export default Icon
