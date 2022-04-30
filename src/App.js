import NavBar from './components/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import NotFoundPage from './components/NotFoundPage';
import Cart from './components/Cart';
import CartContextProvider from './context/CartContextProvider';
import CheckOut from './components/CheckOut';
import Footer from './components/Footer';

function App() {
	return (
		<BrowserRouter>
			<CartContextProvider>
				<NavBar />
				<Routes>
					<Route path='/' element={<ItemListContainer />} />
					<Route path='/category/:category' element={<ItemListContainer />} />
					<Route path='/item/:productId' element={<ItemDetailContainer />} />
					<Route path='/cart' element={<Cart />} />
					<Route path='/checkout' element={<CheckOut />} />
					<Route path='*' element={<NotFoundPage />} />
				</Routes>
				<Footer />
			</CartContextProvider>
		</BrowserRouter>
	);
}

export default App;
