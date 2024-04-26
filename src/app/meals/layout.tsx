import React from "react";

export default function MealLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="py-16">{children}</div>;
}
