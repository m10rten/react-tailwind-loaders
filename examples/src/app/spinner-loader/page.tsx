import { InlineSpinner } from "react-tailwind-loaders";

export default function SpinnerLoaderPage() {
  return (
    <button
      disabled
      type="button"
      className="py-2.5 px-3 mr-2 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 inline-flex items-center">
      <InlineSpinner
        thumbColor="text-indigo-600"
        trackColor="text-gray-400"
        speed={1.2}
        size="medium"
      />
      Loading...
    </button>
  );
}
