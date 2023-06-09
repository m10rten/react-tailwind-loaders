"use client";
import { useEffect, useState } from "react";

/**
 * To edit the styles, pass a className prop
 *
 * To edit the colors, pass a background prop: preferable tailwindcss colors
 *
 * The loader will fade out after the delay prop and only when the component is mounted
 */
export default function FullScreenLoader({
  delay = 800,
  count = 3,
  background = "bg-slate-300",
  foreground = "bg-gray-600",
  className = "",
  childClassName = "",
  speed = 1,
  forceUpdate = false,
}: {
  delay?: number;
  count?: number;
  childClassName?: string;
  background?: string;
  foreground?: string;
  className?: string;
  speed?: number;
  forceUpdate?: boolean;
}) {
  const [loading, setLoading] = useState<boolean>(true);
  const [fadeOut, setFadeOut] = useState<boolean>(false);
  const doFade = () => {
    setFadeOut(true);
    setTimeout(() => {
      setLoading(false);
    }, 300);
  };
  const doLoad = () => {
    setTimeout(() => {
      doFade();
    }, delay);
  };
  useEffect(() => {
    doLoad();
  }, []);
  useEffect(() => {
    if (!forceUpdate) return;
    setLoading(true);
    setFadeOut(false);
    doLoad();
  }, [forceUpdate]);
  const waves = Math.max(1, Math.min(10, count));
  return loading ? (
    <div
      className={`${
        fadeOut ? "opacity-0" : "opacity-100"
      } dribble_loader ${background} ${className}`}>
      {[...Array(waves)].map((_, i) => (
        <span
          key={i}
          className={`wave ${foreground} ${childClassName}`}
          style={{
            animationDuration: `${Math.max(0.5, Math.min(5, speed))}s`,
          }}
          data-key={i}
        />
      ))}
    </div>
  ) : null;
}
