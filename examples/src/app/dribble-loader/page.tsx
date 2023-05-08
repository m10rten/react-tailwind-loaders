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
        // background="bg-slate-900"
        // foreground="bg-cyan-400"
        delay={12000}
        forceUpdate={state}
        count={4}
        // childClassName="rounded-full !w-16"
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
