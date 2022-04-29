import Mockups from "../images/image-mockups.webp";
import Bg from "../images/bg-intro-desktop.svg";

const Main = () => {
	return (
		<div className="home relative min-h-[calc(100vh-65px)] light-grayish-blue-bg overflow-hidden flex items-center">
			<div>
				<img
					src={Bg}
					alt="bg"
					className="absolute md:w-[80%] w-full top-[-100px] right-[-250px]"
				/>
			</div>
			<div className="container z-10 flex flex-col-reverse items-center justify-center px-3 mx-auto space-y-8 md:flex-row md:space-y-0 md:space-x-12">
				<div className="flex flex-col items-center justify-center w-1/2 py-6 space-y-3 md:items-start">
					<div>
						<h1 className="text-2xl font-bold dark-blue sm:text-4xl">
							Next generation
						</h1>
						<h1 className="text-2xl font-bold dark-blue sm:text-4xl">
							digital banking
						</h1>
					</div>
					<p className="max-w-sm text-sm font-bold text-center grayish-blue md:text-left">
						Take your financial life online. Your EasyBank account will be a
						one-stop-shop for spending, saving, budgeting, investing, and much
						more.
					</p>
					<button className="bg-gradient-to-r from-[#31d35c] to-[#2bb7da] text-white rounded-xl font-bold px-4 py-3">
						Request Invite
					</button>
				</div>
				<div className="flex items-center justify-center w-1/2 h-1/2">
					<img src={Mockups} alt="mockups" className="w-[400px] h-full" />
				</div>
			</div>
		</div>
	);
};

export default Main;
