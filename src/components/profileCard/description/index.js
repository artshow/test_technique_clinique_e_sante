import {useState} from 'react';
import './styles.css';

const Description = ({city, age}) => {

	// -> state pour afficher la description
	const [showDescription, setShowDescription] = useState(false);

	return (
		<div className="profile__card-description">
			{showDescription && (
				<div className='profile__card-description-details'>
					<div className="profile__card-city">Ville: {city}</div>
					<div className="profile__card-age">Âge: {age} ans</div>
				</div>
			)}
			<button onClick={() => setShowDescription(!showDescription)} className='profile__card-description-button'>
				{showDescription ? 'Masquer' :'Afficher'}
				<img alt='Icône voir plus description' src={`/icons/icon-${showDescription ? 'up' : 'down'}.svg`} />
			</button>
		</div>
	);
}

export default Description;
