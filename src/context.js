import { useState, createContext } from "react";
import { data } from "./data.js";

export const ProductContext = createContext();

export function ProductContextProvider(props) {
	const [products, setProducts] = useState(data);
	const [modal, setModal] = useState(false);
	const [modalProduct, setModalProduct] = useState([]);
	
	function handleModal(id=null) {
		setModal(!modal);
		if(id) {
			getModalProduct(id);
		}
	}

	function getModalProduct(id) {
		const product = products.filter(product => product.id === id)
		setModalProduct(product[0]);
	}

	const value = { products, modal, modalProduct, handleModal }

	return(
		<ProductContext.Provider value={value}>
			{props.children}
		</ProductContext.Provider>
	);
}
