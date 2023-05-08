# react-tailwind-loaders

React.js loaders build with TailwindCSS, usable in any react or next application with tailwindcss.

To make use of this package, make sure you update your tailwind config file to include the following:

```js
content: [
  './node_modules/react-tailwind-loaders/**/*.{css,js}', // <- this line is important
  './src/**/*.{ts,tsx}',
],
```
