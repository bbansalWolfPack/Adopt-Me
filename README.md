# Adopt-Me

Sample react app created as part of Intro-To-React-Course by FrontEnd Masters

# Build tools

parcel

# formatter

prettier

# linting

eslint

# What is a bundler?

Browers don't understand lot of new modern JS we write. So we need some tool which can bundle all JS and ship to something which browser's can understand. These tools like parcel (Js bundler's) compiles things into something which even old browser's can render or understand. Parcel itself uses tools like babel, postCSS compiler and multiple more tools to create the final bundle. Browser's definitely don't speak JSX so we need these tools to convert JSX also to something which our browser's can accept.

# Browserslist in package.json

We are telling parcel which browser's we are targetting. Parcel will bundle code according to the browser's we want our app to be supported.

# React Hooks

Hooks are used to add statefullness to our UI

# React Routers

Very useful for Single page applications where within client, user routes to different pages without asking server to load new pages. React router also takes care of accessibility challenges within Single page applications (SPA)
