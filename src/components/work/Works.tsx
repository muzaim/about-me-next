"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { projectsData, projectNav, type ProjectCategory, type ProjectItem } from "./Data";
import WorksItems from "./WorksItems";

const Works = () => {
	const [activeCategory, setActiveCategory] = useState<ProjectCategory>(
		projectNav[0].category
	);
	const [active, setActive] = useState(0);
	const [isSwitching, setIsSwitching] = useState(false);
	const switchTimer = useRef<number | null>(null);
	const revealTimer = useRef<number | null>(null);

	const projects = useMemo<ProjectItem[]>(() => {
		return projectsData.filter((project) => project.category === activeCategory);
	}, [activeCategory]);

	useEffect(() => {
		return () => {
			if (switchTimer.current) window.clearTimeout(switchTimer.current);
			if (revealTimer.current) window.clearTimeout(revealTimer.current);
		};
	}, []);

	useEffect(() => {
		const animationFrameId = window.requestAnimationFrame(() => {
			document
				.querySelectorAll<HTMLElement>(".work__container [data-aos]")
				.forEach((element) => {
					const delay = Number(element.getAttribute("data-aos-delay") ?? 0);

					window.setTimeout(() => {
						element.classList.add("aos-animate");
					}, delay);
				});
		});

		return () => window.cancelAnimationFrame(animationFrameId);
	}, [projects]);

	const handleClick = (category: ProjectCategory, index: number) => {
		if (category === activeCategory || isSwitching) {
			return;
		}

		setActive(index);
		setIsSwitching(true);

		switchTimer.current = window.setTimeout(() => {
			setActiveCategory(category);

			revealTimer.current = window.setTimeout(() => {
				setIsSwitching(false);
			}, 80);
		}, 180);
	};

	return (
		<div>
			<div className="work__filters">
				{projectNav.map((item, index) => {
					return (
						<span
							onClick={() => {
								handleClick(item.category, index);
							}}
							className={`${
								active === index ? "active-work" : ""
							} work__item `}
							key={item.category}
						>
							{item.name}
						</span>
					);
				})}
			</div>

			<div
				className={`work__container ${
					activeCategory === "professional"
						? "work__container--professional"
						: ""
				} ${
					isSwitching ? "work__container--switching" : ""
				} container grid`}
			>
				{projects.map((item, index) => {
					return (
						<WorksItems item={item} index={index} key={item.id} />
					);
				})}
			</div>
		</div>
	);
};

export default Works;
