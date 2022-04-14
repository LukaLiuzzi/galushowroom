import json from '../products.json';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';

const ItemListContainer = () => {
	const [products, setProducts] = useState(json);
	const [isLoading, setIsLoading] = useState(true);

	const { category } = useParams();

	function categoriesFilter() {
		return json.filter((product) => product.category === category);
	}

	useEffect(() => {
		setIsLoading(true);
		new Promise((resolve) => {
			setTimeout(() => {
				if (category) {
					resolve(categoriesFilter());
				} else {
					resolve(json);
				}
			}, 2000);
		}).then((data) => {
			setProducts(data);
			setIsLoading(false);
		});
	}, [category]);

	if (isLoading) {
		return (
			<h1 className='text-white text-center font-bold fs-1 mt-5'>
				Cargando...
			</h1>
		);
	}

	return (
		<>
			<ItemList products={products} />
		</>
	);
};

export default ItemListContainer;
