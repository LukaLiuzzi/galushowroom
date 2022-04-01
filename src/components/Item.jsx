import React from 'react';

export default function Item({ el }) {
	const { title, price, image, description } = el;

	function color() {
		if (title === 'Top azul') {
			return 'text-info';
		} else if (title === 'Top rojo') {
			return 'text-danger';
		} else if (title === 'Top verde') {
			return 'text-success';
		}
	}

	return (
		<>
			<li className='d-flex justify-center text-center text-white fs-2 fw-bold'>
				<div className={color()}>
					<img
						className='d-inline'
						width='250'
						height='350'
						src={image}
						alt={title}
					/>
					<h2>{title}</h2>
					<p>{price}</p>
					<p>{description}</p>
				</div>
			</li>
			<hr className='my-5' />
		</>
	);
}
