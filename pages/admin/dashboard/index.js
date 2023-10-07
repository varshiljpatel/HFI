import Link from "next/link";
import React from "react";

const Dashboard = () => {
	return (
		<>
			<main className="flex flex-col w-full items-center justify-center h-screen">
				<p className="mb-8 text-white text-[24px] font-semibold">
					Check Orders History
				</p>{" "}
				<div className="flex flex-col gap-y-8 items-center text-white justify-center">
					<Link
						href={"./dashboard"}
						className="bg-transparent border-white hover:bg-gray-700 transition-all items-center justify-center flex text-lg border-[2px] rounded-md w-[400px] h-[100px]"
					>
						Check Pendding Orders
					</Link>
					<Link
						href={"./dashboard"}
						className="bg-transparent border-white hover:bg-gray-700 transition-all items-center justify-center flex text-lg border-[2px] rounded-md w-[400px] h-[100px]"
					>
						Check Today's Orders
					</Link>
					<Link
						href={"./dashboard"}
						className="bg-transparent border-white hover:bg-gray-700 transition-all items-center justify-center flex text-lg border-[2px] rounded-md w-[400px] h-[100px]"
					>
						Check This week's Orders
					</Link>
				</div>
				<div className="absolute flex justify-center items-center bottom-[4%] right-[6%]">
					<Link
						href={"./dashboard/avail-items"}
						className="font-medium cursor-pointer sm:bottom-[6%] sm:right-[4%] text-white px-8 rounded-md"
					>
						Show All Items
					</Link>
					<Link
						href={"./dashboard/create-item"}
						className="bg-white font-medium flex items-center justify-center text-center hover:bg-gray-400 w-[150px] h-[50px] text-black p-6 rounded-md"
					>
						+ Add Items
					</Link>
				</div>
			</main>
		</>
	);
};

export default Dashboard;
