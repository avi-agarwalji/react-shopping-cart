import { useContext } from "react";
import { ProductContext } from "../context";

const ProductElement = ({ product }) => {
	const { title, img, price } = product;
	const { handleModal } = useContext(ProductContext);

	return(
		<div className="w-full mx-auto h-80 sm:h-96 bg-white px-4 py-2 shadow shadow-sky-200 flex flex-col justify-around group rounded-xl">
			<div className="flex items-center justify-center overflow-hidden">
				<img className="h-52 object-cover group-hover:scale-125 duration-100 ease-in-out" src={img} alt="" />				
			</div>
			<h2 className="text-sky-900 font-semibold">{title}</h2>
			<div className="flex justify-between items-center">
				<div>
					<span className="font-semibold">Price: </span>
					<span className="text-sky-900">{price} Rs</span>
				</div>
				<button 
					className="bg-sky-900 text-white px-4 py-1 rounded-lg hover:bg-white hover:border hover:border-sky-900 hover:text-sky-900 duration-200"
					onClick={() => handleModal(product.id)}
					>
					Add To Cart
				</button>
			</div>
		</div>
	);
}

export default ProductElement;