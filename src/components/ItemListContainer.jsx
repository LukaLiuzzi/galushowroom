import json from '../products.json';
import ItemList from './ItemList';
import { useState, useEffect } from 'react';

const ItemListContainer = () => {
	const [products, setProducts] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		new Promise((resolve) => {
			setTimeout(() => {
				resolve(json);
			}, 2000);
		}).then((data) => {
			setProducts(data);
			setIsLoading(false);
		});
	}, []);

	if (isLoading) {
		return (
			<h1 className='text-white text-center font-bold fs-1 mt-5'>
				Cargando...
			</h1>
		);
	}

	return (
		<div className='container mx-auto grid grid-cols-4 gap-4 mt-6'>
			{products.map((el) => {
				return <ItemList key={el.id} el={el} />;
			})}
		</div>
	);
};

export default ItemListContainer;
