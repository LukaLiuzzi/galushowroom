import NavBar from './components/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import NotFoundPage from './components/NotFoundPage';
import Cart from './components/Cart';
import CartContexProvider from './context/CartContexProvider';

function App() {
	return (
		<BrowserRouter>
			<CartContexProvider>
				<NavBar />
				<Routes>
					<Route path='/' element={<ItemListContainer />} />
					<Route path='/category/:category' element={<ItemListContainer />} />
					<Route path='/item/:productId' element={<ItemDetailContainer />} />
					<Route path='/cart' element={<Cart />} />
					<Route path='*' element={<NotFoundPage />} />
				</Routes>
			</CartContexProvider>
		</BrowserRouter>
	);
}

export default App;
