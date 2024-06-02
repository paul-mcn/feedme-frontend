import React from "react";

export default function MealLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="py-16 overflow-y-auto max-h-[88vh]">
      <div className="w-10/12 md:w-4/5 mx-auto">{children}</div>
    </div>
  );
}
