import React from 'react';
import Categories from './Categories';
import SearchBar from './SearchBar';

export default function Filters({ categoryValue, setCategoryValue }) {
	return (
		<div className='container mx-auto flex justify-between items-center gap-4'>
			<SearchBar />
			<Categories
				categoryValue={categoryValue}
				setCategoryValue={setCategoryValue}
			/>
		</div>
	);
}
