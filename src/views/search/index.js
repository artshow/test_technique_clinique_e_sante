import './styles.css';

import Header from './header';
import Speciality from './speciality';
import ProfilesList from './list';

const ProfilesView = () => {
  	return (
    	<section id="profiles__view">
      	<div className='profiles__container'>
				{/* Header avec titre & description */}
				<Header />
				{/* Les différents besoins de l'utilisateur  */}
				<Speciality />
				<div className='profiles__view-separator'>
					<div className="profiles__view-separator-line"></div>
				</div>
				{/* Liste des profils avec recherche */}
				<ProfilesList />
			</div>
    	</section>
  	);
}

export default ProfilesView;
