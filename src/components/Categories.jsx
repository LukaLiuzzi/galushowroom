import { Select } from '@mantine/core';
import { useState } from 'react';

export default function Categories() {
	const [value, setValue] = useState('');
	return (
		<Select
			className='max-w-[10rem]'
			label='Categorias'
			placeholder='Filtre por categoria'
			value={value}
			onChange={setValue}
			data={[
				{ value: 'Remeras', label: 'Remeras' },
				{ value: 'Buzos', label: 'Buzos' },
				{ value: 'Pantalones', label: 'Pantalones' },
			]}
		/>
	);
}
