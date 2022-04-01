import React from 'react';
import ItemCount from './ItemCount';
import ItemList from './ItemList';

const products = [
	{
		id: crypto.randomUUID(),
		title: 'Top azul',
		price: '$2000',
		image:
			'https://statics.glamit.com.ar/media/catalog/product/cache/54/base/300x480/9df78eab33525d08d6e5fb8d27136e95/c/o/complot_01020313_azul_1_p.jpg',
		description: 'Top azul talle M',
	},
	{
		id: crypto.randomUUID(),
		title: 'Top rojo',
		price: '$3000',
		image:
			'https://statics.glamit.com.ar/media/catalog/product/cache/54/base/300x480/9df78eab33525d08d6e5fb8d27136e95/c/o/complot_01013226_terracota_1_p_1.jpg',
		description: 'Top rojo talle L',
	},
	{
		id: crypto.randomUUID(),
		title: 'Top verde',
		price: '$4000',
		image: 'https://image.choies.com/pimg/270/455937.jpg',
		description: 'Top verde talle S',
	},
];

const ItemListContainer = ({
	counter,
	addItem,
	removeItem,
	addToCart,
	removeFromCart,
}) => {
	const data = new Promise((resolve) => {
		resolve(products);
	});

	return (
		<>
			<section>
				<ItemCount
					counter={counter}
					addItem={addItem}
					removeItem={removeItem}
					addToCart={addToCart}
					removeFromCart={removeFromCart}
				/>
			</section>
			<section>
				<ItemList data={data} />
			</section>
		</>
	);
};

export default ItemListContainer;
