import { useState, createContext } from "react";
import { products } from "./data.js";

export const ProductContext = createContext();

function ProductContextProvider(props) {
	const [modal, setModal] = useState(false);
	const [modalProduct, setModalProduct] = useState([]);
	const [cart, setCart] = useState([]);
	
	function handleModal(id=null) {
		setModal(!modal);
		if(id) {
			const product = products.find(product => product.id === id)
			setModalProduct(product);
		}
	}

	function addToCart(product) {
		const inCart = cart.find(cartItem => cartItem.id === product.id)

		if(inCart){
			setCart(cart.map( cartItem => cartItem.id === product.id ? {...inCart, quantity: inCart.quantity + 1} : cartItem ))
		} else {
			setCart([...cart, {...product, quantity: 1} ]);
		}
	}

	function deleteFromCart(product) {
		const inCart = cart.find(cartItem => cartItem.id === product.id)

		if(inCart.quantity === 1){
			setCart(cart.filter( cartItem => cartItem.id !== product.id ))
		} else {
			setCart(cart.map( cartItem => cartItem.id === product.id ? {...inCart, quantity: inCart.quantity-1} : cartItem  ))
		}
	}

	function calculateCartTotal(){
		const total = cart.reduce((acc, curr) => acc + curr.price * curr.quantity, 0);
		return total;
	}

	const value = { products, modal, modalProduct, cart, handleModal, addToCart, deleteFromCart, calculateCartTotal }

	return(
		<ProductContext.Provider value={value}>
			{props.children}
		</ProductContext.Provider>
	);
}

export default ProductContextProvider;