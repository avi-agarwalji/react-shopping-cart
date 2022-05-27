import { useContext } from "react";
import { ProductContext } from "../context";

function Cart() {
	const { cart, quantity, setQuantity, removeFromCart } = useContext(ProductContext);

	if(cart.length === 0){
		return (
			<div className="flex justify-center">
				<h1 className="text-red-600 text-xl">Cart is empty!</h1>
			</div>
			);
	}

	return(
		<section className="max-w-7xl mx-auto p-10">
		 	<h1 className="text-sky-900 text-2xl tracking-wider mb-10"> Your Shopping Cart -> </h1>
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 place-items-center">
				{ cart.map((product) => (
					<div key={product.id} className="w-full mx-auto sm:h-96 bg-white px-4 py-2 shadow shadow-sky-200 flex flex-col justify-around space-y-2 group rounded-xl">
						<div className="cursor-pointer">
							<div className="flex items-center justify-center overflow-hidden">
								<img className="h-52 object-cover group-hover:scale-125 duration-100 ease-in-out" src={product.img} alt="" />				
							</div>
							<h2 className="text-sky-900 font-semibold hover:underline underline-offset-2">{product.title}</h2>
						</div>
						<div className="flex justify-between items-center">
							<div>
								<span className="font-semibold">Price: </span>
								<span className="text-sky-900">{product.price * quantity} Rs</span>
							</div>
							
							<button
								onClick={() => removeFromCart(product.id)}
								className="bg-sky-900 text-white px-4 py-1 rounded-lg hover:bg-white hover:border hover:border-sky-900 hover:text-sky-900 duration-200"
							>
								Remove
							</button>
						</div>
						<div className="w-full flex justify-center space-x-2 bg-sky-200 mt-2 py-2 rounded">
							<button 
								disabled={quantity >= 10 ? true : false}
								onClick={() => setQuantity(quantity+1)} 
								className="bg-sky-900 px-1 sm:px-4 text-white font-bold rounded"
							>
								+
							</button>
							<span className="text-sky-900 font-semibold">Quantity: {quantity} </span>
							<button 
								disabled={quantity > 1 ? false : true}
								onClick={() => setQuantity(quantity-1)} 
								className="bg-sky-900 px-1 sm:px-4 text-white font-bold rounded"
							>
								-
							</button>
						</div>
					</div>
				)) }
			</div>
		</section>
	);
}

export default Cart;