import clsx from "clsx";
import Link, { LinkProps } from "next/link";

type LinkButtonProps = LinkProps & {
  children: React.ReactNode;
  className: string;
};

export default function LinkButton(props: LinkButtonProps) {
  const { children, className, ...linkProps } = props;
  return (
    <Link className="block w-fit" {...linkProps}>
      <div
        className={clsx(
          "hover:opacity-80 bg-green-600 min-h-0 hover:bg-green-700 text-white font-bold py-2 px-4 rounded cursor-pointer",
          className,
        )}
      >
        {children}
      </div>
    </Link>
  );
}
