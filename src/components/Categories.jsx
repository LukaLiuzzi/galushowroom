import { NavLink } from 'react-router-dom';

export default function Categories({ category }) {
	return (
		<>
			{category.map((el) => (
				<NavLink to={'/category/' + el} key={el}>
					<li>{el}</li>
				</NavLink>
			))}
		</>
	);
}
