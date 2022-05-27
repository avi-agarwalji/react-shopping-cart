import { FaShoppingCart } from "react-icons/fa";
import { MdExpandMore } from "react-icons/md";
import { Link } from 'react-router-dom';
import { useContext } from "react";
import { ProductContext } from "../context";

const Header = () => {
	const { cart } = useContext(ProductContext);
	
	return (
		<header className="bg-sky-900">
			<nav className="max-w-5xl mx-auto flex justify-between items-center px-2 md:px-8 py-4">
				{/* Nav item - Logo */}
				<div className="space-x-6 md:space-x-20">
					<span className="text-white text-xl md:text-4xl font-bold tracking-widest cursor-pointer">Store</span> 
				</div>
				{/* Nav item - Links */}
				<div className="text-white flex space-x-2 md:space-x-20 items-center">
					{/* Nav item link - 1 */}
					<Link to="/">
						<h2 className="hover:text-sky-200 text-white md:text-xl -mb-1 cursor-pointer">Products</h2>
					</Link>
					{/* Nav item link - 2 */}
					<Link to="/cart">
						<div className="relative hover:text-sky-200 text-white md:text-xl -mb-1 cursor-pointer flex items-center space-x-2 px-2">
							<span className="hidden md:block">
								Cart			
							</span>
							<FaShoppingCart className="" size={22} />
							<span className="absolute -top-3 -right-2 bg-red-400 py-[2.5px] px-[6px] rounded-[50%] text-sm text-white">{cart.length}</span>
						</div>
					</Link>
					{/* Nav item link - 3 */}
					<div className="hover:text-sky-200 text-white md:text-xl -mb-1 cursor-pointer flex items-center space-x-2 group">
						<span className="hidden md:block">
							More
						</span>
						<MdExpandMore className="group-hover:-rotate-180 duration-300 ease-in-out" size={26} />
					</div>			
				</div>
			</nav>
		</header>
	);
}

export default Header;