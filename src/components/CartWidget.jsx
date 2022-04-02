import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

const CartWidget = () => {
	return (
		<>
			<FontAwesomeIcon icon={faCartShopping} className='text-white text-2xl' />
		</>
	);
};

export default CartWidget;
