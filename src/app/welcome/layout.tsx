import React from "react";

export default function MealLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="w-10/12 md:w-4/5 mx-auto py-16">{children}</div>;
}
