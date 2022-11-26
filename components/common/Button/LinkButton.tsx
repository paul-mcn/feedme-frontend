import Link from "next/link";

type Props = {
  label: string;
  href: string;
  className?: string;
};

const LinkButton = ({ label, href, className }: Props) => {
  return (
    <Link href={href}>
      <div className="bg-primary text-white px-5 py-3 rounded-full cursor-pointer min-w-min">
        <p className="text-lg font-bold">{label}</p>
      </div>
    </Link>
  );
};

export default LinkButton;
