"use client"; // Error components must be Client Components

import Button from "@/components/buttons/Button";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div>
      <h2>Something went wrong!</h2>
      <Button
        className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
        label="Try again"
      />
    </div>
  );
}
