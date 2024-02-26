## Setting up Next.Js

npm install -g create-next-app
create-next-app Eshkon-NextJS-Assignment && cd Eshkon-NextJS-Assignment

## Integrating Typescript

npm install --save-dev typescript @types/react @types/node

## CSS plugin for styling

npm install --save @zeit/next-css

## User Experience

To build a blog that appeals to your users, we need to define the user experience.

We define our requirements first. The blog has the following primary purposes:

A user can see all the blog posts,
A user can navigate a large number of blog posts using pagination,
A user can filter by a topic that he is interested in,
A user should be able to read a blog post

## Application Architecture

- core // contains everything related to fetching the data from our CMS and is shared across the entire application
- shared // contains common components, helper functions
- public // static folder where we can store assets to be directly compiled by Next, this is mainly used to inject the robot.txt file
- assets // contain website specific assets such as images
- store// contain redux store, action, reducers
- pages // contains the pages

## Content Models

create models in the utils folder for better structure
run cmd: npm run populate:contentful to populate cms with all the content models defined

## Layout Component

The layout component serves as a container across all pages of the application.
![Screenshot (331)](https://github.com/ishank1212/Eshkon-NextJS-Assignment/assets/73271919/994f027f-0e2e-438d-8460-882e87aa52eb)

## Card

The card in our case displays the hero image of the blog, the title, description and the call to action. The call to action redirects the user to the blog post.

Added some functions that help us to pass the dynamic URLs automatically.

Under the core folder, create a folder called helper, and include a helper.ts file:
![Screenshot (332)](https://github.com/ishank1212/Eshkon-NextJS-Assignment/assets/73271919/f06339e1-d26e-4cc7-a011-a086185160ff)

Next, under the shared/components folder, create a card folder and an index.tsx
![Screenshot (333)](https://github.com/ishank1212/Eshkon-NextJS-Assignment/assets/73271919/235c5890-755a-45ae-89ec-9ea584172397)

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
- Theme Toggle Button (light/dark)
- Easy integration and Deployment over Vercel
- Custom components
- SEO friendly, with dynamic meta tags
- Optimized for speed and scalability

## Stack

- [Next.Js (V9+)](https://github.com/zeit/next.js)
- Typescript
- [Vercel](https://www.vercel.com)
- [Contentful](https://www.contentful.com)

## Contentful Images

![Screenshot (330)](https://github.com/ishank1212/Eshkon-NextJS-Assignment/assets/73271919/45827b42-b4d5-42fc-8f85-17cf8b62a4b0)
![Screenshot (329)](https://github.com/ishank1212/Eshkon-NextJS-Assignment/assets/73271919/ac2b5f5e-b322-4c56-be02-e420814314ad)
![Screenshot (328)](https://github.com/ishank1212/Eshkon-NextJS-Assignment/assets/73271919/a646d4d2-068b-472d-b789-cf5fd976af44)
![Screenshot (323)](https://github.com/ishank1212/Eshkon-NextJS-Assignment/assets/73271919/a83e0a49-83f0-4e01-b848-4bfaee92b24a)
![Screenshot (324)](https://github.com/ishank1212/Eshkon-NextJS-Assignment/assets/73271919/86077274-205b-47fb-ba08-b84ae95162db)
![Screenshot (325)](https://github.com/ishank1212/Eshkon-NextJS-Assignment/assets/73271919/7c560a0c-c8c4-489e-8285-20a0d75ba213)
![Screenshot (326)](https://github.com/ishank1212/Eshkon-NextJS-Assignment/assets/73271919/5b496278-f21f-407a-91aa-296265d6f07e)
![Screenshot (327)](https://github.com/ishank1212/Eshkon-NextJS-Assignment/assets/73271919/5baffcb5-a3e0-456b-9ebc-98e8f1deb9ab)
