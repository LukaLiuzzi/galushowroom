import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContextProvider';
import { GoToCatalogue } from './Buttons';
import OrderSummary from './OrderSummary';

export default function Cart() {
	const {
		cart,
		removeItemToCart,
		updateItemToCart,
		totalPerItem,
		total,
		clearCart,
		totalItemsInCart,
	} = useContext(CartContext);

	return (
		<>
			{cart.length > 0 ? (
				<div className='container mx-auto relative'>
					<div className='flex flex-col items-center shadow-md'>
						<div className='w-full px-4 bg-white'>
							<div className='flex flex-col justify-center items-center border-b py-4'>
								<h1 className='font-semibold text-2xl'>Carrito</h1>
								<h2 className='font-semibold text-2xl'>
									{totalItemsInCart} Items
								</h2>
							</div>
							<div className='flex mt-10 mb-2'>
								<h3 className='font-semibold text-gray-600 text-xs uppercase w-2/5'>
									Detalles
								</h3>
								<h3 className='font-semibold text-gray-600 text-xs uppercase w-1/5 text-center'>
									Cantidad
								</h3>
								<h3 className='font-semibold text-gray-600 text-xs uppercase w-1/5 text-center'>
									Unidad
								</h3>
								<h3 className='font-semibold text-gray-600 text-xs uppercase w-1/5 text-center'>
									Total
								</h3>
							</div>
							{cart.map(({ id, name, price, img, quantity, stock }) => {
								return (
									<div
										key={id}
										className='flex items-center hover:bg-gray-100 py-4'
									>
										<div className='flex w-2/5'>
											<div className='w-20'>
												<img className='h-24' src={img} alt={name} />
											</div>
											<div className='flex flex-col justify-between ml-4 flex-grow'>
												<span className='font-bold text-sm uppercase'>
													{name}
												</span>
												<span
													className='font-semibold hover:text-red-500 text-gray-500 text-xs'
													onClick={() => removeItemToCart(id)}
												>
													Eliminar
												</span>
											</div>
										</div>
										<div className='flex justify-center w-1/5'>
											<input
												type='number'
												min={1}
												max={stock}
												defaultValue={quantity}
												onChange={(e) => updateItemToCart(id, e.target.value)}
												className='w-full font-semibold text-center text-gray-700 bg-gray-200 outline-none focus:outline-none hover:text-black focus:text-black'
											/>
										</div>
										<span className='text-center w-1/5 font-semibold text-sm'>
											${price}
										</span>
										<span className='text-center w-1/5 font-semibold text-sm'>
											${totalPerItem(price, quantity)}
										</span>
									</div>
								);
							})}

							<button
								type='button'
								className='flex text-white text-sm py-1 px-2 bg-secondary rounded'
								onClick={() => clearCart()}
							>
								Vaciar carrito
							</button>

							<Link to='/'>
								<span className='flex text-white text-sm absolute bottom-2 left-2 py-1 px-4 bg-secondary rounded'>
									<svg
										className='fill-current mr-2 text-indigo-600 w-4'
										viewBox='0 0 448 512'
									>
										<path d='M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z' />
									</svg>
									Continuar comprando
								</span>
							</Link>
						</div>
						<OrderSummary
							total={total}
							totalItemsInCart={totalItemsInCart}
							to='checkout'
						/>
					</div>
				</div>
			) : (
				<div className='flex items-center flex-col min-height-100 px-2'>
					<h3 className='text-4xl font-bold text-secondary'>
						No hay items en el carrito
					</h3>
					<p className='my-4 font-bold text-2xl text-secondary'>
						Que estas esperando para comprar?
					</p>
					<Link to='/'>
						<GoToCatalogue text='Ir al catalogo' />
					</Link>
				</div>
			)}
		</>
	);
}
