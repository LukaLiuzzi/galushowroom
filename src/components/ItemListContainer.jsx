import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';
import {
	collection,
	getDocs,
	getFirestore,
	query,
	where,
} from 'firebase/firestore';
import Loading from './Loading';

const ItemListContainer = () => {
	const [products, setProducts] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	const { category } = useParams();

	useEffect(() => {
		setIsLoading(true);
		const db = getFirestore();

		const productsCollection = collection(db, 'products');
		if (category) {
			const q = query(productsCollection, where('category', '==', category));
			getDocs(q).then((res) => {
				setProducts(res.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
				setIsLoading(false);
			});
		} else {
			getDocs(productsCollection).then((res) => {
				setProducts(res.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
				setIsLoading(false);
			});
		}
	}, [category]);

	if (isLoading) {
		return <Loading />;
	}

	return (
		<>
			<ItemList products={products} />
		</>
	);
};

export default ItemListContainer;
