import {useState} from 'react';
import SearchBar from '../../../components/searchBar';
import ProfileCard from '../../../components/profileCard';

// -> importation des données des profils
import dataProfiles from './profiles.json';
import './styles.css';

const List = () => {

	// -> useState pour effectuer la recherche des développeurs
	const [searchText, setSearchText] = useState('');

	/**
	 * [searchProfile sert à la recherche de différents profils]
	 * @param  {[string]} search [texte de la recherche]
	 * @param  {[array]} keys [tableau des différentes clés recherchées] - Si par exemple, on veut supprimer le salaire etc.
	 * @return {[array]} [tableau filtré par le texte]
	 */
	const searchProfile = (search, keys) => {
		// -> Modifie la recherche en minuscule
    	let lowerSearch = search.toLowerCase();
    	return dataProfiles.filter(profile => keys.some(key => {
			// -> Retourne le profil si la recherche est trouvée dans l'une des propriétés des clés
			return String(profile[key]).toLowerCase().replace(' ', '').includes(lowerSearch.replace(' ',''));
		}));
	}

	let filteredProfiles = searchProfile(searchText, ['name', 'age', 'city', 'type', 'salary', 'skills', 'role']);

	/**
	 * [getEmptyResult affiche un texte quand il n'y a aucun résultat lors d'une recherche]
	 * @return void
	 */
	const getEmptyResult = () => {
		if(searchText && filteredProfiles.length === 0) {
			return (
				<div className='profiles_view-list-empty'>
					<div className="profiles_view-list-empty-title">Aucun résultat ! 😣</div>
					<div className="profiles_view-list-empty-description">Malheureusement, il n'y a aucun profil correspondant à votre recherche: <strong>{searchText}</strong> !</div>
				</div>
			);
		}
		return null;
	}

	return (
		<div className='profiles_view-wrapper-list'>
			{/* Barre de recherche pour les profils */}
			<SearchBar onChange={(event) => setSearchText(event.target.value)} placeholder='Recherchez ici votre développeur par ville, technologies, nom...' />
			<div className="profiles_view-list">
				{getEmptyResult()}
				{filteredProfiles.map(profile => <ProfileCard profile={profile} key={profile.id} />)}
			</div>
		</div>
	)
}

export default List;
