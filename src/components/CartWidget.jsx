import React from 'react';
import { Link } from 'react-router-dom';

const CartWidget = () => {
	return (
		<>
			<Link to='/cart'>
				<i className='fa-solid fa-cart-shopping text-white text-2xl'></i>
			</Link>
		</>
	);
};

export default CartWidget;
