const Icon: React.FC<{className?: string, gradient?: boolean}> = ({className, gradient = false}) => {
  return (
    <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">

      <path d="M5.52197 10.792L19.412 5.39596C20.184 5.09596 20.571 4.94596 20.855 5.01796C20.9766 5.04807 21.0906 5.10355 21.1893 5.18075C21.2881 5.25795 21.3694 5.35514 21.428 5.46596C21.561 5.71996 21.493 6.11896 21.356 6.91596L19.798 15.998C19.561 17.378 19.442 18.069 19.068 18.454C18.7374 18.7923 18.2878 18.9882 17.815 19C17.27 19.014 16.661 18.64 15.442 17.893L12.856 16.306C12.08 15.83 11.691 15.592 11.524 15.271C11.377 14.9912 11.3395 14.6668 11.419 14.361C11.51 14.013 11.835 13.697 12.485 13.066L16.851 8.82596L9.49697 13.111C8.90697 13.455 8.61297 13.626 8.29597 13.72C8.01497 13.803 7.72097 13.84 7.42797 13.831C7.09597 13.821 6.76597 13.729 6.10497 13.545L5.65997 13.422C4.42897 13.08 3.81297 12.909 3.62997 12.619C3.55271 12.4963 3.50818 12.3558 3.50066 12.2111C3.49313 12.0663 3.52285 11.922 3.58697 11.792C3.73797 11.485 4.33297 11.254 5.52197 10.792Z"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
        stroke={ gradient ? `url(#gradient)` : `hsl(var(--foreground))`}
      />

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
