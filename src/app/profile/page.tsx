"use client";
import Loading from "@/components/loading/Loading";
import { useUser } from "@/hooks/user";
import React from "react";
import H1 from "@/components/headings/H1";

export default function ProfilePage() {
  const user = useUser();
  if (user.data) {
    return (
      <div>
        <H1 text="Profile Settings" />
        <div className="flex flex-col gap-4 p-8 bg-white rounded-xl mt-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="font-bold text-lg col-span-2">Contact Details</div>
            <div>
              First name
              <p>
                {user.data.name || (
                  <span className="italic text-gray-500">None</span>
                )}
              </p>
            </div>
            <div>
              Last name
              <p>
                {user.data.name || (
                  <span className="italic text-gray-500">None</span>
                )}
              </p>
            </div>
            <div>
              Email
              <p>
                {user.data.email || (
                  <span className="italic text-gray-500">None</span>
                )}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return <Loading />;
}
