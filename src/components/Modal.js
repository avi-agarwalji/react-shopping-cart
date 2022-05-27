import { ProductContext } from "../context";
import { useContext } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";

const Modal = () => {
	const { handleModal, modalProduct } = useContext(ProductContext);
	const { id, title, img, price, handleCart } = modalProduct;

	return(
		<div className="fixed top-0 left-0 right-0 bottom-0 bg-sky-900/30 flex justify-center items-center">
			<div className="relative w-2/3 md:w-1/2 h-4/5 md:2/3 bg-white rounded shadow">
				<AiOutlineCloseCircle className="cursor-pointer absolute right-0 mx-6 my-8" size={32} onClick={() => handleModal()} />
				<div className="mt-16 w-full flex flex-col justify-around items-center px-4 space-y-4">
					<img className="h-60 w-fit object-contain" src={img} alt="" />
					<h2 className="text-xl text-sky-900">{title}</h2>
					<p className="text-sky-900 font-semibold">Price: {price}</p>
					<button
						onClick={() => handleCart(id)}
						className="bg-sky-900 text-white px-4 py-1 rounded-lg hover:bg-white hover:border hover:border-sky-900 hover:text-sky-900 duration-200"
					>
						Add To Cart
					</button>
				</div>
			</div>
 		</div>
	);
}

export default Modal;