import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import { useState } from 'react';

function App() {
	const [stock, setStock] = useState(7);

	return (
		<>
			<NavBar />
			<ItemListContainer stock={stock} setStock={setStock} />
		</>
	);
}

export default App;
