import React from "react";

const Info = () => {
	return (
		<div>
			<div className="about__info grid">
				<div
					className="about__box reveal-card"
					data-aos="card-reveal"
					data-aos-delay="0"
				>
					<i className="bx bx-award about__icon"></i>
					<h3 className="about__title">Experience</h3>
					<span className="about__subtitle">5 Years working</span>
				</div>

				<div
					className="about__box reveal-card"
					data-aos="card-reveal"
					data-aos-delay="100"
				>
					<i className="bx bx-briefcase about__icon"></i>
					<h3 className="about__title">Projects</h3>
					<span className="about__subtitle">36+ Projects</span>
				</div>

				<div
					className="about__box reveal-card"
					data-aos="card-reveal"
					data-aos-delay="200"
				>
					<i className="bx bx-support about__icon"></i>
					<h3 className="about__title">Support</h3>
					<span className="about__subtitle">Online 24/7</span>
				</div>
			</div>
		</div>
	);
};

export default Info;
