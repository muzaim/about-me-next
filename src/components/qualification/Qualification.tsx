"use client";

import { useState } from "react";

const Qualification = () => {
	const [toggleState, setToggleState] = useState(1);

	const toggleTab = (index: number) => {
		setToggleState(index);
	};
	return (
		<section className="qualification section">
			<h2 className="section__title">Qualification</h2>
			<span className="section__subtitle">My Personal Journey</span>

			<div className="qualification__container container">
				<div className="qualification__tabs">
					<div
						className={
							toggleState === 1
								? "qualification__button qualification__active button--flex"
								: "qualification__button  button--flex"
						}
						onClick={() => toggleTab(1)}
					>
						<i className="uil uil-briefcase-alt qualification__icon"></i>{" "}
						Experience
					</div>
					<div
						className={
							toggleState === 2
								? "qualification__button qualification__active button--flex"
								: "qualification__button  button--flex"
						}
						onClick={() => toggleTab(2)}
					>
						<i className="uil uil-graduation-cap qualification__icon"></i>{" "}
						Education
					</div>
				</div>

				<div className="qualification__sections">
					{/* EXPERIENCE */}
					<div
						className={
							toggleState === 1
								? "qualification__content qualification__content-active"
								: "qualification__content "
						}
					>
						<div className="qualification__data" data-aos="fade-up">
							<div></div>
							<div>
								<span className="qualification__rounder"></span>
								<span className="qualification__line"></span>
							</div>
							<div>
								<h3 className="qualification__title">
									Fullstack Developer
								</h3>
								<span className="qualification__subtitle">
									PT. Sarana Multigriya Finansial(Persero)
								</span>
								<div className="qualification__calendar">
									<i className="uil uil-calendar-alt"></i>{" "}
									2023
								</div>
							</div>
						</div>

						<div className="qualification__data" data-aos="fade-up">
							<div className="text-end">
								<h3 className="qualification__title">
									Laravel Developer
								</h3>
								<span className="qualification__subtitle">
									Aisyiyah Elementary School
								</span>
								<div className="qualification__calendar">
									<i className="uil uil-calendar-alt"></i>{" "}
									2023
								</div>
							</div>
							<div>
								<span className="qualification__rounder"></span>
								<span className="qualification__line"></span>
							</div>
						</div>

						<div className="qualification__data" data-aos="fade-up">
							<div></div>
							<div>
								<span className="qualification__rounder"></span>
								<span className="qualification__line"></span>
							</div>
							<div>
								<h3 className="qualification__title">
									Front End Developer
								</h3>
								<span className="qualification__subtitle">
									Tamakochi.com
								</span>
								<div className="qualification__calendar">
									<i className="uil uil-calendar-alt"></i>{" "}
									2022
								</div>
							</div>
						</div>

						<div className="qualification__data" data-aos="fade-up">
							<div className="text-end">
								<div>
									<h3 className="qualification__title">
										Backend Developer
									</h3>
									<span className="qualification__subtitle">
										Astra Credit Companies
									</span>
									<div className="qualification__calendar">
										<i className="uil uil-calendar-alt"></i>{" "}
										2021
									</div>
								</div>
							</div>
							<div>
								<span className="qualification__rounder"></span>
								<span className="qualification__line"></span>
							</div>
						</div>
					</div>

					{/* EDUCATION */}
					<div
						className={
							toggleState === 2
								? "qualification__content qualification__content-active"
								: "qualification__content "
						}
					>
						<div className="qualification__data" data-aos="fade-up">
							<div></div>
							<div>
								<span className="qualification__rounder"></span>
								<span className="qualification__line"></span>
							</div>
							<div>
								<h3 className="qualification__title">
									Bachelor Degree
								</h3>
								<span className="qualification__subtitle">
									University Of Technology Yogyakarta
								</span>
								<div className="qualification__calendar">
									<i className="uil uil-calendar-alt"></i>{" "}
									2016 - 2021
								</div>
							</div>
						</div>

						<div className="qualification__data" data-aos="fade-up">
							<div className="text-end">
								<h3 className="qualification__title">
									Senior High School
								</h3>
								<span className="qualification__subtitle">
									Senior High School of 1 Nganjuk
								</span>
								<div className="qualification__calendar">
									<i className="uil uil-calendar-alt"></i>{" "}
									2013 - 2016
								</div>
							</div>
							<div>
								<span className="qualification__rounder"></span>
								<span className="qualification__line"></span>
							</div>
						</div>

						<div className="qualification__data" data-aos="fade-up">
							<div></div>
							<div>
								<span className="qualification__rounder"></span>
								<span className="qualification__line"></span>
							</div>
							<div>
								<h3 className="qualification__title">
									Junior High School
								</h3>
								<span className="qualification__subtitle">
									Baitul Izzah Junior High School
								</span>
								<div className="qualification__calendar">
									<i className="uil uil-calendar-alt"></i>{" "}
									2011 - 2013
								</div>
							</div>
						</div>

						<div className="qualification__data" data-aos="fade-up">
							<div className="text-end">
								<h3 className="qualification__title">
									Elementary School
								</h3>
								<span className="qualification__subtitle">
									Aisyiyah 1 Elementary School
								</span>
								<div className="qualification__calendar">
									<i className="uil uil-calendar-alt"></i>{" "}
									2004 - 2010
								</div>
							</div>
							<div>
								<span className="qualification__rounder"></span>
								<span className="qualification__line"></span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Qualification;
