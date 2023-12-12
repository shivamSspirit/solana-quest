const Icon: React.FC<{className?: string}> = ({className}) => {
  return (
    <svg className={className} width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16.7348 14.656C17.784 13.6925 18.5142 12.4318 18.828 11.0423C19.1418 9.65284 19.0243 8.20069 18.491 6.87979C17.9578 5.55888 17.0342 4.43211 15.8437 3.64993C14.6532 2.86775 13.2524 2.4674 11.8283 2.50234C10.4042 2.53728 9.02475 3.00585 7.87402 3.84547C6.7233 4.68509 5.85612 5.85581 5.38828 7.20127C4.92045 8.54674 4.87424 10.0029 5.25582 11.3753C5.6374 12.7478 6.4286 13.9711 7.52377 14.882M16.7348 14.656C15.4444 15.8442 13.7538 16.5026 11.9998 16.5C10.3642 16.5024 8.7798 15.9297 7.52377 14.882M16.7348 14.656L18.4998 22.5L18.1408 22.28C16.3078 21.152 14.1899 20.5732 12.0381 20.6122C9.8862 20.6512 7.79064 21.3063 5.99977 22.5L7.52377 14.882" stroke="url(#paint0_linear_121_932)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <defs>
        <linearGradient id="paint0_linear_121_932" x1="12" y1="2.50023" x2="12" y2="22.5" gradientUnits="userSpaceOnUse">
          <stop stop-color="hsl(var(--title))"/>
          <stop offset="1" stop-color="hsl(var(--title))" stop-opacity="0.6"/>
        </linearGradient>
      </defs>
    </svg>


  )
}

export default Icon
