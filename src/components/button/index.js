import './styles.css';

const Button = ({title, disabled}) => {
	return (
		<button className='btn__primary' disabled={disabled}>{title}</button>
	);
}

export default Button;
