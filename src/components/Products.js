import { useState, useContext } from "react";
import { data } from "../data.js";
import { ProductContext } from "../context";
import ProductElement from "./ProductElement";
import Modal from "./Modal";

const Products = () => {
	const { products, modal } = useContext(ProductContext);
	
	return(
		<section className="max-w-7xl mx-auto mt-10 p-10">
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 place-items-center">
				{ products.map((product) => (
					<ProductElement key={product.id} product={product} />
					)) }
				{modal ? <Modal /> : null}
			</div>
		</section>
	);
}

export default Products;