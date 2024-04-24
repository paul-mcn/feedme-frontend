import React from "react";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <div className="bg-gray-100">
      <div className="w-4/5 mx-auto py-16">{children}</div>
    </div>
  );
}
