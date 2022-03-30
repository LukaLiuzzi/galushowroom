import React from 'react';
import ItemCount from './ItemCount';

const ItemListContainer = ({
	counter,
	addItem,
	removeItem,
	addToCart,
	removeFromCart,
}) => {
	return (
		<>
			<ItemCount
				counter={counter}
				addItem={addItem}
				removeItem={removeItem}
				addToCart={addToCart}
				removeFromCart={removeFromCart}
			/>
		</>
	);
};

export default ItemListContainer;
