import { Button } from "@tremor/react";
import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { RiMenuFoldLine, RiMenuLine } from "@remixicon/react";
import logo from "../assets/icons/logo.svg";
import key from "../assets/icons/key-square.svg";
import product from "../assets/icons/3d-square.svg";
import user from "../assets/icons/user-square.svg";
import money from "../assets/icons/wallet-money.svg";
import discount from "../assets/icons/discount-shape.svg";
import help from "../assets/icons/message-question.svg";
import chevron from "../assets/icons/chevron-right.svg";
import User from "../assets/icons/Ellipse.png";
import { ReactSVG } from "react-svg";
import "./aside.css";

const AsideMenu = () => {
	const location = useLocation();
	const linksArray = [
		{ icon: key, url: "/", name: "Dashboard" },
		{ icon: product, url: "/product", name: "Product" },
		{ icon: user, url: "/customers", name: "Customers" },
		{ icon: money, url: "/income", name: "Income" },
		{ icon: discount, url: "/promote", name: "Promote" },
		{ icon: help, url: "/help", name: "Help" },
	];
	const [activeMenu, setActiveMenu] = useState(true);
	const handleActiveMenu = () => {
		setActiveMenu(!activeMenu);
	};
	const habitMenuRef = useRef(null);

	const handleClickOutside = (event) => {
		if (
			habitMenuRef.current &&
			!habitMenuRef.current.contains(event.target)
		) {
			setActiveMenu(true);
		}
	};
	useEffect(() => {
		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);

	return (
		<>
			<Button
				icon={activeMenu ? RiMenuLine : RiMenuFoldLine}
				className={` w-min h-min absolute top-[20px] 
					left-[10px] z-30 ${!activeMenu ? "sm:hidden" : null}
				`}
				style={{
					backgroundColor: "#5932EA",
					fill: "white",
					stroke: "white",
                    border:"none"
				}}
				onClick={() => handleActiveMenu()}
			/>
			<aside
				className={`bg-white p-4 h-full flex flex-col justify-between gap-3 pt-[70px] pl-[30px] ${
					activeMenu ? `left-[-320px]` : "left-0"
				} z-20 fixed transition-all`}
				ref={habitMenuRef}
			>
				<div>
					<section className="mb-[60px]">
						<Link className="flex items-center gap-2">
							<img src={logo} />
							<p className="font-bold text-[26px]">Dashboard</p>
							<p className="text-[10px]">v.01</p>
						</Link>
					</section>
					<nav>
						<ul className="flex flex-col gap-3">
							{linksArray.map((link) => (
								<li key={link.name}>
									<Link to={link.url}>
										<button
											className={`flex gap-3 w-[250px] items-center justify-between ${
												location.pathname === link.url
													? "active"
													: ""
											}`}
										>
											<span
												className={`flex gap-3 text-[14px]`}
											>
												<ReactSVG src={link.icon} />
												{link.name}
											</span>
											<ReactSVG
												src={chevron}
												className={`text-black stroke-black`}
											/>
										</button>
									</Link>
								</li>
							))}
						</ul>
					</nav>
				</div>
				<section className="user mb-5 flex item-center gap-3">
					<img src={User} className="h-full" />
					<span>
						<p className="font-bold text-[14px]">Evano</p>
						<p className="text-slate-600 text-[12px]">
							Project Manager
						</p>
					</span>
				</section>
			</aside>
		</>
	);
};
export default AsideMenu;
