import React,{useState} from 'react';
import Button from '../button';
import Skills from './skills';
import Description from './description';

import './styles.css';

const ProfileCard = ({profile}) => {

	// -> Extract data from profile
	const {name, age, city, role, type, salary, skills, picture, available} = profile;

	return (
		<div className="profile__card">
			<div className="profile__card-left-side">
				<img src={`/pictures/${picture}.jpeg`} alt={`Image de profil de ${name}`}/>
				<Button title='Choisir' />
			</div>
			<div className="profile__card-center-side">
				<div className="profile__card-header">
					<div className="profile__card-name">{name}</div>
					{available && (<div className="profile-card-available">Disponible aujourd'hui</div>)}
				</div>
				<div className="profile__card-role">{role}</div>
				{/* Affiche les différents skill du profil */}
				<Skills skills={skills} />
				<div className="profile__card-informations">
					<div className="profile__card-type">{type}</div>
					<div className="profile__card-salary">{salary}</div>
				</div>
				{/* Affiche la description du profil (ville & age) */}
				<Description city={city} age={age} />
			</div>
			<div className="profile__card-right-side">
				<div className="profile__card-notices">
					<div className='profile__card-notices-text'>Excellent</div>
					<img src='/assets/trustpilot-notices.svg' />
				</div>
				<div className="profile__card-logo-truspilot">
					<img src='/assets/trustpilot-logo.svg' />
				</div>
			</div>
		</div>
	);
}

export default React.memo(ProfileCard);
