import { FaShoppingCart } from "react-icons/fa";
import { MdExpandMore } from "react-icons/md";

const Header = () => (
	<header className="bg-sky-900">
		<nav className="max-w-5xl mx-auto flex justify-between items-center px-2 md:px-8 py-4">
			<div className="space-x-6 md:space-x-20">
				<span className="text-white text:2xl md:text-4xl font-bold tracking-widest cursor-pointer">Store</span> 
			</div>
			<div className="text-white flex space-x-2 md:space-x-20 items-center">
				<h2 className="hover:text-sky-200 text-white md:text-xl -mb-1 cursor-pointer">Products</h2>
				<div className="hover:text-sky-200 text-white md:text-xl -mb-1 cursor-pointer flex items-center space-x-2">
					<span className="hidden md:block">
						Cart
					</span>
					<FaShoppingCart size={22} />
				</div>
				<div className="hover:text-sky-200 text-white md:text-xl -mb-1 cursor-pointer flex items-center space-x-2 group">
					<span className="hidden md:block">
						More
					</span>
					<MdExpandMore className="group-hover:-rotate-180 duration-300 ease-in-out" size={26} />
				</div>			
			</div>
		</nav>
	</header>
)

export default Header;