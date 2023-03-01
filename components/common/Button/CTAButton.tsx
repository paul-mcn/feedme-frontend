import Link from "next/link";

type Props = {
  label: string;
}

const CTAButton = (props: Props) => {
  return (
    <Link href={"/get-started"}>
      <div className="hover:cursor-pointer bg-primary hover:bg-orange-400 rounded-full transition-colors w-fit duration-300">
        <div className="text-white px-6 py-2 font-bold text-2xl">
          {props.label}
        </div>
      </div>
    </Link>
  );
};

export default CTAButton;
