import React from "react";
import WhyEasyBank from "../Components/WhyEasyBank";
import LatestSection from "../Components/LatestSection";
import Main from "../Components/Main";
import Footer from "../Components/Footer";

const Home = () => {
	return (
		<>
			<div className="light-grayish-blue-bg">
				<Main />
				<WhyEasyBank />
				<LatestSection />
				<Footer />
			</div>
		</>
	);
};

export default Home;
