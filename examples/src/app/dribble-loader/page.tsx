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
        foreground="bg-cyan-400" // this will override the default foreground/background color and any set in the className prop
        delay={1200} // this time will pass before the loader fades out, it starts counting after the component is mounted.
        forceUpdate={state} // not recommended to use this prop, but it's here if you need it
        count={6} // 1 - 10
        speed={1.2} // 0.5 - 5
        className="!duration-700 !gap-0" // add a `!` to the beginning of the className to override the default timings.
        childClassName="!w-16 mx-0" // give the dots a more red, rounded look and space them out
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
