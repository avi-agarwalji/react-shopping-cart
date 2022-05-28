import { ProductContext } from "../context";
import { useContext } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";

const Modal = () => {
	const { handleModal, modalProduct, addToCart } = useContext(ProductContext);
	const { title, img, price, desc } = modalProduct;

	return(
		<div className="fixed top-0 left-0 right-0 bottom-0 bg-sky-500/30 flex justify-center items-center">
			<div className="relative w-4/5 md:w-2/3 h-4/5 bg-white rounded shadow">
				<AiOutlineCloseCircle className="cursor-pointer absolute right-1 top-1" size={32} onClick={() => handleModal()} />
				<div className="space-y-6 md:space-y-12 p-2">
					<div className="flex items-center space-x-6 md:space-x-20 lg:px-20 py-2 my-4"> 
						<img className="h-32" src={img} alt="" />
						<div>
							<h2 className="text-sm text-sky-700 md:text-xl">{title}</h2>
							<p className="text-sky-900 font-semibold">Price: {price}</p>
						</div>
					</div>
					<div>
						<h2 className="text-lg text-sky-800 font-semibold underline md:ml-16">About Product:</h2>
						<p className="text-sm text-sky-700 mt-2 text-justify px-4 md:px-32">{desc}</p>	
					</div>
					<button
						onClick={() => addToCart(modalProduct)}
						className="bg-sky-900 text-white px-4 py-1 ml-4 rounded-lg hover:bg-white hover:border hover:border-sky-900 hover:text-sky-900 duration-200"
					>
						Add To Cart
					</button>
				</div>
			</div>
 		</div>
	);
}

export default Modal;