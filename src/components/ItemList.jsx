import React from 'react';
import Item from './Item';

export default function ItemList({ products }) {
	return (
		<div className='container mx-auto grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 gap-4 min-height-100'>
			{products.map((el) => {
				return <Item key={el.id} el={el} />;
			})}
		</div>
	);
}
