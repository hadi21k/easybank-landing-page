import {
	AiFillFacebook,
	AiFillYoutube,
	AiOutlineTwitter,
	AiOutlineInstagram,
} from "react-icons/ai";

const Footer = () => {
	return (
		<div className="bg-[#2d314d] py-12">
			<div className="container flex flex-col items-center h-full px-3 mx-auto space-y-4 md:flex-row md:space-y-0">
				<div className="flex flex-col items-center justify-between w-1/2 space-y-4 md:items-start md:flex-row md:space-y-0">
					<div className="flex flex-col space-y-6 text-white">
						<h1 className="text-2xl font-bold">easybank</h1>
						<div className="flex items-center space-x-3 logos">
							<a href="https://facebook.com">
								<AiFillFacebook className="w-5 h-5 text-white hover:text-[#2bb7da] transition-all duration-200" />
							</a>
							<a href="https://youtube.com">
								<AiFillYoutube className="w-5 h-5 text-white hover:text-[#2bb7da] transition-all duration-200" />
							</a>
							<a href="https://twitter.com">
								<AiOutlineTwitter className="w-5 h-5 text-white hover:text-[#2bb7da] transition-all duration-200" />
							</a>
							<a href="https://instagram.com/">
								<AiOutlineInstagram className="w-5 h-5 text-white hover:text-[#2bb7da] transition-all duration-200" />
							</a>
						</div>
					</div>
					<div className="flex flex-col items-center space-x-0 space-y-2 md:space-y-0 md:space-x-8 md:flex-row md:items-start">
						<ul className="flex flex-col items-center space-y-2 font-bold text-white md:items-start">
							<li className="transition duration-200 hover:text-[#2bb7da] cursor-pointer">
								About Us
							</li>
							<li className="transition duration-200 hover:text-[#2bb7da] cursor-pointer">
								Contact
							</li>
							<li className="transition duration-200 hover:text-[#2bb7da] cursor-pointer">
								Blog
							</li>
						</ul>
						<ul className="flex flex-col items-center space-y-2 font-bold text-white md:items-start">
							<li className="transition duration-200 hover:text-[#2bb7da] cursor-pointer">
								Carrers
							</li>
							<li className="transition duration-200 hover:text-[#2bb7da] cursor-pointer">
								Support
							</li>
							<li className="transition duration-200 hover:text-[#2bb7da] cursor-pointer">
								Privacy Policy
							</li>
						</ul>
					</div>
				</div>
				<div className="flex flex-col items-center w-1/2 space-y-4 md:items-end">
					<button className="bg-gradient-to-r from-[#31d35c] to-[#2bb7da] rounded-2xl px-6 py-2 text-white font-bold">
						Request Invite
					</button>
					<p className="text-sm font-bold grayish-blue">
						&copy; Easybank. All rights reserved
					</p>
				</div>
			</div>
		</div>
	);
};

export default Footer;
