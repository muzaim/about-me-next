"use client";

import { useEffect, useState } from "react";

type HeaderProps = {
	theme: "dark" | "light";
	onToggleTheme: () => void;
};

const Header = ({ theme, onToggleTheme }: HeaderProps) => {
	// ========================== TOGGLE MENU ========================== //
	const [Toggle, showMenu] = useState(false);
	const [activeNav, setActiveNav] = useState("#about");

	useEffect(() => {
		const handleScroll = () => {
			const header = document.querySelector(".header");
			if (!header) return;

			if (window.scrollY >= 80) header.classList.add("scroll-header");
			else header.classList.remove("scroll-header");
		};

		window.addEventListener("scroll", handleScroll);

		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<div>
			<header className="header">
				<nav className="nav container">
					<a href="#home" className="nav__logo">
						Surya
					</a>
					<div
						className={Toggle ? "nav__menu show-menu" : "nav__menu"}
					>
						<ul className="nav__list grid">
							<li className="nav__item">
								<a
									href="#about"
									onClick={() => setActiveNav("#about")}
									className={
										activeNav === "#about"
											? "nav__link active-link"
											: "nav__link"
									}
								>
									<i className="uil uil-user nav__icon"></i>{" "}
									About
								</a>
							</li>
							<li className="nav__item">
								<a
									href="#skills"
									onClick={() => setActiveNav("#skills")}
									className={
										activeNav === "#skills"
											? "nav__link active-link"
											: "nav__link"
									}
								>
									<i className="uil uil-file-alt nav__icon"></i>{" "}
									Skills
								</a>
							</li>
							<li className="nav__item">
								<a
									href="#services"
									onClick={() => setActiveNav("#home")}
									className={
										activeNav === "#home"
											? "nav__link active-link"
											: "nav__link"
									}
								>
									<i className="uil uil-briefcase-alt nav__icon"></i>{" "}
									Service
								</a>
							</li>
							<li className="nav__item">
								<a
									href="#portfolio"
									onClick={() => setActiveNav("#portfolio")}
									className={
										activeNav === "#portfolio"
											? "nav__link active-link"
											: "nav__link"
									}
								>
									<i className="uil uil-scenery nav__icon"></i>{" "}
									Portfolio
								</a>
							</li>
							<li className="nav__item">
								<a
									href="#contact"
									onClick={() => setActiveNav("#contact")}
									className={
										activeNav === "#contact"
											? "nav__link active-link"
											: "nav__link"
									}
								>
									<i className="uil uil-message nav__icon"></i>{" "}
									Contact
								</a>
							</li>
						</ul>

						<i
							className="uil uil-times nav__close"
							onClick={() => showMenu(!Toggle)}
						></i>
					</div>

					<div className="nav__actions">
						<button
							type="button"
							className="theme__toggle"
							onClick={onToggleTheme}
							aria-label={`Activate ${
								theme === "dark" ? "light" : "dark"
							} mode`}
							title={`Switch to ${
								theme === "dark" ? "light" : "dark"
							} mode`}
						>
							<i
								className={`uil ${
									theme === "dark" ? "uil-sun" : "uil-moon"
								}`}
							></i>
						</button>

						<div
							className="nav__toggle"
							onClick={() => showMenu(!Toggle)}
						>
							<i className="uil uil-apps"></i>
						</div>
					</div>
				</nav>
			</header>
		</div>
	);
};

export default Header;
