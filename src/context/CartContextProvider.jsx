import { useEffect, createContext, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const CartContext = createContext();

export default function CartContextProvider({ children }) {
	const [cart, setCart] = useState(
		JSON.parse(window.localStorage.getItem('cart')) || []
	);

	useEffect(() => {
		window.localStorage.setItem('cart', JSON.stringify(cart));
	}, [cart]);

	const addItemToCart = (item) => {
		const foundIndex = cart.findIndex((cartItem) => cartItem.id === item.id);
		if (foundIndex === -1) {
			setCart([...cart, { ...item }]);
		} else {
			const newCart = [...cart];
			newCart[foundIndex].quantity += item.quantity;
			setCart(newCart);
		}

		toast.success('😁 Producto agregado correctamente!', {
			position: 'bottom-right',
			autoClose: 3000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: 'dark',
		});
	};

	const idCount = (id) => {
		const foundIndex = cart.findIndex((cartItem) => cartItem.id === id);
		if (foundIndex === -1) {
			return 0;
		} else {
			return cart[foundIndex].quantity;
		}
	};

	const removeItemToCart = (id) => {
		const newCart = [...cart];
		const foundIndex = cart.findIndex((cartItem) => cartItem.id === id);
		newCart.splice(foundIndex, 1);
		setCart(newCart);
	};

	const updateItemToCart = (id, quantity) => {
		const newCart = [...cart];
		const foundIndex = cart.findIndex((cartItem) => cartItem.id === id);
		newCart[foundIndex].quantity = quantity;
		setCart(newCart);
	};

	const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
	const totalItemsInCart = cart.reduce(
		(acc, item) => Number(acc) + Number(item.quantity),
		0
	);

	const totalPerItem = (price, quantity) => {
		return price * quantity;
	};

	const clearCart = () => {
		setCart([]);
	};

	return (
		<>
			<CartContext.Provider
				value={{
					cart,
					addItemToCart,
					removeItemToCart,
					clearCart,
					updateItemToCart,
					totalPerItem,
					total,
					totalItemsInCart,
					idCount,
				}}
			>
				{children}
				<ToastContainer />
			</CartContext.Provider>
		</>
	);
}
