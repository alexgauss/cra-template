import * as React from "react";

export const withSuspense = (element: React.ReactNode) => (
  <React.Suspense>
    {element}
  </React.Suspense>
);