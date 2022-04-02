import React, { useState } from 'react';
import ItemCount from './ItemCount';

const ItemListContainer = ({ stock, setStock }) => {
	const [cart, setCart] = useState(0);
	const [counter, setCounter] = useState(1);

	const addItem = () => {
		if (counter < stock) {
			setCounter(counter + 1);
		}
	};

	const removeItem = () => {
		if (counter > 1) {
			setCounter(counter - 1);
		}
	};

	const addToCart = () => {
		if (counter <= stock) {
			setStock(stock - counter);
			setCart(cart + counter);
			setCounter(1);
		} else {
			alert(
				'No tenemos tanto stock, nuestro stock es de ' + stock + ' unidades'
			);
		}
	};

	return (
		<>
			<ItemCount
				counter={counter}
				addItem={addItem}
				removeItem={removeItem}
				addToCart={addToCart}
				stock={stock}
			/>
		</>
	);
};

export default ItemListContainer;
