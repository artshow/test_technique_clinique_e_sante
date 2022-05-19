import Button from '../../../components/button';

import './styles.css';

const ProfileSearch = () => {
	return (
		<div className='profile__speciality'>
			<div className='profile__speciality-title'>Quelle est votre besoin principal ?</div>
			<div className="profile__speciality-content">
				<div className="profile__speciality-content-portait">
					<img src='assets/blurred-profile.png' />
				</div>
				<div className="profile__speciality-content-select">
					Votre réponse -------
					<img src='/icons/icon-down.svg' alt='Icône recherche spécialiste' />
				</div>
				<Button title='Suivant' disabled />
			</div>
			<div className="profile__speciality-carousel-indicators">
				{/* Génère trois item dans un array, le premier élement est actif par défaut */}
				{[...Array(3).keys()].map(item => {
					return (
						<div key={item} className={`profile__speciality-carousel-indicator ${item == 0?'active':''}`}></div>
					);
				})}
			</div>
		</div>
	);
}

export default ProfileSearch;
