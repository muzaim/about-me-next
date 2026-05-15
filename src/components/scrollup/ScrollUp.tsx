"use client";

import { useEffect } from "react";

const ScrollUp = () => {
	useEffect(() => {
		const handleScroll = () => {
			const scrollUp = document.querySelector(".scrollup");
			if (!scrollUp) return;

			if (window.scrollY >= 560) scrollUp.classList.add("show-scroll");
			else scrollUp.classList.remove("show-scroll");
		};

		window.addEventListener("scroll", handleScroll);

		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<a href="#home" className="scrollup">
			<i className="uil uil-arrow-up scrollup__icon"></i>
		</a>
	);
};

export default ScrollUp;
