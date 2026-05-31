"use client";

import { LazyMotion, domAnimation, m } from "framer-motion";
import Lenis from "lenis";
import { useEffect, useState } from "react";
import About from "./about/About";
import Contact from "./contact/Contact";
import CustomCursor from "./cursor/CustomCursor";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import Home from "./home/Home";
import Qualification from "./qualification/Qualification";
import ScrollUp from "./scrollup/ScrollUp";
import Services from "./services/Services";
import Skills from "./skills/Skills";
import Work from "./work/Work";

const introDuration = 3900;
const introName = "Syafri Surya";

export default function PortfolioShell() {
	const [theme, setTheme] = useState<"dark" | "light">("light");
	const [showIntro, setShowIntro] = useState(true);
	const [isIntroClosing, setIsIntroClosing] = useState(false);
	const [typedName, setTypedName] = useState("");

	useEffect(() => {
		const savedTheme = window.localStorage.getItem("theme");
		const preferredTheme = window.matchMedia("(prefers-color-scheme: dark)")
			.matches
			? "dark"
			: "light";

		setTheme(
			savedTheme === "dark" || savedTheme === "light"
				? savedTheme
				: preferredTheme
		);
	}, []);

	useEffect(() => {
		document.body.classList.toggle("dark-theme", theme === "dark");
		window.localStorage.setItem("theme", theme);
	}, [theme]);

	useEffect(() => {
		const closeIntroTimer = window.setTimeout(() => {
			setIsIntroClosing(true);
		}, 3200);

		const hideIntroTimer = window.setTimeout(() => {
			setShowIntro(false);
		}, introDuration);

		return () => {
			window.clearTimeout(closeIntroTimer);
			window.clearTimeout(hideIntroTimer);
		};
	}, []);

	useEffect(() => {
		if (!showIntro) return undefined;

		setTypedName("");

		let index = 0;
		const typeTimer = window.setInterval(() => {
			index += 1;
			setTypedName(introName.slice(0, index));

			if (index >= introName.length) {
				window.clearInterval(typeTimer);
			}
		}, 95);

		return () => window.clearInterval(typeTimer);
	}, [showIntro]);

	useEffect(() => {
		document.body.classList.toggle("intro-active", showIntro);

		return () => {
			document.body.classList.remove("intro-active");
		};
	}, [showIntro]);

	useEffect(() => {
		const revealElements = Array.from(
			document.querySelectorAll<HTMLElement>("[data-aos]")
		);

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						const delay = Number(
							entry.target.getAttribute("data-aos-delay") ?? 0
						);
						window.setTimeout(() => {
							entry.target.classList.add("aos-animate");
						}, delay);
						observer.unobserve(entry.target);
					}
				});
			},
			{ rootMargin: "0px 0px -8% 0px", threshold: 0.12 }
		);

		revealElements.forEach((element) => observer.observe(element));

		return () => observer.disconnect();
	}, [showIntro]);

	useEffect(() => {
		const lenis = new Lenis({
			anchors: true,
			lerp: 0.075,
			smoothWheel: true,
			wheelMultiplier: 0.75,
			syncTouch: false,
		});

		let animationFrameId = 0;

		const raf = (time: number) => {
			lenis.raf(time);
			animationFrameId = window.requestAnimationFrame(raf);
		};

		animationFrameId = window.requestAnimationFrame(raf);

		return () => {
			window.cancelAnimationFrame(animationFrameId);
			lenis.destroy();
		};
	}, []);

	const toggleTheme = () => {
		setTheme((currentTheme) =>
			currentTheme === "dark" ? "light" : "dark"
		);
	};

	return (
		<LazyMotion features={domAnimation}>
			<CustomCursor />
			{showIntro && (
				<m.div
					className={`intro-screen ${
						isIntroClosing ? "intro-screen--exit" : ""
					}`}
					aria-live="polite"
					initial={{ opacity: 1 }}
					animate={{ opacity: isIntroClosing ? 0 : 1 }}
					transition={{ duration: 0.75, ease: "easeOut" }}
				>
					<div className="intro-screen__content">
						<m.p
							className="intro-screen__eyebrow"
							initial={{ opacity: 0, y: 18, filter: "blur(8px)" }}
							animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
							transition={{ duration: 0.7 }}
						>
							Personal Portfolio
						</m.p>
						<p className="intro-screen__title" aria-hidden="true">
							<span className="intro-screen__title-text">
								{typedName}
							</span>
						</p>
						<m.p
							className="intro-screen__subtitle"
							initial={{ opacity: 0, y: 16 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: 2.2 }}
						>
							FULLSTACK DEVELOPER
						</m.p>
					</div>
				</m.div>
			)}

			<div
				className={`app-shell ${
					showIntro
						? isIntroClosing
							? "app-shell--revealing"
							: "app-shell--hidden"
						: "app-shell--ready"
				}`}
			>
				<Header theme={theme} onToggleTheme={toggleTheme} />
				<main className="main">
					<Home />
					<About />
					<Skills />
					<Services />
					<Qualification />
					<Work />
					<Contact />
				</main>
				<Footer />
				<ScrollUp />
			</div>
		</LazyMotion>
	);
}
