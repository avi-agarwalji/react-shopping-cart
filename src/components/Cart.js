import { useContext } from "react";
import { ProductContext } from "../context";

function Cart() {
	const { cart, calculateCartTotal, addToCart, deleteFromCart } = useContext(ProductContext);
	const total = calculateCartTotal();
	const shippingCharges = total > 2000 ? 0 : 400;
	const tax = total * .08;

	if(cart.length === 0){
		return (
			<div className="flex h-screen items-center justify-center">
				<h1 className="text-red-600 text-xl">Cart is empty!</h1>
			</div>
		);
	}

	return(
		<section className="max-w-5xl min-h-screen mx-auto p-10">
		 	<h1 className="text-sky-900 text-lg sm:text-2xl font-semibold underline mb-2"> Your Shopping Cart: </h1>
		 	<div>
				<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 place-items-center">
					{ cart.map((product) => (
						<div key={product.id} className="w-full h-52 flex items-center bg-white px-1 md:px-4 py-2 shadow shadow-sky-200  rounded-xl">
							<div className="flex w-full justify-between space-x-4 sm:space-x-16 overflow-hidden">
								<img className="h-full w-2/6 object-cover hover:scale-125 duration-100 ease-in-out overflow-hidden" src={product.img} alt="" />				
								<div className="w-4/6 px-1">
									<h2 className="text-sky-900 text-xs sm:text-base">{product.title}</h2>
									<span className="text-xs sm:text-base font-semibold">Price: </span>
									<span className="text-xs sm:text-base text-sky-900">
										Rs {product.price} x {product.quantity}
									</span>
									<div className="flex w-fit space-x-4 bg-sky-200 mt-2 p-2 rounded  object-contain">
										<button 
											disabled={product.quantity >= 10 ? true : false}
											onClick={() => addToCart(product)} 
											className="bg-sky-900 px-1 sm:px-4 text-white font-bold rounded"
										>
											+
										</button>
										<span className="hidden md:block text-sky-900 font-semibold">Quantity</span>
										<button 
											onClick={() => deleteFromCart(product)} 
											className="bg-sky-900 px-2 sm:px-4 text-white font-bold rounded"
										>
											-
										</button>
									</div>
								</div>
							</div>
						</div>
					)) }
				</div>
				<div className="max-w-md mt-6 bg-white p-4 mb-8 rounded shadow">
					<div className="text-sm text-sky-700 p-2 space-y-1 border-b-2 border-sky-500">
			 			<h2 className="text-sky-800 sm:text-xl font-semibold mb-4  underline">Total Payable Amount:</h2>
						<h4 className="flex justify-between mx-10">Products Price: <span>{total} Rs</span></h4>
						<h4 className="flex justify-between mx-10">Tax Deduction: <span>{tax} Rs</span></h4>
						<h4 className="flex justify-between mx-10">Shipping Charges: <span>{shippingCharges} Rs</span></h4>
					</div>
					<h4 className="text-sm text-sky-700 p-2 flex justify-between mx-10">Total: <span>{total + tax + shippingCharges} Rs</span></h4>
					<button className="w-full px-20 py-1 bg-sky-800 text-white rounded-xl mt-4">
						Checkout
					</button>
				</div>
			</div>	
		</section>
	);
}

export default Cart;