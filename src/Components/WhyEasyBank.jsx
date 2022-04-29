import React from "react";
import Budgeting from "../images/icon-budgeting.svg";

const WhyEasyBank = () => {
	return (
		<>
			<div className="container px-3 py-10 mx-auto">
				<div className="flex flex-col items-center space-y-2 md:items-start">
					<h1 className="text-3xl font-normal dark-blue">
						Why choose EasyBank?
					</h1>
					<p className="max-w-sm text-base text-center grayish-blue md:text-left">
						We leverage Open Banking to turn your bank accound into your
						financial hub. Control your finances like never before
					</p>
				</div>
				<div className="grid grid-cols-1 gap-6 mt-10 md:grid-cols-3">
					<div className="flex flex-col items-center space-y-3 px-7 md:px-0 md:items-start">
						<div className="img bright-cyan">
							<img src={Budgeting} alt="budgeting" className="w-10 h-10" />
						</div>
						<div className="title">
							<h1 className="text-xl font-bold dark-blue">Online Banking</h1>
						</div>
						<div className="text-center">
							<p className="text-sm text-center md:text-left grayish-blue">
								Our modern web and mobile applications allow you to keep track
								of your finances whereever you are in the world{" "}
							</p>
						</div>
					</div>
					<div className="flex flex-col items-center space-y-3 px-7 md:px-0 md:items-start">
						<div className="img bright-cyan">
							<img src={Budgeting} alt="budgeting" className="w-10 h-10" />
						</div>
						<div className="title">
							<h1 className="text-xl font-bold dark-blue">Online Banking</h1>
						</div>
						<div className="text-center">
							<p className="text-sm text-center md:text-left grayish-blue">
								Our modern web and mobile applications allow you to keep track
								of your finances whereever you are in the world{" "}
							</p>
						</div>
					</div>
					<div className="flex flex-col items-center space-y-3 px-7 md:px-0 md:items-start">
						<div className="img bright-cyan">
							<img src={Budgeting} alt="budgeting" className="w-10 h-10" />
						</div>
						<div className="title">
							<h1 className="text-xl font-bold dark-blue">Online Banking</h1>
						</div>
						<div>
							<p className="text-sm text-center md:text-left grayish-blue">
								Our modern web and mobile applications allow you to keep track
								of your finances whereever you are in the world{" "}
							</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default WhyEasyBank;
