import Skills from '../skills';

import './styles.css';

const JobInformations = ({role, skills, type, salary}) => {
	return (
		<div className='profile__card-job-informations'>
			<div className="profile__card-role">{role}</div>
			{/* Affiche les différents skill du profil */}
			<Skills skills={skills} />
			<div className="profile__card-job-content">
				<div className="profile__card-type">{type}</div>
				<div className="profile__card-salary">{salary}</div>
			</div>
		</div>
	);
}

export default JobInformations;
