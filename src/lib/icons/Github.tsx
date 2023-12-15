const Icon: React.FC<{className?: string, gradient?: boolean}> = ({className, gradient = false}) => {
  return (
    <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10.5 14.9993C9.84732 15.6987 9.48919 16.6227 9.5 17.5793V20.9993M14.5 14.9993C15.1527 15.6987 15.5108 16.6227 15.5 17.5793V20.9993M9.5 19.0493C8.60549 19.4055 7.63532 19.5294 6.68 19.4093C5.16 18.8893 5.56 17.5093 4.78 16.9393C4.40518 16.6713 3.96037 16.5184 3.5 16.4993M19.5 9.74927C19.5 12.7493 17.55 14.9993 12.5 14.9993C7.45 14.9993 5.5 12.7493 5.5 9.74927C5.4753 8.70844 5.70893 7.67772 6.18 6.74927C5.84 5.27927 5.97 3.46927 6.7 3.10927C7.43 2.74927 8.97 3.40927 10.24 4.25927C10.986 4.12615 11.7422 4.05922 12.5 4.05927C13.2572 4.05262 14.0134 4.11285 14.76 4.23927C16.03 3.38927 17.64 2.75927 18.3 3.08927C18.96 3.41927 19.16 5.25927 18.82 6.72927C19.2943 7.66371 19.528 8.70171 19.5 9.74927Z" 
        stroke={ gradient ? `url(#gradient)` : `hsl(var(--foreground))`} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <defs>
        <linearGradient id="gradient" x1="11.9944" y1="5.11756" x2="11.9944" y2="18.8061" gradientUnits="userSpaceOnUse">
          <stop stop-color="hsl(var(--title))"/>
          <stop offset="1" stop-color="hsl(var(--title))" stop-opacity="0.6"/>
        </linearGradient>
      </defs>
    </svg>

  )
}

export default Icon
