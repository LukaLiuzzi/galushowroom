import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export default function CartContextProvider({ children }) {
	const [cart, setCart] = useState([]);

	const addItemToCart = (item) => {
		const foundIndex = cart.findIndex((cartItem) => cartItem.id === item.id);
		if (foundIndex === -1) {
			setCart([...cart, { ...item }]);
		} else {
			const newCart = [...cart];
			newCart[foundIndex].quantity += item.quantity;
			setCart(newCart);
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
				}}
			>
				{children}
			</CartContext.Provider>
		</>
	);
}
