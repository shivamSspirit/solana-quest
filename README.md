Use pnpm package manager for this project

## Getting Started

First, run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Folder structure

### public
- All static assets that stay at yoururl.com/

### src
- app
- - All routes
- components
- - providers
- - - All providers used at layout.tsx
- - ui
- - - All reusable UI components using shadcn
- - Rest once used components
- content
- - All markdown content
- lib
- - assets
- - - Assets meant to be responsive live here
- - env
- - - All environment variables live here
- - pages
- - - All pages live here
- - utils
- - - Type safe env defination live here
- - icons
- - - All custom dark and light theme supporting icons live here
- - All other utils and helper functions live here

## Content Markdown format
The markdown files should contain the following content to work
accurately.

- serial: number
- title: string
- description: string
- icon: string - .tsx icon file name that exists in `src/lib/icons`
