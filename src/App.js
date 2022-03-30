import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import { useState } from 'react';

function App() {
	const [cart, setCart] = useState(0);
	const [counter, setCounter] = useState(1);
	const [stock, setStock] = useState(7);

	const addItem = () => {
		setCounter(counter + 1);
	};

	const removeItem = () => {
		if (counter > 1) {
			setCounter(counter - 1);
		}
	};

	const addToCart = () => {
		if (counter <= stock) {
			setStock(stock - counter);
			setCart(cart + counter);
			setCounter(1);
		} else {
			alert(
				'No tenemos tanto stock, nuestro stock es de ' + stock + ' unidades'
			);
		}
	};

	const removeFromCart = () => {
		if (cart - counter >= 0) {
			setStock(stock + counter);
			setCart(cart - counter);
			setCounter(1);
		} else {
			alert('No puedes quitar más de lo que tienes en el carrito');
		}
	};

	return (
		<>
			<NavBar cart={cart} />
			<ItemListContainer
				counter={counter}
				addItem={addItem}
				removeItem={removeItem}
				addToCart={addToCart}
				removeFromCart={removeFromCart}
			/>
		</>
	);
}

export default App;
