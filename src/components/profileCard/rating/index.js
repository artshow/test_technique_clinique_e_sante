import './styles.css';

const Notices = () => {
	return (
		<div className="profile__card-right-side">
			<div className="profile__card-rating">
				<div className='profile__card-rating-text'>Excellent</div>
				<img src='/assets/trustpilot-rating.svg' />
			</div>
			<div className="profile__card-logo-truspilot">
				<img src='/assets/trustpilot-logo.svg' />
			</div>
		</div>
	);
}

export default Notices;
