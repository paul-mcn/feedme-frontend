import { twMerge } from "tailwind-merge";
import styles from "./Loading.module.css";

export default function Loading({ className }: { className?: string }) {
  return (
    <div className={twMerge("relative h-96", className)}>
      <div className="absolute flex gap-2 items-center justify-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div
          className={`bg-blue-500 rounded-2xl ${styles.loading}`}
          style={{ animationDelay: "0.1s" }}
        ></div>
        <div
          className={`bg-blue-500 rounded-2xl ${styles.loading}`}
          style={{ animationDelay: "0.2s" }}
        ></div>
        <div
          className={`bg-blue-500 rounded-2xl ${styles.loading}`}
          style={{ animationDelay: "0.3s" }}
        ></div>
      </div>
    </div>
  );
}
