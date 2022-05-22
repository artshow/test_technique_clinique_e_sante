import './styles.css';

import Header from './header';
import Speciality from './speciality';
import ProfilesList from './list';

const SearchView = () => {
  	return (
    	<section id="search__view">
      	<div className='search__container'>
				{/* Header avec titre & description */}
				<Header />
				{/* Les différents besoins de l'utilisateur  */}
				<Speciality />
				<div className='search__view-separator'>
					<div className="search__view-separator-line"></div>
				</div>
				{/* Liste des profils avec recherche */}
				<ProfilesList />
			</div>
    	</section>
  	);
}

export default SearchView;
