import './styles.css';

const SearchBar = ({placeholder='', onChange}) => {
	return (
		<div className='search__bar'>
			<input onChange={onChange} type='text' className='search__bar-input' placeholder={placeholder} />
			<img className='search__bar-icon' src='/icons/icon-search.svg' />
		</div>
	);
}

export default SearchBar;
