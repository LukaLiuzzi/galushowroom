import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContexProvider';

const CartWidget = () => {
	const { cart } = useContext(CartContext);

	return (
		<>
			<Link to='/cart'>
				<i className='fa-solid fa-cart-shopping text-white text-2xl'>
					<span className='text-base'>{cart.length}</span>
				</i>
			</Link>
		</>
	);
};

export default CartWidget;
