import { useState, createContext } from "react";
import { data } from "./data.js";

export const ProductContext = createContext();

function ProductContextProvider(props) {
	const [products, setProducts] = useState(data);
	const [modal, setModal] = useState(false);
	const [modalProduct, setModalProduct] = useState([]);
	const [cart, setCart] = useState([]);
	const [message, setMessage] = useState(false);

	function handleModal(id=null) {
		setModal(!modal);
		if(id) {
			const product = products.find(product => product.id === id)
			setModalProduct(product);
		}
	}

	function handleFilter(e){
		if(e.target.value === "lth") {
			setProducts(products.slice(0).sort((a, b) => a.price - b.price));
		} else if (e.target.value === "htl") {
			setProducts(products.slice(0).sort((a, b) => b.price - a.price));
		} else {
			setProducts(data);
		}
	}

	function addToCart(product) {
		const inCart = cart.find(cartItem => cartItem.id === product.id)

		if(inCart){
			setCart(cart.map( cartItem => cartItem.id === product.id ? {...inCart, quantity: inCart.quantity + 1} : cartItem ))
		} else {
			setCart([...cart, {...product, quantity: 1} ]);
			setMessage(true);
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

	const value = { products, modal, modalProduct, cart, handleModal, handleFilter, addToCart, deleteFromCart, calculateCartTotal, message, setMessage }

	return(
		<ProductContext.Provider value={value}>
			{props.children}
		</ProductContext.Provider>
	);
}

export default ProductContextProvider;