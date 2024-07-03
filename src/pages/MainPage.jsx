import React from "react";
import { Outlet } from "react-router-dom";
import AsideMenu from "../components/AsideMenu";

const MainPage = () => {
	return (
		<>
			<>
				<AsideMenu />
				<main className="p-4 w-full flex flex-col gap-3 max-sm:mt-[50px] bg-slate-100 ">
					<p className="text-[24px] font-medium sm:pl-16">Hello Evano 👋</p>
					<section className="bg-white rounded-[30px] p-10">
						<Outlet />
					</section>
				</main>
			</>
		</>
	);
};
export default MainPage;
