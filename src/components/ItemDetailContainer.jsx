import React, { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail';
import json from '../products.json';
import { useParams } from 'react-router-dom';

export default function ItemDetailContainer() {
	const [product, setProduct] = useState({});
	const [isLoading, setIsLoading] = useState(true);

	const { productId } = useParams();

	const getProduct = () => {
		return json.find((el) => el.id === parseInt(productId));
	};

	const productFound = () => {
		return json.some((el) => el.id === parseInt(productId));
	};

	useEffect(() => {
		if (productFound()) {
			new Promise((resolve) => {
				setIsLoading(true);
				setTimeout(() => {
					resolve(getProduct(productId));
				}, 2000);
			})
				.then((data) => {
					setProduct(data);
				})
				.catch((err) => {
					console.log('Ocurrio un error' + err);
					setProduct({});
				})
				.finally(() => {
					setIsLoading(false);
				});
		} else {
			setProduct(undefined);
			setIsLoading(false);
		}
	}, [productId]);

	if (isLoading) {
		return (
			<h1 className='text-white text-center font-bold fs-1 mt-5'>
				Cargando...
			</h1>
		);
	}

	return (
		<>
			{product ? (
				<ItemDetail product={product} />
			) : (
				<h2 className='text-black text-4xl font-bold text-center mt-5'>
					No se encontro el producto
				</h2>
			)}
		</>
	);
}
