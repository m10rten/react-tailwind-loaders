"use client";
import { useState } from "react";
import { DribbleLoader } from "react-tailwind-loaders";

export default function DribbleLoaderPage() {
  const [state, setState] = useState(false);

  return (
    <>
      <DribbleLoader delay={1200} forceUpdate={state} />
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
