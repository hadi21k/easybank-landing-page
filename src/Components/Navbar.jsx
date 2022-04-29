import Logo from "../images/icon-api.svg";
import HamburgerMenu from "../HamburgerMenu";
import { NavLink } from "react-router-dom";

const Navbar = () => {
	return (
		<nav className="h-[65px] z-20">
			<div className="container relative flex items-center justify-between h-full px-3 mx-auto bg-white ">
				<div className="logo flex items-center space-x-[2px]">
					<img src={Logo} alt="logo" className="w-6 h-6" />
					<h1 className="text-2xl font-bold dark-blue ">easybank</h1>
				</div>
				<ul className="items-center justify-center flex-1 hidden h-full space-x-4 grayish-blue md:flex ">
					<NavLink
						to="/"
						className={({ isActive }) =>
							isActive
								? "dark-blue lime-green h-full flex items-center hover:dark-blue hover:lime-green font-bold transition-all duration-100 cursor-pointer "
								: "h-full flex items-center hover:dark-blue hover:lime-green font-bold transition-all duration-100 cursor-pointer "
						}
					>
						Home
					</NavLink>
					<NavLink
						to="about"
						className={({ isActive }) =>
							isActive
								? "dark-blue lime-green h-full flex items-center hover:dark-blue hover:lime-green font-bold transition-all duration-100 cursor-pointer "
								: "h-full flex items-center hover:dark-blue hover:lime-green font-bold transition-all duration-100 cursor-pointer "
						}
					>
						About
					</NavLink>
					<NavLink
						to="contacts"
						className={({ isActive }) =>
							isActive
								? "dark-blue lime-green h-full flex items-center hover:dark-blue hover:lime-green font-bold transition-all duration-100 cursor-pointer "
								: "h-full flex items-center hover:dark-blue hover:lime-green font-bold transition-all duration-100 cursor-pointer "
						}
					>
						Contacts
					</NavLink>
					<NavLink
						to="blog"
						className={({ isActive }) =>
							isActive
								? "dark-blue lime-green h-full flex items-center hover:dark-blue hover:lime-green font-bold transition-all duration-100 cursor-pointer "
								: "h-full flex items-center hover:dark-blue hover:lime-green font-bold transition-all duration-100 cursor-pointer "
						}
					>
						Blog
					</NavLink>
					<NavLink
						to="carrers"
						className={({ isActive }) =>
							isActive
								? "dark-blue lime-green h-full flex items-center hover:dark-blue hover:lime-green font-bold transition-all duration-100 cursor-pointer "
								: "h-full flex items-center hover:dark-blue hover:lime-green font-bold transition-all duration-100 cursor-pointer "
						}
					>
						Carrers
					</NavLink>
				</ul>
				<div className="request-inv md:block hidden px-4 py-3 rounded-xl text-white bg-gradient-to-r from-[#31d35c] to-[#2bb7da]">
					<div>Request Invite</div>
				</div>
				<div className="z-30 hamburger-menu">
					<HamburgerMenu />
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
