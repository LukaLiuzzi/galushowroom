import { Link } from 'react-router-dom';

export default function Categories({ category }) {
	return (
		<>
			<ul>
				{category.map((el) => (
					<Link to={'/category/' + el} key={el}>
						<li>{el}</li>
					</Link>
				))}
			</ul>
		</>
	);
}
