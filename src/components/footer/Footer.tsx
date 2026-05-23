import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faLinkedin,
	faGithub,
	faUpwork,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
	return (
		<footer className="footer">
			<div className="footer__container container">
				<p className="footer__title">Surya</p>

				<ul className="footer__list">
					<li>
						<a href="#about" className="footer__link">
							About
						</a>
					</li>
					<li>
						<a href="#portfolio" className="footer__link">
							Portfolio
						</a>
					</li>
					<li>
						<a href="#contact" className="footer__link">
							Contact
						</a>
					</li>
				</ul>
				<div className="footer__social">
					<a
						href="https://www.upwork.com/freelancers/~01efa129667ae9e3f3"
						className="footer__social-link"
						target="_blank"
						rel="noreferrer"
					>
						<FontAwesomeIcon icon={faUpwork} />
					</a>

					<a
						href="https://www.linkedin.com/in/syafri-surya-574369207/"
						className="footer__social-link"
						target="_blank"
						rel="noreferrer"
					>
						<FontAwesomeIcon icon={faLinkedin} />
					</a>

					<a
						href="https://github.com/muzaim"
						className="footer__social-link"
						target="_blank"
						rel="noreferrer"
					>
						<FontAwesomeIcon icon={faGithub} />
					</a>
				</div>
				{/* <span className="footer__copy">
					&#169;Copyrihgt. All rights reserved
				</span> */}
			</div>
		</footer>
	);
};

export default Footer;
