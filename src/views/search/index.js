import './styles.css';

import Header from './header';
import Speciality from './speciality';
import ProfilesList from './list';

const ProfilesView = () => {
  	return (
    	<section id="profiles__view">
      	<div className='profiles__container'>
				<Header />
				<Speciality />
				<div className='profiles__view-separator'>
					<div className="profiles__view-separator-line"></div>
				</div>
				<ProfilesList />
			</div>
    	</section>
  	);
}

export default ProfilesView;
