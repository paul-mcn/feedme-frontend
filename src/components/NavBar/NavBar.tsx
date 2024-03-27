import Link from "next/link";

const NavBar = () => {

	return (
		<div className="bg-white w-full h-20">
			<ul className="flex flex-row items-center text-gray-900 gap-4 mt-auto h-full w-4/5 mx-auto font-bold">
				<li className="">
					<Link href="/">Home</Link>
				</li>
				<li className="">
					<Link href="/meals">Meals</Link>
				</li>
				<li className="">
					<Link href="/"></Link>
				</li>
			</ul>
		</div>
	);
};

export default NavBar;
