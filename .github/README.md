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

## Props

The following props are available for configuring the `InlineSpinner` component:

<!-- prettier-ignore -->
| Prop Name | Type | Default Value | Description |
| --- | --- | --- | --- |
| `thumbColor` | string | `"text-indigo-600"` | Sets the color of the spinner's thumb. |
| `trackColor` | string | `"text-gray-900"` | Sets the color of the spinner's track. |
| `speed` | number (0.5 - 10) | `1` | Sets the speed of the spinner's animation. |
| `className` | string | `""` | Sets the CSS class name for the spinner. |
| `size` | `"small"`, `"medium"`, `"large"` | `"medium"` | Sets the size of the spinner. |

## Example Usage

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
