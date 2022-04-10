import NavBar from './components/NavBar';
// import ItemListContainer from './components/ItemListContainer';
// import { useState } from 'react';
import ItemDetailContainer from './components/ItemDetailContainer';
import SearchBar from './components/SearchBar';

function App() {
	// const [stock, setStock] = useState(7);

	return (
		<>
			<NavBar />
			<SearchBar />
			{/* <ItemListContainer stock={stock} setStock={setStock} /> */}
			<ItemDetailContainer />
		</>
	);
}

export default App;
