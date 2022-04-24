import React from 'react';
import CartWidget from './CartWidget';
import { Link, NavLink } from 'react-router-dom';

function NavBar() {
	return (
		<header>
			<nav className='flex justify-between items-center w-11/12 mx-auto h-20'>
				<div className='text-white'>
					<Link to='/'>
						<h1 className='text-3xl text-white font-bold uppercase'>
							Galu Showroom
						</h1>
					</Link>
				</div>

				<ul className='absolute left-1/2 -translate-x-1/2 flex gap-8'>
					<li>
						<NavLink to='/' className='text-white text-xl uppercase'>
							Inicio
						</NavLink>
					</li>

					<li>
						<NavLink
							to='/category/remeras'
							className='text-white text-xl uppercase'
						>
							Remeras
						</NavLink>
					</li>

					<li>
						<NavLink
							to='/category/pantalones'
							className='text-white text-xl uppercase'
						>
							Pantalones
						</NavLink>
					</li>

					<li>
						<NavLink
							to='/category/abrigos'
							className='text-white text-xl uppercase'
						>
							Abrigos
						</NavLink>
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
