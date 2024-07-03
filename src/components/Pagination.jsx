import { RiArrowLeftSLine, RiArrowRightSLine } from "@remixicon/react";
import { Button } from "@tremor/react";
import React from "react";
import "./pagination.css";

function Pagination({ totalPages, handleClick, currentPage, data, handleNextClick, handleBackClick }) {
	console.log(currentPage);
	return (
		<>
			{data.length > 9 ? (
				<section className="gap-3 flex pagination">
					<Button
						icon={RiArrowLeftSLine}
						className="w-[26px] hover:bg-violet-500 bg-slate-200"
						style={{
							stroke: "black",
							border: "none",
						}}
                        onClick={handleBackClick}
					/>
					<div className="pagination flex gap-3">
						{Array.from({ length: totalPages }, (_, index) => (
							<Button
								style={{
									
									border: "none",
								}}
								key={index + 1}
								onClick={() => handleClick(index + 1)}
								className={`
									${currentPage !== index + 1 ? "text-black bg-slate-200" : "bg-violet-700"} hover:bg-violet-500
								`}
							>
								{index + 1}
							</Button>
						))}
					</div>
					<Button
						icon={RiArrowRightSLine}
						className="w-[26px] hover:bg-violet-500 bg-slate-200"
						style={{
							
							stroke: "black",
							border: "none",
						}}
                        onClick={handleNextClick}
					/>
				</section>
			) : null}
		</>
	);
}

export default Pagination;
