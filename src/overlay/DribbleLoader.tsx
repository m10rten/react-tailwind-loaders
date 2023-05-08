"use client";
import { useEffect, useState } from "react";
import "../styles/overlay/DribbleLoader.scss";

/**
 * To edit the styles, pass a className prop
 *
 * To edit the colors, pass a background prop: preferable tailwindcss colors
 *
 * The loader will fade out after the delay prop and only when the component is mounted
 */
export default function FullScreenLoader({
  delay = 800,
  fadeTime = 200,
  background = "bg-slate-300",
  foreground = "bg-gray-600",
  className = "",
}) {
  const [loading, setLoading] = useState<boolean>(true);
  const [fadeOut, setFadeOut] = useState<boolean>(false);
  useEffect(() => {
    setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => {
        setLoading(false);
      }, fadeTime);
    }, delay);
  }, []);
  const waves = 3;
  return loading ? (
    <div
      className={`${
        fadeOut ? "opacity-0" : "opacity-100"
      } dribble_loader ${className} ${background}`}>
      {[...Array(waves)].map((_, i) => (
        <span key={i} className={`wave ${foreground}`} data-key={i} />
      ))}
    </div>
  ) : null;
}
