## Table of Content

- [Useful Commands](#useful-commands)
- [Goals](#goals)
- [Features](#features)

## Getting Started

```bash
git clone --depth 1 https://github.com/ishank1212/Eshkon-NextJS-Assignment.git
cd my-project
rm -r .git
cp .env.example .env
npm run dev
```
Enter the correct values in your `.env` file:

```
CONTENTFUL_SPACE=<your contentful space>
CONTENTFUL_TOKEN=<your contentful token>

```

## Useful Commands

- `dev` - start application in development mode
- `build` - build application in production mode
- `start` - start application in production mode
- `export` - build and export application into a static website
- `postexport` - runs the post-export.js script, creates the sitemap.xml
- `type-check`- type checking for typescript
- `format:write` - runs prettier to format whole code base (`.ts` and `.css`)
- `lint` - lints project using eslint,
- `populate:contentful` - populates Contentful CMS



## Features

- Next.Js with Typescript support out of the box
- Static Export out of the box
- Contentful Integration with scripts to automatically populate CMS
- Easy integration and Deployment over Vercel
- Custom components
- SEO friendly, with dynamic meta tags
- Optimized for speed and scalability

## Stack

- [Next.Js (V9+)](https://github.com/zeit/next.js)
- Typescript
- [Vercel](https://www.vercel.com)
- [Contentful](https://www.contentful.com)
