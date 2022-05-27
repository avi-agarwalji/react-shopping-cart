import { useContext } from "react";
import { ProductContext } from "../context";

const ProductElement = ({ product }) => {
	const { id, title, img, price } = product;
	const { handleModal, handleCart } = useContext(ProductContext);

	return(
		<div className="w-full mx-auto h-80 sm:h-96 bg-white px-4 py-2 shadow shadow-sky-200 flex flex-col justify-around group rounded-xl">
			<div className="cursor-pointer" onClick={() => handleModal(id)}>
				<div className="flex items-center justify-center overflow-hidden">
					<img className="h-52 object-cover group-hover:scale-125 duration-100 ease-in-out" src={img} alt="" />				
				</div>
				<h2 className="text-sky-900 font-semibold hover:underline underline-offset-2">{title}</h2>
			</div>
			<div className="flex justify-between items-center">
				<div>
					<span className="font-semibold">Price: </span>
					<span className="text-sky-900">{price} Rs</span>
				</div>
				<button
					onClick={() => handleCart(id)} 
					className="bg-sky-900 text-white px-4 py-1 rounded-lg hover:bg-white hover:border hover:border-sky-900 hover:text-sky-900 duration-200"
					>
					Add To Cart
				</button>
			</div>
		</div>
	);
}

export default ProductElement;