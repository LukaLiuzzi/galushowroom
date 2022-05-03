import { useForm } from 'react-hook-form';
import { useState, useContext } from 'react';
import { CartContext } from '../context/CartContextProvider';
import {
	collection,
	addDoc,
	getFirestore,
	serverTimestamp,
	writeBatch,
	getDoc,
	doc,
} from 'firebase/firestore';
import OrderSummary from './OrderSummary';
import Loading from './Loading';
import { Link } from 'react-router-dom';
import { GoToCatalogue } from './Buttons';

export default function CheckOut() {
	const { cart, total, totalItemsInCart, clearCart } = useContext(CartContext);

	const [orderId, setOrderId] = useState(undefined);
	const [isLoading, setIsLoading] = useState(false);

	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm();

	async function sendOrder(data) {
		const order = {
			buyer: data,
			items: cart,
			date: serverTimestamp(),
			total,
		};

		const db = getFirestore();
		const ordersRef = collection(db, 'orders');
		const batch = writeBatch(db);
		setIsLoading(true);

		order.items.forEach((item, index) => {
			let productDoc = doc(db, 'products', String(item.id));
			let prevStock = 0;

			getDoc(productDoc)
				.then((res) => {
					if (res.exists()) {
						if (res.data().stock) {
							prevStock = res.data().stock;
						}
					}

					let newStock = Number(prevStock) - Number(item.quantity);

					batch.update(productDoc, { stock: newStock });
				})
				.then(() => {
					if (order.items[index] === order.items[order.items.length - 1]) {
						batch.commit();

						addDoc(ordersRef, order)
							.then(({ id }) => {
								setOrderId(id);
								clearCart();
							})
							.catch((err) => console.log('Error: ' + err))
							.finally(() => {
								setIsLoading(false);
							});
					}
				})
				.catch((err) => {
					console.log('Error: ' + err);
				});
		});
	}

	if (isLoading) {
		return <Loading />;
	}

	return (
		<>
			{orderId ? (
				<div className='min-height-100'>
					<h1 className='uppercase px-2 font-bold text-center'>
						Gracias por su compra, el id de su orden es:{' '}
						<button
							onClick={() => navigator.clipboard.writeText(orderId)}
							title='Copiar al portapapeles'
							className='text-primary bg-secondary px-2 py-1 rounded normal-case hover:bg-gray-700'
						>
							{orderId} <i className='ml-2 fa-solid fa-clipboard'></i>
						</button>
					</h1>

					<Link to='/' className='block text-center mt-6'>
						<GoToCatalogue text='Seguir comprando' />
					</Link>
				</div>
			) : (
				<div className='min-height-100 container mx-auto'>
					<OrderSummary total={total} totalItemsInCart={totalItemsInCart} />
					<form onSubmit={handleSubmit((data) => sendOrder(data))}>
						<div className='px-2 my-2'>
							<input
								{...register('name', {
									required: true,
									minLength: 3,
									maxLength: 50,
									pattern: /^[a-z ,.'-]+$/i,
								})}
								type='text'
								placeholder='Luka Liuzzi'
								className='border border-secondary rounded w-full px-2 py-2'
							/>
							{errors.name?.type === 'required' && 'El nombre no es valido'}
							{errors.name?.type === 'minLength' &&
								'El nombre no puede ser menor a 3 caracteres'}
							{errors.name?.type === 'maxLength' &&
								'El nombre no puede ser mayor a 50 caracteres'}
							{errors.name?.type === 'pattern' &&
								'El nombre solo puede contener letras'}
						</div>
						<div className='px-2 my-2'>
							<input
								{...register('email', {
									required: true,
									pattern: /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/,
								})}
								placeholder='ejemplo@gmail.com'
								type='text'
								className='border border-secondary rounded w-full px-2 py-2'
							/>
							{errors.email && 'El email no es valido'}
						</div>
						<div className='px-2 my-2'>
							<input
								{...register('phone', {
									required: true,
									pattern:
										/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
								})}
								placeholder='+541112223334'
								type='text'
								className='border border-secondary rounded w-full px-2 py-2'
							/>
							{errors.phone && 'El numero de telefono no es valido'}
						</div>

						<button className='bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm mb-4 text-white uppercase w-full'>
							Completar compra
						</button>
					</form>
				</div>
			)}
		</>
	);
}
