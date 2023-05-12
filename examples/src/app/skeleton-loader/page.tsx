import { SkeletonCard } from "react-tailwind-loaders";
export default function SkeletonLoaderPage() {
  return (
    <>
      <h1>SkeletonLoaderPage</h1>
      <br />
      <SkeletonCard type="video" className="mx-2" />
      <br />
      <SkeletonCard type="text" className="h-4 mx-2 max-w-xs" />
      <br />
      <SkeletonCard type="image" className="mx-2" />
      <br />
      <SkeletonCard type="avatar" className="mx-2" />
      <br />
      <SkeletonCard type="card" className="mx-2" />
    </>
  );
}
