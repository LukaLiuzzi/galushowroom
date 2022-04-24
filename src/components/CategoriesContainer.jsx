import { useEffect, useState } from 'react';
import Categories from './Categories';
import { collection, getDocs, getFirestore } from 'firebase/firestore';

export default function CategoriesContainer() {
	const [category, setCategory] = useState([]);

	useEffect(() => {
		const db = getFirestore();
		const categoriesCollection = collection(db, 'categories');
		getDocs(categoriesCollection).then((res) => {
			setCategory(res.docs.map((doc) => doc.data().name));
		});
	}, []);

	return <Categories category={category} />;
}
