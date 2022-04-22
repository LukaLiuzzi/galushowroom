import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContextProvider';

const CartWidget = () => {
	const { totalItemsInCart } = useContext(CartContext);

	return (
		<>
			<Link to='/cart'>
				<i className='fa-solid fa-cart-shopping text-white text-2xl'>
					<span className='text-base'>
						{totalItemsInCart > 0 ? totalItemsInCart : null}
					</span>
				</i>
			</Link>
		</>
	);
};

export default CartWidget;
