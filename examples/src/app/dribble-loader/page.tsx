"use client";
import { useEffect, useState } from "react";
import { DribbleLoader } from "react-tailwind-loaders";

export default function DribbleLoaderPage() {
  const [state, setState] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setState(false);
    }, 2000);
  }, [state]);
  return (
    <>
      <DribbleLoader
        background="bg-slate-900"
        foreground="bg-cyan-400" // even though this is set, the childClassName or className will override it
        delay={1200} // this time will pass before the loader fades out, it starts counting after the component is mounted.
        forceUpdate={state} // not recommended to use this prop, but it's here if you need it
        count={4} // 1 - 10
        className="!duration-700 bg-green-200" // add a `!` to the beginning of the className to override the default timings.
        childClassName="rounded-full !w-16 mx-6 bg-red-400" // give the dots a more red, rounded look and space them out
      />
      <h1>DribbleLoaderPage</h1>
      <button
        onClick={() => {
          setState(true);
        }}>
        Reload loader
      </button>
    </>
  );
}
