import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import { useState } from 'react';
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {
	const [stock, setStock] = useState(7);

	return (
		<>
			<NavBar />
			<ItemListContainer stock={stock} setStock={setStock} />
			<hr style={{ color: 'red' }} />
			<ItemDetailContainer />
		</>
	);
}

export default App;
