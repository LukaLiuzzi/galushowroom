import React, { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail';

export default function ItemDetailContainer() {
	const [product, setProduct] = useState({});
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		fetch('https://api.mercadolibre.com/products/MLA16599626#json')
			.then((response) => response.json())
			.then((data) => {
				setProduct(data);
				setIsLoading(false);
			})
			.catch((error) => console.log(error));
	}, []);

	return isLoading ? (
		<h1 className='text-white fs-1 d-flex justify-center mt-5'>Cargando...</h1>
	) : (
		<ItemDetail product={product} />
	);
}
