const Icon: React.FC<{className?: string}> = ({className}) => {
  return (
    <svg className={className} width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10.5 14.1667V12.5M10.5 12.5C10.9275 12.5 11.2741 12.1267 11.2741 11.6667C11.2741 11.2067 10.9275 10.8333 10.5 10.8333C10.0725 10.8333 9.72579 11.2067 9.72579 11.6667C9.72579 12.1267 10.0725 12.5 10.5 12.5ZM15.1441 7.69917V7.5C15.1441 4.73833 13.065 2.5 10.5 2.5C7.93495 2.5 5.85579 4.73833 5.85579 7.5V7.69917M15.1441 7.69917C14.5725 7.5 13.8041 7.5 12.4191 7.5H8.58079C7.19579 7.5 6.42745 7.5 5.85579 7.69917M15.1441 7.69917C15.2141 7.72333 15.2808 7.75 15.3458 7.78083C16.1383 8.15583 16.7491 8.87 17.03 9.7525C17.2408 10.4133 17.1766 11.2475 17.0466 12.915C16.9358 14.3508 16.88 15.0683 16.6241 15.6317C16.2825 16.3825 15.6916 16.9683 14.9683 17.2725C14.4266 17.5 13.7566 17.5 12.4183 17.5H8.58162C7.24412 17.5 6.57495 17.5 6.03162 17.2725C5.30912 16.9683 4.71745 16.3825 4.37662 15.6317C4.11995 15.0683 4.06495 14.3508 3.95329 12.915C3.82495 11.2475 3.75995 10.4133 3.96995 9.7525C4.25162 8.87 4.86245 8.15583 5.65495 7.78083C5.71995 7.75 5.78579 7.7225 5.85579 7.69917" stroke="hsl(var(--foreground))" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  )
}

export default Icon
