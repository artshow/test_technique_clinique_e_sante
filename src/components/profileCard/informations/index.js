import Ratings from '../ratings';

import './styles.css';

const Informations = ({name, available}) => {
	return (
		<div className="profile__card-informations">
			<div className="profile__card-informations-left">
				<div className="profile__card-name">{name}</div>
				{available && (<div className="profile-card-available">Disponible aujourd'hui</div>)}
			</div>
			<Ratings />
		</div>
	);
}

export default Informations;
