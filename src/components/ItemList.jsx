import React, { useEffect, useState } from 'react';
import Item from './Item';

export default function ItemList({ data }) {
	const [arrayProducts, setArrayProducts] = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setTimeout(() => {
			data.then((res) => {
				setArrayProducts(res);
				setLoading(true);
			});
		}, 2000);
	}, [data]);

	return (
		<>
			<div className='row mt-5 text-white'>
				<hr className='mb-5' />
				<ul className='col'>
					{loading ? (
						arrayProducts.map((el) => <Item key={el.id} el={el} />)
					) : (
						<h2 className='text-center fw-bold fs-1'>Cargando...</h2>
					)}
				</ul>
			</div>
		</>
	);
}
