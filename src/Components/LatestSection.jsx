import React from "react";
import Currency from "../images/image-currency.jpg";
import Restaurant from "../images/image-restaurant.jpg";
import Plane from "../images/image-plane.jpg";
import Confetti from "../images/image-confetti.jpg";

const LatestSection = () => {
	return (
		<>
			<div className="container flex flex-col px-3 mx-auto mb-8">
				<div className="title">
					<h1 className="text-3xl font-normal dark-blue">Latest Articles</h1>
				</div>
				<div className="grid grid-cols-1 gap-8 mt-6 sm:grid-cols-2 lg:grid-cols-4">
					<div className="bg-white rounded-lg">
						<div className="img h-[200px]">
							<img
								src={Currency}
								alt="currency"
								className="w-full h-full rounded-t-lg"
							/>
						</div>
						<div className="flex flex-col px-6 py-2 mt-5 space-y-2">
							<span className="text-xs grayish-blue">By Clair Robinson</span>
							<h1 className="text-base font-bold dark-blue">
								Receive money in any currency with no fees
							</h1>
							<p className="max-w-sm text-sm grayish-blue">
								The world is getting smaller and we're becoming more mobile. So
								why should you be forced to only receive money in a single...
							</p>
						</div>
					</div>
					<div className="bg-white rounded-lg">
						<div className="img h-[200px]">
							<img
								src={Restaurant}
								alt="currency"
								className="w-full h-full rounded-t-lg"
							/>
						</div>
						<div className="flex flex-col px-6 py-2 mt-5 space-y-2">
							<span className="text-xs grayish-blue">By Clair Robinson</span>
							<h1 className="text-base font-bold dark-blue">
								Receive money in any currency with no fees
							</h1>
							<p className="max-w-sm text-sm grayish-blue">
								The world is getting smaller and we're becoming more mobile. So
								why should you be forced to only receive money in a single...
							</p>
						</div>
					</div>
					<div className="bg-white rounded-lg">
						<div className="img h-[200px]">
							<img
								src={Plane}
								alt="currency"
								className="w-full h-full rounded-t-lg"
							/>
						</div>
						<div className="flex flex-col px-6 py-2 mt-5 space-y-2">
							<span className="text-xs grayish-blue">By Clair Robinson</span>
							<h1 className="text-base font-bold dark-blue">
								Receive money in any currency with no fees
							</h1>
							<p className="max-w-sm text-sm grayish-blue">
								The world is getting smaller and we're becoming more mobile. So
								why should you be forced to only receive money in a single...
							</p>
						</div>
					</div>
					<div className="bg-white rounded-lg">
						<div className="img h-[200px]">
							<img
								src={Confetti}
								alt="currency"
								className="w-full h-full rounded-t-lg"
							/>
						</div>
						<div className="flex flex-col px-6 py-2 mt-5 space-y-2">
							<span className="text-xs grayish-blue">By Clair Robinson</span>
							<h1 className="text-base font-bold dark-blue">
								Receive money in any currency with no fees
							</h1>
							<p className="max-w-sm text-sm grayish-blue">
								The world is getting smaller and we're becoming more mobile. So
								why should you be forced to only receive money in a single...
							</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default LatestSection;
