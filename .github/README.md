# **React Tailwind Loaders**

[![Bundle size](https://img.shields.io/bundlephobia/min/react-tailwind-loaders/latest?style=for-the-badge&color=3178c6)](https://bundlephobia.com/package/react-tailwind-loaders@latest)&nbsp;
![Downloads](https://img.shields.io/npm/dt/react-tailwind-loaders?style=for-the-badge)&nbsp;
[![License](https://img.shields.io/npm/l/react-tailwind-loaders?style=for-the-badge&color=efb103)](https://github.com/m10rten/react-tailwind-loaders/blob/main/LICENSE)&nbsp;
[![Version](https://img.shields.io/npm/v/react-tailwind-loaders?style=for-the-badge&color=cb3837&logo=npm)](https://www.npmjs.com/package/react-tailwind-loaders)&nbsp;
[![GitHub Repo stars](https://img.shields.io/github/stars/m10rten/react-tailwind-loaders?color=E9E9E9&logo=Github&style=for-the-badge)](https://www.github.com/m10rten/react-tailwind-loaders)&nbsp;
![GitHub issues](https://img.shields.io/github/issues-raw/m10rten/react-tailwind-loaders?label=issues&style=for-the-badge)

## Installation

To install the `react-tailwind-loaders` package, simply run the following command in your terminal:

```bash
#npm
npm install react-tailwind-loaders
```

```bash
#yarn
yarn add react-tailwind-loaders
```

## DribbleLoader

The `DribbleLoader` component is a React component that provides a full-screen overlay loading animation with dots. It has several customizable props that allow you to configure its appearance and behavior.

### Props

The following props are available for configuring the `DribbleLoader` component:

<!-- prettier-ignore -->
| Prop Name | Type | Default Value | Description |
| --- | --- | --- | --- |
| `background` | string | `"bg-slate-300"` | Sets the background color of the loader. |
| `foreground` | string | `"bg-gray-600"` | Sets the foreground color of the loader. Note that this prop will be overridden by `childClassName` or `className`. |
| `delay` | number | `800` | Sets the delay in milliseconds before the loader fades out. |
| `forceUpdate` | boolean | `false` | Forces an update of the component when its value changes. |
| `count` | number | `3` | Sets the number of dots in the loader. |
| `className` | string | `""` | Sets the CSS class name for the loader. |
| `childClassName` | string | `""` | Sets the CSS class name for the dots in the loader. |
| `speed` | number (0.5 - 5) | `1` | Sets the speed of the loader's animation. |

### Example Usage

To use the `DribbleLoader` component in your React application, simply import it and add it to your JSX code with the desired props:

```jsx
import { DribbleLoader } from "react-tailwind-loaders";

function MyComponent() {
  return (
    <div>
      <h1>Loading...</h1>
      <DribbleLoader
        background="bg-slate-900"
        foreground="bg-cyan-400"
        delay={1200}
        forceUpdate={state} // not recommended to use this prop, but it's here if you need it
        count={4} // 1 - 10
        className="!duration-700 bg-green-200"
        childClassName="rounded-full !w-16 mx-6 bg-red-400"
      />
    </div>
  );
}
```

## InlineSpinner

The `InlineSpinner` component is a React component that provides an animated spinner that can be used inline with text or other elements. It has several customizable props that allow you to configure its appearance and behavior.

### Props

The following props are available for configuring the `InlineSpinner` component:

<!-- prettier-ignore -->
| Prop Name | Type | Default Value | Description |
| --- | --- | --- | --- |
| `thumbColor` | string | `"text-indigo-600"` | Sets the color of the spinner's thumb. |
| `trackColor` | string | `"text-gray-900"` | Sets the color of the spinner's track. |
| `speed` | number (0.5 - 5) | `1` | Sets the speed of the spinner's animation. |
| `className` | string | `""` | Sets the CSS class name for the spinner. |
| `size` | `"small"`, `"medium"`, `"large"` | `"medium"` | Sets the size of the spinner. |

### Example Usage

To use the `InlineSpinner` component in your React application, simply import it and add it to your JSX code with the desired props:

```jsx
import { InlineSpinner } from "react-tailwind-loaders";

function MyComponent() {
  return (
    <div>
      <h1>Loading...</h1>
      <InlineSpinner
        thumbColor="text-indigo-600"
        trackColor="text-gray-400"
        speed={1.2}
        size="medium"
      />
    </div>
  );
}
```

## SkeletenLoader

The `SkeletenLoader` component is a React component that provides a customizable skeleton loader for various types of content, including images, text, cards, videos, and avatars. It has two customizable props that allow you to specify the type of content and the CSS class name for styling.

### Props

The following props are available for configuring the `SkeletenLoader` component:

<!-- prettier-ignore -->
| Prop Name | Type | Default Value  | Description |
| --- | --- | --- | --- |
| `type` - `required` | `"image"`, `"text"`, `"card"`, `"video"`, or `"avatar"` | - | Sets the type of content for the skeleton loader. |
| `className` | string | `""` | Sets the CSS class name for the skeleton loader. |

### Example Usage

To use the `SkeletenLoader` component in your React application, simply import it and add it to your JSX code with the desired props:

```jsx
import { SkeletenLoader } from "react-tailwind-loaders";

function MyComponent() {
  return (
    <div className="flex flex-wrap">
      <SkeletenLoader type="video" className="mx-2" />
      <SkeletenLoader type="text" className="h-4 mx-2 max-w-xs" />
      <SkeletenLoader type="image" className="mx-2" />
      <SkeletenLoader type="avatar" className="mx-2" />
      <SkeletenLoader type="card" className="mx-2" />
    </div>
  );
}
```

## Security 🛡️

We've taken the following measures to ensure that the `react-tailwind-loaders` package is secure for your project:

- Dependabot is enabled to automatically update the package's dependencies in case of any security vulnerabilities.
- ESLint and Prettier are used to lint and format the package's source code to ensure it is free of security vulnerabilities and code smells.
- The package does not rely on any external dependencies outside of its development dependencies.
- The package's source code is open-source and available for anyone to view and contribute to.
- The package is licensed under the permissive MIT license, allowing it to be used in any project, including commercial ones.
- The package is deployed to NPM directly from the Github repository, ensuring that the source code is always synchronized and cannot be tampered with.
