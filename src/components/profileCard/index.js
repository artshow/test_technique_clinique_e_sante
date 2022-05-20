import React from 'react';
import Button from '../button';
import Description from './description';
import Informations from './informations';
import JobInformations from './jobInformations';

import './styles.css';

const ProfileCard = ({profile}) => {

	// -> Extract data from profile
	const {name, age, city, role, type, salary, skills, picture, available} = profile;

	return (
		<div className="profile__card">
			<div className="profile__card-left-side">
				{/* Media du profil */}
				<div className="profile__card-media">
					<img src={`/pictures/${picture}.jpeg`} alt={`Profil de ${name}`}/>
				</div>
				<Button title='Choisir' />
			</div>
			<div className="profile__card-content">
				{/* Affiche les informations de base avec le nom, les notes et si le profil est disponible */}
				<Informations name={name} available={available} />
				{/* Affiche tout ce equi concerne le job du profil (salaire, compétences, role..)*/}
				<JobInformations role={role} skills={skills} type={type} salary={salary} />
				{/* Affiche la description du profil (ville & age) */}
				<Description city={city} age={age} />
			</div>
		</div>
	);
}

export default React.memo(ProfileCard);
