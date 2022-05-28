import { ProductContext } from "../context";
import { useContext } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";

const Modal = () => {
	const { handleModal, modalProduct, handleCart } = useContext(ProductContext);
	const { id, title, img, price, desc } = modalProduct;

	return(
		<div className="fixed top-0 left-0 right-0 bottom-0 bg-sky-500/30 flex justify-center items-center">
			<div className="relative w-2/3 md:w-1/2 h-4/5 md:h-2/3 bg-white rounded shadow">
				<AiOutlineCloseCircle className="cursor-pointer absolute -right-8 -top-4" size={32} onClick={() => handleModal()} />
				<div className="space-y-6 md:space-y-16 p-4">
					<div className="flex items-center space-x-6 md:space-x-20 md:px-20 py-2 my-4"> 
						<img className="h-32" src={img} alt="" />
						<div>
							<h2 className="text-sm text-sky-700 md:text-xl">{title}</h2>
							<p className="text-sky-900 font-semibold">Price: {price}</p>
						</div>
					</div>
					<div>
						<h2 className="text-lg text-sky-800 font-semibold underline md:ml-4">About Product:</h2>
						<p className="text-sm text-sky-700 mt-2 text-justify px-4 md:mx-8 md:px-10">{desc}</p>	
					</div>
					<button
						onClick={() => handleCart(id)}
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