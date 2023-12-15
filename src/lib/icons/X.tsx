const Icon: React.FC<{className?: string, gradient?: boolean}> = ({className, gradient = false}) => {
  return (
    <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20.5498 3L14.3318 10.105L20.7078 19.106C21.1418 19.719 21.3578 20.025 21.3478 20.28C21.3435 20.3896 21.3152 20.4969 21.2649 20.5943C21.2147 20.6917 21.1436 20.777 21.0568 20.844C20.8538 21 20.4788 21 19.7288 21H18.0398C17.5848 21 17.3578 21 17.1498 20.939C16.9663 20.8847 16.7949 20.7957 16.6448 20.677C16.4748 20.544 16.3438 20.358 16.0808 19.987L11.4308 13.421L5.38984 4.894C4.95684 4.281 4.73984 3.975 4.74984 3.72C4.75429 3.61035 4.78274 3.50302 4.8332 3.40557C4.88365 3.30812 4.95487 3.22292 5.04184 3.156C5.24384 3 5.61984 3 6.36984 3H8.05784C8.51284 3 8.73984 3 8.94684 3.061C9.1307 3.1152 9.30246 3.20414 9.45284 3.323C9.62284 3.457 9.75384 3.642 10.0168 4.013L14.3328 10.105M4.79984 21L11.4318 13.421"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
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
