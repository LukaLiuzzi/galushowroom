import React, { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail';
import json from '../products.json';

export default function ItemDetailContainer() {
	const [product, setProduct] = useState({});
	const [isLoading, setIsLoading] = useState(true);

	const getProduct = (id) => {
		return json.find((el) => el.id === id);
	};

	useEffect(() => {
		new Promise((resolve) => {
			setTimeout(() => {
				resolve(getProduct(1));
			}, 2000);
		}).then((data) => {
			setProduct(data);
			setIsLoading(false);
		});
	}, [product]);

	return isLoading ? (
		<h1 className='text-white text-center font-bold fs-1 mt-5'>Cargando...</h1>
	) : (
		<ItemDetail product={product} />
	);
}
