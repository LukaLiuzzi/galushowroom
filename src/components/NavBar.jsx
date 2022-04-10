import React from 'react';
import CartWidget from './CartWidget';

function NavBar() {
	return (
		<header>
			<nav className='flex justify-between items-center w-11/12 mx-auto h-20'>
				<div className='text-white'>
					<h1 className='text-3xl text-white font-bold'>Galu Showroom</h1>
				</div>

				<ul className='absolute left-1/2 -translate-x-1/2 flex gap-8'>
					<li>
						<a href='#!' className='text-white text-xl uppercase'>
							Inicio
						</a>
					</li>
					<li>
						<a href='#!' className='text-white text-xl uppercase'>
							Productos
						</a>
					</li>
					<li>
						<a href='#!' className='text-white text-xl uppercase'>
							Nosotros
						</a>
					</li>
					<li>
						<a href='#!' className='text-white text-xl uppercase'>
							Contacto
						</a>
					</li>
				</ul>

				<div>
					<CartWidget />
				</div>
			</nav>
		</header>
	);
}

export default NavBar;
