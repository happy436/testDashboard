import React, { useState } from "react";
import { RiSearchLine } from "@remixicon/react";
import {
	Badge,
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeaderCell,
	TableRow,
	TextInput,
} from "@tremor/react";
import Pagination from "../components/Pagination";

function Customers() {
	const users = [
		{
			customerName: "David Wells",
			company: "Bond Ltd",
			phone: "082-690-8538x080",
			email: "makayla61@yahoo.com",
			country: "Montserrat",
			status: false,
		},
		{
			customerName: "Brendan Morales",
			company: "Parker-Nelson",
			phone: "(953)503-8213",
			email: "gonzalezrandy@hotmail.com",
			country: "Saint Kitts and Nevis",
			status: true,
		},
		{
			customerName: "Jennifer Lawson",
			company: "Pittman",
			phone: "+1-176-692-9739",
			email: "fjones@wiley.info",
			country: "Nauru",
			status: true,
		},
		{
			customerName: "Julie Kelly",
			company: "Brown",
			phone: "1898306915",
			email: "patriciadavis@yahoo.com",
			country: "Equatorial Guinea",
			status: false,
		},
		{
			customerName: "John Glover",
			company: "Haynes-Turner",
			phone: "(012)302-5391x68474",
			email: "wandaowens@hotmail.com",
			country: "Venezuela",
			status: false,
		},
		{
			customerName: "Jordan Strickland",
			company: "Carr-Miller",
			phone: "(537)258-2591x85085",
			email: "sarnold@berry.com",
			country: "Uruguay",
			status: true,
		},
		{
			customerName: "Eric Rangel",
			company: "Reynolds Inc",
			phone: "525-630-6939",
			email: "alexandria00@holden-hamilton.info",
			country: "Antarctica",
			status: true,
		},
		{
			customerName: "Cathy Rivera",
			company: "Richards",
			phone: "3308704576",
			email: "jacobsonamanda@yahoo.com",
			country: "Lebanon",
			status: true,
		},
		{
			customerName: "Benjamin Lawrence",
			company: "Gonzalez-Estrada",
			phone: "(640)980-2775x6748",
			email: "whitney69@sandoval.com",
			country: "Swaziland",
			status: false,
		},
		{
			customerName: "Adam Jefferson",
			company: "Flores-Reed",
			phone: "598-284-5211",
			email: "qandrews@hotmail.com",
			country: "French Southern Territories",
			status: false,
		},
		{
			customerName: "Erin Graham",
			company: "Wallace-Roy",
			phone: "213.414.7771x346",
			email: "erica07@yahoo.com",
			country: "Madagascar",
			status: false,
		},
		{
			customerName: "Holly Klein",
			company: "Lang, Wolf and Brown",
			phone: "783.661.7287",
			email: "lopezautumn@martin.com",
			country: "Ukraine",
			status: true,
		},
		{
			customerName: "Stephen Davis",
			company: "Harris-Hines",
			phone: "+1-679-387-3654",
			email: "delaney68@murphy.com",
			country: "French Guiana",
			status: false,
		},
		{
			customerName: "Sara Estrada",
			company: "Brooks Group",
			phone: "+1-940-581-4858",
			email: "sarahporter@barker.com",
			country: "Macedonia",
			status: true,
		},
		{
			customerName: "Jeffery Navarro",
			company: "Sutton Ltd",
			phone: "750.575.6458",
			email: "bbenson@gmail.com",
			country: "Dominican Republic",
			status: true,
		},
		{
			customerName: "Dustin Jimenez",
			company: "Rhodes, Miller and Williams",
			phone: "(454)477-5652x08663",
			email: "caitlinfranklin@moore.org",
			country: "Iceland",
			status: true,
		},
		{
			customerName: "Kim Coffey",
			company: "Walsh-Sandoval",
			phone: "080-285-5145x3131",
			email: "donald18@yahoo.com",
			country: "Sudan",
			status: true,
		},
		{
			customerName: "Ronald Hernandez",
			company: "Morris LLC",
			phone: "001-111-573-2534x0617",
			email: "gordonwhitney@cook.com",
			country: "Heard Island and McDonald Islands",
			status: false,
		},
		{
			customerName: "Jonathan Harding",
			company: "Jones, Fuller and Horn",
			phone: "6122365196",
			email: "davidporter@garcia.com",
			country: "Denmark",
			status: true,
		},
		{
			customerName: "Christy Lucero",
			company: "Moreno",
			phone: "047-275-1082x282",
			email: "ubennett@nelson-ortiz.com",
			country: "Lithuania",
			status: true,
		},
		{
			customerName: "Matthew Peck",
			company: "Hernandez-Martinez",
			phone: "8502687179",
			email: "calvingriffith@cooke.org",
			country: "Niger",
			status: false,
		},
		{
			customerName: "Timothy Dixon",
			company: "Avila, Williams and Mccall",
			phone: "4365103316",
			email: "iclark@anderson.com",
			country: "United States Virgin Islands",
			status: false,
		},
		{
			customerName: "Leah Jones",
			company: "French-Arellano",
			phone: "(030)707-8323",
			email: "yperez@yahoo.com",
			country: "Germany",
			status: true,
		},
		{
			customerName: "Ann Rush",
			company: "Everett PLC",
			phone: "+1-847-063-1205",
			email: "bhall@santos.info",
			country: "Somalia",
			status: false,
		},
		{
			customerName: "Sherry Moore",
			company: "Reid Ltd",
			phone: "414.536.0890",
			email: "mitchellroger@hernandez.org",
			country: "Guernsey",
			status: false,
		},
		{
			customerName: "Kenneth Ramirez",
			company: "Jones-Li",
			phone: "(544)378-4366x62385",
			email: "lnunez@hotmail.com",
			country: "Uzbekistan",
			status: false,
		},
		{
			customerName: "Marsha Hill",
			company: "Parks-Berry",
			phone: "974-627-3877",
			email: "williamsnina@hughes.org",
			country: "Lesotho",
			status: true,
		},
		{
			customerName: "Donald Bryant",
			company: "Harris, Velasquez and Bates",
			phone: "898-771-8902",
			email: "cohenschmidt@davidson.com",
			country: "Ethiopia",
			status: false,
		},
		{
			customerName: "Scott Fisher",
			company: "Hernandez-Harper",
			phone: "241.728.8302x776",
			email: "shelly97@hotmail.com",
			country: "Thailand",
			status: false,
		},
		{
			customerName: "Rachael Murphy",
			company: "Williams-King",
			phone: "416.778.3196",
			email: "hayeslauren@kemp.info",
			country: "Christmas Island",
			status: false,
		},
		{
			customerName: "Austin Greer",
			company: "Howard PLC",
			phone: "019-491-9758x66138",
			email: "wbarton@reid.com",
			country: "Niue",
			status: false,
		},
		{
			customerName: "Anna Stokes",
			company: "Thompson-Young",
			phone: "802.721.2935x94436",
			email: "george58@barnes.com",
			country: "Estonia",
			status: false,
		},
		{
			customerName: "Mary Ford",
			company: "Roberts PLC",
			phone: "(823)146-0647",
			email: "beccamorris@anderson.biz",
			country: "Netherlands",
			status: true,
		},
		{
			customerName: "James Kennedy",
			company: "Taylor, Lawrence and Cain",
			phone: "+1-217-118-8705x836",
			email: "miranda93@yahoo.com",
			country: "Guinea",
			status: true,
		},
		{
			customerName: "Mark Diaz",
			company: "Stephens-Henderson",
			phone: "280-243-6986",
			email: "michellecarr@diaz.com",
			country: "Austria",
			status: false,
		},
		{
			customerName: "John Powell",
			company: "Nguyen-Lamb",
			phone: "+1-163-816-2423",
			email: "laurenjohnston@collins.com",
			country: "Norway",
			status: true,
		},
		{
			customerName: "Jessica Johnson",
			company: "Carlson, Rios and Payne",
			phone: "446-125-6522x697",
			email: "kristen50@murphy.org",
			country: "Saint Pierre and Miquelon",
			status: false,
		},
		{
			customerName: "Rachel Payne",
			company: "Alexander",
			phone: "001-996-287-5236",
			email: "spencepeter@hotmail.com",
			country: "Paraguay",
			status: false,
		},
		{
			customerName: "Nathan Castillo",
			company: "Williams-Garcia",
			phone: "(016)962-1457",
			email: "allen81@baldwin-harper.org",
			country: "United Arab Emirates",
			status: false,
		},
		{
			customerName: "Brent Montgomery",
			company: "Davis-Garcia",
			phone: "+1-145-314-0581x362",
			email: "dianestewart@knight.net",
			country: "Micronesia",
			status: false,
		},
		{
			customerName: "Sherry Rodriguez",
			company: "Brown PLC",
			phone: "057.241.3327x665",
			email: "shane50@hancock.com",
			country: "Netherlands Antilles",
			status: false,
		},
		{
			customerName: "Mary Spencer",
			company: "Yates, Tucker and Harrison",
			phone: "(695)466-7584x772",
			email: "joshua40@young-roman.com",
			country: "Gabon",
			status: true,
		},
		{
			customerName: "John Simpson",
			company: "Armstrong Ltd",
			phone: "095-180-2961",
			email: "kjones@hughes-brock.com",
			country: "Czech Republic",
			status: false,
		},
	];
	const [currentPage, setCurrentPage] = useState(1);
	const itemsPerPage = 8;
	const totalPages = Math.ceil(users.length / itemsPerPage);
	const handleClick = (page) => {
		setCurrentPage(page);
	};
	const handleNextClick = () => {
		if (totalPages !== currentPage) {
			setCurrentPage((prev) => prev + 1);
		}
	};
	const handleBackClick = () => {
		if (currentPage !== 1) {
			setCurrentPage((prev) => prev - 1);
		}
	};
	const startIndex = (currentPage - 1) * itemsPerPage;
	const currentItems = users.slice(startIndex, startIndex + itemsPerPage);
	return (
		<>
			<header className="flex flex-col justify-between sm:flex-row">
				<div>
					<h2 className="font-bold text-[22px]">All Customers</h2>
					<p className="text-[14px] text-emerald-400">
						Active Members
					</p>
				</div>
				<div>
					<TextInput icon={RiSearchLine} placeholder="Search" />
				</div>
			</header>
			<Table>
				<TableHead>
					<TableRow>
						<TableHeaderCell className="text-slate-400 font-medium">
							Customer Name
						</TableHeaderCell>
						<TableHeaderCell className="text-slate-400 font-medium">
							Company
						</TableHeaderCell>
						<TableHeaderCell className="text-slate-400 font-medium">
							Phone Number
						</TableHeaderCell>
						<TableHeaderCell className="text-slate-400 font-medium">
							Email
						</TableHeaderCell>
						<TableHeaderCell className="text-slate-400 font-medium">
							Country
						</TableHeaderCell>
						<TableHeaderCell className="text-slate-400 font-medium">
							Status
						</TableHeaderCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{currentItems.map((user) => (
						<TableRow className="hover:bg-indigo-200">
							<TableCell className="truncate  max-w-[70px] text-black">
								{user.customerName}
							</TableCell>
							<TableCell className="truncate  max-w-[70px] text-black">
								{user.company}
							</TableCell>
							<TableCell className="truncate  max-w-[70px] text-black">
								{user.phone}
							</TableCell>
							<TableCell className="truncate  max-w-[70px] text-black">
								{user.email}
							</TableCell>
							<TableCell className="truncate  max-w-[70px] text-black">
								{user.country}
							</TableCell>
							<TableCell className="truncate  max-w-[70px] text-black">
								<Badge
									className="w-full"
									color={user.status ? "green" : "red"}
								>
									{user.status ? "Active" : "Inactive"}
								</Badge>
								{user.status}
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
			<section className="flex justify-between items-center">
				<p className="text-slate-400">
					Showing data 1 to 8 of 256 entries
				</p>
				<Pagination
					data={users}
					totalPages={totalPages}
					handleClick={handleClick}
					currentPage={currentPage}
					handleNextClick={handleNextClick}
					handleBackClick={handleBackClick}
				/>
			</section>
		</>
	);
}

export default Customers;
