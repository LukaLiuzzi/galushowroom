import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Routes as routes } from 'react-router-dom';
import ItemListContainer from '../components/ItemListContainer';
import ItemDetailContainer from '../components/ItemDetailContainer';

export default function Routes() {
	return (
		<BrowserRouter>
			<Route path='/' element={<ItemListContainer />} />

			<ItemDetailContainer />
		</BrowserRouter>
	);
}
