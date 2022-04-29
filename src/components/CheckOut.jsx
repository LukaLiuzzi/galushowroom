import { useForm } from 'react-hook-form';
import { useState, useContext } from 'react';
import { CartContext } from '../context/CartContextProvider';
import {
	collection,
	addDoc,
	getFirestore,
	serverTimestamp,
} from 'firebase/firestore';

export default function CheckOut() {
	const { cart, total, clearCart } = useContext(CartContext);

	const [orderId, setOrderId] = useState(undefined);
	const [isLoading, setIsLoading] = useState(false);

	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm();

	function sendOrder(data) {
		const order = {
			buyer: data,
			items: cart,
			date: serverTimestamp(),
			total,
		};

		const db = getFirestore();

		const orders = collection(db, 'orders');

		setIsLoading(true);

		addDoc(orders, order)
			.then(({ id }) => {
				setOrderId(id);
				clearCart();
			})
			.catch((err) => {
				console.log(err);
			})
			.finally(() => {
				setIsLoading(false);
			});
	}

	if (isLoading) {
		return (
			<div className='container'>
				<h1>Loading...</h1>
			</div>
		);
	}

	return (
		<>
			{orderId ? (
				<>
					<h1>Gracias por su compra, el id de su orden es:</h1>
					<p>{orderId}</p>
				</>
			) : (
				<form onSubmit={handleSubmit((data) => sendOrder(data))}>
					<div>
						<input
							{...register('name', {
								required: true,
								minLength: 3,
								maxLength: 50,
								pattern: /^[a-z ,.'-]+$/i,
							})}
							type='text'
							placeholder='Luka Liuzzi'
						/>
						{errors.name?.type === 'required' && 'El nombre no es valido'}
						{errors.name?.type === 'minLength' &&
							'El nombre no puede ser menor a 3 caracteres'}
						{errors.name?.type === 'maxLength' &&
							'El nombre no puede ser mayor a 50 caracteres'}
						{errors.name?.type === 'pattern' &&
							'El nombre solo puede contener letras'}
					</div>
					<div>
						<input
							{...register('email', {
								required: true,
								pattern: /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/,
							})}
							placeholder='ejemplo@gmail.com'
							type='text'
						/>
						{errors.email && 'El email no es valido'}
					</div>
					<div>
						<input
							{...register('phone', {
								required: true,
								pattern:
									/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
							})}
							placeholder='+541112223334'
							type='text'
						/>
						{errors.phone && 'El numero de telefono no es valido'}
					</div>

					<button type='submit'>Finalizar compra</button>
				</form>
			)}
		</>
	);
}
