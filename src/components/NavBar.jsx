import { useState } from 'react';
import CartWidget from './CartWidget';
import CategoriesContainer from './CategoriesContainer';
import Logo from './Logo';

function NavBar() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<nav className='bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded'>
			<div className='container flex flex-wrap justify-between items-center mx-auto'>
				<Logo />
				<div className='flex items-center md:order-2'>
					<CartWidget />
					<div
						className='hidden z-50 my-4 text-base list-none bg-white rounded divide-y divide-gray-100 shadow'
						id='dropdown'
						data-popper-reference-hidden
						data-popper-escaped
						data-popper-placement='top'
						style={{
							position: 'absolute',
							inset: 'auto auto 0px 0px',
							margin: '0px',
							transform: 'translate(1246px, 801px)',
						}}
					></div>
					<button
						data-collapse-toggle='mobile-menu-2'
						type='button'
						className='inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200'
						aria-controls='mobile-menu-2'
						aria-expanded='false'
						onClick={() => setIsOpen(!isOpen)}
					>
						<svg
							className='w-6 h-6'
							fill='currentColor'
							viewBox='0 0 20 20'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								fillRule='evenodd'
								d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
								clipRule='evenodd'
							/>
						</svg>
						<svg
							className='hidden w-6 h-6'
							fill='currentColor'
							viewBox='0 0 20 20'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								fillRule='evenodd'
								d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
								clipRule='evenodd'
							/>
						</svg>
					</button>
				</div>
				<div
					className={
						'justify-between items-center w-full md:flex md:w-auto md:order-1' +
						(isOpen ? ' block' : ' hidden')
					}
					id='mobile-menu-2'
				>
					<ul className='flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-lg md:font-medium uppercase'>
						<CategoriesContainer />
					</ul>
				</div>
			</div>
		</nav>
	);
}

export default NavBar;
