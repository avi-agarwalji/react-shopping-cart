import { RiCloseLine } from "react-icons/ri";
import { AiFillInfoCircle } from "react-icons/ai";
import { useContext } from "react";
import { ProductContext } from "../context";

function Message() {
	const { message, setMessage } = useContext(ProductContext);
	return(
		<>
			{message ? 
				<div className="absolute z-40 top-36 sm:top-28 animate-pulse bg-sky-700 text-white right-2 px-1 py-2 border-l-4 border-sky-400">
					<p className="flex items-center font-semibold">
						<AiFillInfoCircle className="ml-1" size={24} />
						<span className="ml-2 px-2">Product is added to cart !</span> 
						<RiCloseLine onClick={() => setMessage(!message)} className="ml-4 cursor-pointer p-[2px]" size={26}/>
					</p>
				</div>
				: null
			}
		</>
	); 
}

export default Message;