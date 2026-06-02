"use client";

import { useState } from "react";

const Services = () => {
	const [toggleState, setToggleState] = useState(0);

	const toggleTab = (index: number) => {
		setToggleState(index);
	};

	return (
		<section className="services section" id="services">
			<h2 className="section__title">Services</h2>
			<span className="section__subtitle">What I offer</span>

			<div className="services__container container grid">
				{/* 1 */}
				<div
					className="services__content reveal-card"
					data-aos="card-reveal"
					data-aos-delay="0"
				>
					<div>
						<i className="uil uil-web-grid services__icon"></i>
						<h3 className="services__title">
							Frontend <br />
							Engineering
						</h3>
					</div>
					{/* <span className="services__button" onClick={() => toggleTab(1)}>
            View More
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span> */}

					{/* MODAL */}
					<div
						className={
							toggleState === 1
								? "services__modal active-modal"
								: "services__modal"
						}
					>
						<div className="services__modal-content">
							<i
								className="uil uil-times services__modal-close"
								onClick={() => toggleTab(0)}
							></i>
							<h3 className="services__modal-title">
								Product Development
							</h3>
							<p className="services__modal-description">
								Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Tempore, nesciunt?
							</p>
							<ul className="services__modal-services grid">
								<li className="services__modal-service">
									<i className="uil uil-check-circle services__modal-icon"></i>
									<p className="services__modal-info">
										I develop the user interface.
									</p>
								</li>
								<li className="services__modal-service">
									<i className="uil uil-check-circle services__modal-icon"></i>
									<p className="services__modal-info">
										web page development
									</p>
								</li>
								<li className="services__modal-service">
									<i className="uil uil-check-circle services__modal-icon"></i>
									<p className="services__modal-info">
										I create ux element interaction
									</p>
								</li>
								<li className="services__modal-service">
									<i className="uil uil-check-circle services__modal-icon"></i>
									<p className="services__modal-info">
										I develop the user interface.
									</p>
								</li>
								<li className="services__modal-service">
									<i className="uil uil-check-circle services__modal-icon"></i>
									<p className="services__modal-info">
										I develop the user interface.
									</p>
								</li>
							</ul>
						</div>
					</div>
				</div>
				{/* END 1 */}

				{/* 2 */}
				<div
					className="services__content reveal-card"
					data-aos="card-reveal"
					data-aos-delay="100"
				>
					<div>
						<i className="uil uil-arrow services__icon"></i>
						<h3 className="services__title">
							Backend <br /> Engineering
						</h3>
					</div>
					{/* <span
						className="services__button"
						onClick={() => toggleTab(2)}
					>
						View More
						<i className="uil uil-arrow-right services__button-icon"></i>
					</span> */}

					{/* MODAL */}
					<div
						className={
							toggleState === 2
								? "services__modal active-modal"
								: "services__modal"
						}
					>
						<div className="services__modal-content">
							<i
								className="uil uil-times services__modal-close"
								onClick={() => toggleTab(0)}
							></i>
							<h3 className="services__modal-title">
								UI UX Designer
							</h3>
							<p className="services__modal-description">
								Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Tempore, nesciunt?
							</p>
							<ul className="services__modal-services grid">
								<li className="services__modal-service">
									<i className="uil uil-check-circle services__modal-icon"></i>
									<p className="services__modal-info">
										I develop the user interface.
									</p>
								</li>
								<li className="services__modal-service">
									<i className="uil uil-check-circle services__modal-icon"></i>
									<p className="services__modal-info">
										web page development
									</p>
								</li>
								<li className="services__modal-service">
									<i className="uil uil-check-circle services__modal-icon"></i>
									<p className="services__modal-info">
										I create ux element interaction
									</p>
								</li>
								<li className="services__modal-service">
									<i className="uil uil-check-circle services__modal-icon"></i>
									<p className="services__modal-info">
										I develop the user interface.
									</p>
								</li>
								<li className="services__modal-service">
									<i className="uil uil-check-circle services__modal-icon"></i>
									<p className="services__modal-info">
										I develop the user interface.
									</p>
								</li>
							</ul>
						</div>
					</div>
				</div>
				{/* END 2 */}

				{/* 3 */}
				<div
					className="services__content reveal-card"
					data-aos="card-reveal"
					data-aos-delay="200"
				>
					<div>
						<i className="uil uil-edit services__icon"></i>
						<h3 className="services__title">
							Product <br /> Development
						</h3>
					</div>
					{/* <span
						className="services__button"
						onClick={() => toggleTab(3)}
					>
						View More
						<i className="uil uil-arrow-right services__button-icon"></i>
					</span> */}

					{/* MODAL */}
					<div
						className={
							toggleState === 3
								? "services__modal active-modal"
								: "services__modal"
						}
					>
						<div className="services__modal-content">
							<i
								className="uil uil-times services__modal-close"
								onClick={() => toggleTab(0)}
							></i>
							<h3 className="services__modal-title">
								Visual Designer
							</h3>
							<p className="services__modal-description">
								Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Tempore, nesciunt?
							</p>
							<ul className="services__modal-services grid">
								<li className="services__modal-service">
									<i className="uil uil-check-circle services__modal-icon"></i>
									<p className="services__modal-info">
										I develop the user interface.
									</p>
								</li>
								<li className="services__modal-service">
									<i className="uil uil-check-circle services__modal-icon"></i>
									<p className="services__modal-info">
										web page development
									</p>
								</li>
								<li className="services__modal-service">
									<i className="uil uil-check-circle services__modal-icon"></i>
									<p className="services__modal-info">
										I create ux element interaction
									</p>
								</li>
								<li className="services__modal-service">
									<i className="uil uil-check-circle services__modal-icon"></i>
									<p className="services__modal-info">
										I develop the user interface.
									</p>
								</li>
								<li className="services__modal-service">
									<i className="uil uil-check-circle services__modal-icon"></i>
									<p className="services__modal-info">
										I develop the user interface.
									</p>
								</li>
							</ul>
						</div>
					</div>
				</div>
				{/* END 3 */}
			</div>
		</section>
	);
};

export default Services;
