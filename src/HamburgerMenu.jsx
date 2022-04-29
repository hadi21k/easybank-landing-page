import { Menu } from "@headlessui/react";
import { BiMenu } from "react-icons/bi";
import { NavLink } from "react-router-dom";

const HamburgerMenu = () => {
	return (
		<div>
			<Menu as="div">
				<Menu.Button>
					<BiMenu className="block w-8 h-8 md:hidden" />
				</Menu.Button>
				<Menu.Items className="absolute left-0 top-[120%] bg-white rounded-lg py-4 shadow-2xl w-full h-72 flex flex-col items-center justify-center">
					<Menu.Item>
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
					</Menu.Item>
					<Menu.Item>
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
					</Menu.Item>
					<Menu.Item>
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
					</Menu.Item>
					<Menu.Item>
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
					</Menu.Item>
					<Menu.Item>
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
					</Menu.Item>
				</Menu.Items>
			</Menu>
		</div>
	);
};

export default HamburgerMenu;
