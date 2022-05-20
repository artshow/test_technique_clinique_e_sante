import './styles.css';

const Ratings = () => {
	return (
		<div className="profile__card-ratings">
			<div className="profile__card-rating">
				<div className='profile__card-rating-text'>Excellent</div>
				<img src='/assets/trustpilot-rating.svg' alt='Notation trustpilot' />
			</div>
			<div className="profile__card-logo-truspilot">
				<img src='/assets/trustpilot-logo.svg' alt='Logo truspilot' />
			</div>
		</div>
	);
}

export default Ratings;
