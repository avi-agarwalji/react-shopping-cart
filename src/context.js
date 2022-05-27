import { useState, createContext } from "react";
import { data } from "./data.js";

export const ProductContext = createContext();

export function ProductContextProvider(props) {
	const [products, setProducts] = useState(data);
	const [modal, setModal] = useState(false);
	const [modalProduct, setModalProduct] = useState([]);
	const [cart, setCart] = useState([]);
	const [quantity, setQuantity] = useState(1);
	
	function handleModal(id=null) {
		setModal(!modal);
		if(id) {
			const product = products.filter(product => product.id === id)[0]
			setModalProduct(product);
		}
	}

	function handleCart(id) {
		const product = products.filter(product => product.id === id)[0]

	    for (let i = 0; i < cart.length; i++) {
	        if (cart[i] === product) {
	            return alert("Item is already present in your shopping cart! ");
	        }
	    }

		setCart([...cart, product]);
	}

	function removeFromCart(id) {
		const updatedCart = cart.filter(product => product.id !== id)
		setCart(updatedCart);
	}

	const value = { products, modal, modalProduct, cart, quantity, setQuantity, handleModal, handleCart, removeFromCart }

	return(
		<ProductContext.Provider value={value}>
			{props.children}
		</ProductContext.Provider>
	);
}
