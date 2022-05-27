import { useState, createContext } from "react";
import { data } from "./data.js";

export const ProductContext = createContext();

export function ProductContextProvider(props) {
	const [products, setProducts] = useState(data);
	const [modal, setModal] = useState(false);
	const [modalProduct, setModalProduct] = useState([]);
	const [cart, setCart] = useState([]);
	
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
		alert("Product is added in your shopping cart!")
	}

	function removeFromCart(id) {
		const updatedCart = cart.filter(product => product.id !== id)
		setCart(updatedCart);
	}

	function incQuantity(id) {
		const updatedProducts = products.map(product => {
			if(product.id === id){
				product.quantity += 1;
			}
			return product;
		})
		setProducts(updatedProducts);
	}

	function decQuantity(id) {
		const updatedProducts = products.map(product => {
			if(product.id === id){
				product.quantity -= 1;
			}
			return product;
		})
		setProducts(updatedProducts);
	}

	function calculateCartTotal(){
		let res = 0;
		cart.forEach((product) => {
			res += product.price * product.quantity; 
		})
		return res;
	}

	const value = { products, modal, modalProduct, cart, handleModal, handleCart, removeFromCart, incQuantity, decQuantity, calculateCartTotal }

	return(
		<ProductContext.Provider value={value}>
			{props.children}
		</ProductContext.Provider>
	);
}
