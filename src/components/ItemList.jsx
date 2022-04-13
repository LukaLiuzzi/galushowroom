import React from 'react';
import Item from './Item';

export default function ItemList({ products }) {
	return (
		<div className='container mx-auto grid grid-cols-4 gap-4 mt-6'>
			{products.map((el) => {
				return <Item key={el.id} el={el} />;
			})}
		</div>
	);
}
