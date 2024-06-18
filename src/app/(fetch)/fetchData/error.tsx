"use client";

import { useEffect } from "react";

export default function Error({ error }: { error: Error }) {
  useEffect(() => {
    console.error(`Error: ${error}`);
  }, [error]);

  return (
    <div className="mt-80 flex items-center justify-center">
      <div className="text-2xl font-bold text-red-500">
        Error fetching users data
      </div>
    </div>
  );
}
