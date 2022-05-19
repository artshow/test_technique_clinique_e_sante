import {useState} from 'react';
import './styles.css';

const Skills = ({skills}) => {

	// -> state pour afficher plus de skilks par le bouton [+]
	const [showMoreSkills, setShowMoreSkills] = useState(false);

	// -> Si showMoreSkills? alors renvoie un tableau avec seulement les 5 premiers éléments, sinon renvoie tout le tableau
	const slicedSkills = showMoreSkills ? skills : skills.slice(0, 5);

	return (
		<div className="profile__card-skills">{slicedSkills.map((skill, index) => (
				<div key={`${index}-${skill}`} className="profile__card-skill">
					{skill}
				</div>
			))}
			<button onClick={() => setShowMoreSkills(!showMoreSkills)} className='profile__card-skill-button'>{showMoreSkills ? '-' : '+'}</button>
		</div>
	);
}

export default Skills;
