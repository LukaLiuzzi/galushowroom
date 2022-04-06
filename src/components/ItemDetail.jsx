import React from 'react';

export default function ItemDetail({ product }) {
	return (
		<div className='container d-flex justify-center mt-5'>
			<div className='card' style={{ maxWidth: '40rem' }}>
				<div className='row'>
					<div className='col-12'>
						<img
							src={product.pictures[0].url}
							className='card-img-top'
							alt={product.name}
						/>
					</div>
					<div className='col-4 w-50'>
						<img
							src={product.pictures[1].url}
							className='card-img-top'
							alt={product.name}
						/>
					</div>
					<div className='col-4 w-50'>
						<img
							src={product.pictures[2].url}
							className='card-img-top'
							alt={product.name}
						/>
					</div>
				</div>
				<div className='card-body border-t-2 border-stone-700'>
					<h2 className='card-title fs-3'>{product.name}</h2>
					<p className='card-text fs-5'>{product.short_description.content}</p>
				</div>
				<ul className='list-group list-group-flush'>
					<li className='list-group-item'>
						Precio:{' '}
						<span className='fw-bold'>${product.buy_box_winner.price}</span>
					</li>
					<li className='list-group-item'>
						Garantia:{' '}
						<span className='fw-bold'>{product.buy_box_winner.warranty}</span>
					</li>
					<li className='list-group-item'>
						Stock: <span className='fw-bold'>5</span>
					</li>
				</ul>
			</div>
		</div>
	);
}
