import { Link } from 'react-router-dom';
import { GoToCheckOut } from './Buttons';

export default function OrderSummary({ total, totalItemsInCart, to }) {
	return (
		<div id='summary' className='w-full px-4 py-10'>
			<h1 className='font-semibold text-2xl border-b pb-2'>
				Resumen de la orden
			</h1>
			<div className='flex justify-between mt-10 mb-5'>
				<span className='font-semibold text-sm uppercase'>Items</span>
				<span className='font-semibold text-sm'>{totalItemsInCart}</span>
			</div>
			<div className='border-t mt-8'>
				<div className='flex font-semibold justify-between py-6 text-sm uppercase'>
					<span>Total</span>
					<span>${total}</span>
				</div>
				{to === 'checkout' && (
					<Link to={'/' + to}>
						<GoToCheckOut />
					</Link>
				)}
			</div>
		</div>
	);
}
