import React, { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';
import { doc, getDoc, getFirestore } from 'firebase/firestore';

export default function ItemDetailContainer() {
	const [product, setProduct] = useState({});
	const [isLoading, setIsLoading] = useState(true);

	const { productId } = useParams();

	useEffect(() => {
		setIsLoading(true);
		const db = getFirestore();

		const product = doc(db, 'products', productId);
		getDoc(product).then((res) => {
			setProduct({ id: res.id, ...res.data() });
			setIsLoading(false);
		});
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
