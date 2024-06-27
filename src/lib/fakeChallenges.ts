
interface Challenge {
  serial: number,
  title: string,
  description: string,
  link: string,
  icon: string,
  unlocked: boolean
}
const challenges: Challenge[] = [
  {
    serial: 1,
    unlocked: true,
    title: "Simple NFT Example",
    description: "Create a simple NFT to learn basics of 🏗 scaffold-eth. You'll use 👷‍♀️ HardHat to compile and deploy smart contracts. Then, you'll use a template React app full of important Solana components and hooks. Finally, you'll deploy an NFT to a public network to share with friends! 🚀",
    link: "https://speedrunethereum.com/challenge/simple-nft-example",
    icon: `<svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20.9253 49C20.9253 46.8323 20.9253 45.7497 21.007 44.8373C21.9006 34.685 30.0066 26.635 40.229 25.746C41.1483 25.6667 42.238 25.6667 44.4196 25.6667H49.8376M49.8376 25.6667C49.4876 24.4557 48.769 23.177 47.4926 20.895L44.016 14.6813C42.4526 11.886 41.6733 10.4883 40.5603 9.471C39.5749 8.56923 38.4089 7.88757 37.1396 7.47133C35.7046 7 34.0946 7 30.8746 7H25.074C21.854 7 20.244 7 18.809 7.47133C17.5398 7.88763 16.3737 8.56929 15.3883 9.471C14.2753 10.4883 13.4936 11.886 11.9303 14.6813L8.53764 20.748C7.05597 23.394 6.31631 24.7193 6.02697 26.1193C5.77031 27.3607 5.77031 28.6393 6.02697 29.8807C6.31631 31.2807 7.05597 32.606 8.53764 35.252L11.9303 41.3187C13.4936 44.114 14.2753 45.5117 15.3883 46.5313C16.373 47.4297 17.5373 48.111 18.809 48.5287C20.244 49 21.854 49 25.074 49H31.01C34.1833 49 35.77 49 37.1886 48.5403C38.4429 48.1347 39.598 47.4702 40.579 46.5897C41.6873 45.5957 42.476 44.2283 44.0556 41.496L46.4566 37.3333L47.614 35.1727C49.021 32.5523 49.7256 31.2433 49.994 29.862C50.2634 28.47 50.2099 27.0348 49.8376 25.6667ZM20.93 23.3333C20.6219 23.3355 20.3163 23.2768 20.031 23.1606C19.7456 23.0443 19.486 22.8729 19.267 22.6561C19.0481 22.4393 18.8741 22.1814 18.755 21.8972C18.636 21.613 18.5742 21.3081 18.5733 21C18.5733 19.712 19.6256 18.6667 20.923 18.6667C22.2203 18.6667 23.2726 19.712 23.2726 21C23.2726 22.288 22.2226 23.3333 20.923 23.3333H20.93Z" stroke="url(#paint0_linear_302_1338)" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
<defs>
<linearGradient id="paint0_linear_302_1338" x1="29.3651" y1="11.9412" x2="29.3651" y2="43.8824" gradientUnits="userSpaceOnUse">
<stop stop-color="hsl(var(--title))"/>
<stop offset="1" stop-color="hsl(var(--title))" stop-opacity="0.6"/>
</linearGradient>
</defs>
</svg>
`
  },
  {
    serial: 2,
    title: "Simple NFT Example",
    unlocked: false,
    description: "Create a simple NFT to learn basics of 🏗 scaffold-eth. You'll use 👷‍♀️ HardHat to compile and deploy smart contracts. Then, you'll use a template React app full of important Solana components and hooks. Finally, you'll deploy an NFT to a public network to share with friends! 🚀",
    link: "https://speedrunethereum.com/challenge/simple-nft-example",
    icon: `<svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20.9253 49C20.9253 46.8323 20.9253 45.7497 21.007 44.8373C21.9006 34.685 30.0066 26.635 40.229 25.746C41.1483 25.6667 42.238 25.6667 44.4196 25.6667H49.8376M49.8376 25.6667C49.4876 24.4557 48.769 23.177 47.4926 20.895L44.016 14.6813C42.4526 11.886 41.6733 10.4883 40.5603 9.471C39.5749 8.56923 38.4089 7.88757 37.1396 7.47133C35.7046 7 34.0946 7 30.8746 7H25.074C21.854 7 20.244 7 18.809 7.47133C17.5398 7.88763 16.3737 8.56929 15.3883 9.471C14.2753 10.4883 13.4936 11.886 11.9303 14.6813L8.53764 20.748C7.05597 23.394 6.31631 24.7193 6.02697 26.1193C5.77031 27.3607 5.77031 28.6393 6.02697 29.8807C6.31631 31.2807 7.05597 32.606 8.53764 35.252L11.9303 41.3187C13.4936 44.114 14.2753 45.5117 15.3883 46.5313C16.373 47.4297 17.5373 48.111 18.809 48.5287C20.244 49 21.854 49 25.074 49H31.01C34.1833 49 35.77 49 37.1886 48.5403C38.4429 48.1347 39.598 47.4702 40.579 46.5897C41.6873 45.5957 42.476 44.2283 44.0556 41.496L46.4566 37.3333L47.614 35.1727C49.021 32.5523 49.7256 31.2433 49.994 29.862C50.2634 28.47 50.2099 27.0348 49.8376 25.6667ZM20.93 23.3333C20.6219 23.3355 20.3163 23.2768 20.031 23.1606C19.7456 23.0443 19.486 22.8729 19.267 22.6561C19.0481 22.4393 18.8741 22.1814 18.755 21.8972C18.636 21.613 18.5742 21.3081 18.5733 21C18.5733 19.712 19.6256 18.6667 20.923 18.6667C22.2203 18.6667 23.2726 19.712 23.2726 21C23.2726 22.288 22.2226 23.3333 20.923 23.3333H20.93Z" stroke="url(#paint0_linear_302_1338)" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
<defs>
<linearGradient id="paint0_linear_302_1338" x1="29.3651" y1="11.9412" x2="29.3651" y2="43.8824" gradientUnits="userSpaceOnUse">
<stop stop-color="hsl(var(--title))"/>
<stop offset="1" stop-color="hsl(var(--title))" stop-opacity="0.6"/>
</linearGradient>
</defs>
</svg>
`
  },
  {
    serial: 3,
    title: "Simple NFT Example",
    unlocked: false,
    description: "Create a simple NFT to learn basics of 🏗 scaffold-eth. You'll use 👷‍♀️ HardHat to compile and deploy smart contracts. Then, you'll use a template React app full of important Solana components and hooks. Finally, you'll deploy an NFT to a public network to share with friends! 🚀",
    link: "https://speedrunethereum.com/challenge/simple-nft-example",
    icon: `<svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20.9253 49C20.9253 46.8323 20.9253 45.7497 21.007 44.8373C21.9006 34.685 30.0066 26.635 40.229 25.746C41.1483 25.6667 42.238 25.6667 44.4196 25.6667H49.8376M49.8376 25.6667C49.4876 24.4557 48.769 23.177 47.4926 20.895L44.016 14.6813C42.4526 11.886 41.6733 10.4883 40.5603 9.471C39.5749 8.56923 38.4089 7.88757 37.1396 7.47133C35.7046 7 34.0946 7 30.8746 7H25.074C21.854 7 20.244 7 18.809 7.47133C17.5398 7.88763 16.3737 8.56929 15.3883 9.471C14.2753 10.4883 13.4936 11.886 11.9303 14.6813L8.53764 20.748C7.05597 23.394 6.31631 24.7193 6.02697 26.1193C5.77031 27.3607 5.77031 28.6393 6.02697 29.8807C6.31631 31.2807 7.05597 32.606 8.53764 35.252L11.9303 41.3187C13.4936 44.114 14.2753 45.5117 15.3883 46.5313C16.373 47.4297 17.5373 48.111 18.809 48.5287C20.244 49 21.854 49 25.074 49H31.01C34.1833 49 35.77 49 37.1886 48.5403C38.4429 48.1347 39.598 47.4702 40.579 46.5897C41.6873 45.5957 42.476 44.2283 44.0556 41.496L46.4566 37.3333L47.614 35.1727C49.021 32.5523 49.7256 31.2433 49.994 29.862C50.2634 28.47 50.2099 27.0348 49.8376 25.6667ZM20.93 23.3333C20.6219 23.3355 20.3163 23.2768 20.031 23.1606C19.7456 23.0443 19.486 22.8729 19.267 22.6561C19.0481 22.4393 18.8741 22.1814 18.755 21.8972C18.636 21.613 18.5742 21.3081 18.5733 21C18.5733 19.712 19.6256 18.6667 20.923 18.6667C22.2203 18.6667 23.2726 19.712 23.2726 21C23.2726 22.288 22.2226 23.3333 20.923 23.3333H20.93Z" stroke="url(#paint0_linear_302_1338)" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
<defs>
<linearGradient id="paint0_linear_302_1338" x1="29.3651" y1="11.9412" x2="29.3651" y2="43.8824" gradientUnits="userSpaceOnUse">
<stop stop-color="hsl(var(--title))"/>
<stop offset="1" stop-color="hsl(var(--title))" stop-opacity="0.6"/>
</linearGradient>
</defs>
</svg>
`
  }
]

export default challenges
