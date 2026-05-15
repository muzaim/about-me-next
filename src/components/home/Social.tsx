import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faUpwork,
	faLinkedin,
	faGithub,
} from "@fortawesome/free-brands-svg-icons";

const Social = () => {
	return (
		<div className="home__social">
			<a
				href="https://www.upwork.com/freelancers/~01efa129667ae9e3f3"
				className="home__social-icon"
				target="_blank"
				rel="noreferrer"
			>
				<FontAwesomeIcon icon={faUpwork} />
			</a>

			<a
				href="https://www.linkedin.com/in/syafri-surya-574369207/"
				className="home__social-icon"
				target="_blank"
				rel="noreferrer"
			>
				<FontAwesomeIcon icon={faLinkedin} />
			</a>

			<a
				href="https://github.com/muzaim"
				className="home__social-icon"
				target="_blank"
				rel="noreferrer"
			>
				<FontAwesomeIcon icon={faGithub} />
			</a>
		</div>
	);
};

export default Social;
