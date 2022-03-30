import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

const CartWidget = ({ cart }) => {
	return (
		<>
			<FontAwesomeIcon icon={faCartShopping} className='text-white text-2xl' />
			<span className='text-white px-1'>{cart}</span>
		</>
	);
};

export default CartWidget;
