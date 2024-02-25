[![Netlify Status](https://api.netlify.com/api/v1/badges/12ca189b-a0ff-4947-9749-a52bb521006f/deploy-status)](https://app.netlify.com/sites/nextjs-static-starter-kit/deploys)

<p align="left">
  <a href="https://techhive.io/" target="blank"><img src="https://www.techhive.io/static/brand/logo-masterclass.svg" width="250" alt="Nest Logo" /></a>
</p>

# Next JS Static starter-kit

by [@techhive.IO](https://www.techhive.io/)

## Live shot

![Live Shot](https://i.imgur.com/hXFQYRp.png)

## Table of Content

- [Live Demo](https://nextjs-static-starter-kit.netlify.com/)
- [Getting Started](#setting-started)
- [Useful Commands](#useful-commands)
- [Goals](#goals)
- [Features](#features)

## Getting Started

```bash
git clone --depth 1 https://github.com/techhiveIO/nextjs-blog-starter-kit my-project
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
- Easy integration and Deployment over Vercel (formerly ZEIT)
- Custom components
- SEO friendly, with dynamic meta tags
- Optimized for speed and scalability

## Stack

- [Next.Js (V9+)](https://github.com/zeit/next.js)
- Typescript
- [Vercel]
- [Contentful](https://www.contentful.com)