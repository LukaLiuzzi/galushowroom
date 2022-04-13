import { Select } from '@mantine/core';

export default function Categories({ categoryValue, setCategoryValue }) {
	return (
		<Select
			className='max-w-[10rem]'
			label='Categorias'
			placeholder='Filtre por categoria'
			value={categoryValue}
			onChange={setCategoryValue}
			data={[
				{ value: 'remeras', label: 'Remeras' },
				{ value: 'buzos', label: 'Buzos' },
				{ value: 'pantalones', label: 'Pantalones' },
			]}
		/>
	);
}
