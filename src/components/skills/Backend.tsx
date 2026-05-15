import React from "react";

const Backend = () => {
	return (
		<div
			className="skills__content reveal-card"
			data-aos="card-reveal"
			data-aos-delay="120"
		>
			<h3 className="skills__title">Backend Development</h3>
			<div className="skills__box">
				<div className="skills__group">
					<div className="skills__data">
						<i className="bx bx-badge-check"></i>
						<div>
							<h3 className="skills__name">ExpressJs</h3>
							<span className="skills__level">Intermediate</span>
						</div>
					</div>

					<div className="skills__data">
						<i className="bx bx-badge-check"></i>
						<div>
							<h3 className="skills__name">Gin</h3>
							<span className="skills__level">Intermediate</span>
						</div>
					</div>

					<div className="skills__data">
						<i className="bx bx-badge-check"></i>
						<div>
							<h3 className="skills__name">NestJS</h3>
							<span className="skills__level">Advanced</span>
						</div>
					</div>
				</div>
				<div className="skills__group">
					<div className="skills__data">
						<i className="bx bx-badge-check"></i>
						<div>
							<h3 className="skills__name">Echo</h3>
							<span className="skills__level">Basic</span>
						</div>
					</div>
					<div className="skills__data">
						<i className="bx bx-badge-check"></i>
						<div>
							<h3 className="skills__name">Laravel</h3>
							<span className="skills__level">Intermediate</span>
						</div>
					</div>

					<div className="skills__data">
						<i className="bx bx-badge-check"></i>
						<div>
							<h3 className="skills__name">DevOps</h3>
							<span className="skills__level">Basic</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Backend;
