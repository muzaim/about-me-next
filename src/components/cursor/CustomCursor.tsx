"use client";

import { useEffect, useRef, useState } from "react";

const interactiveSelector =
	'a, button, input, textarea, .button, .theme__toggle, .work__card, .services__content, .about__box, .skills__content, .contact__card, .work__item';

const CustomCursor = () => {
	const dotRef = useRef<HTMLDivElement | null>(null);
	const ringRef = useRef<HTMLDivElement | null>(null);
	const animationFrameRef = useRef<number | null>(null);
	const cursorPosition = useRef({ x: 0, y: 0 });
	const ringPosition = useRef({ x: 0, y: 0 });
	const [enabled, setEnabled] = useState(false);
	const [isPointer, setIsPointer] = useState(false);
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const mediaQuery = window.matchMedia(
			"(hover: hover) and (pointer: fine)"
		);

		const updateEnabled = () => {
			setEnabled(mediaQuery.matches);
		};

		updateEnabled();
		mediaQuery.addEventListener("change", updateEnabled);

		return () => mediaQuery.removeEventListener("change", updateEnabled);
	}, []);

	useEffect(() => {
		if (!enabled) {
			setIsVisible(false);
			setIsPointer(false);
			return undefined;
		}

		const animateRing = () => {
			ringPosition.current.x +=
				(cursorPosition.current.x - ringPosition.current.x) * 0.18;
			ringPosition.current.y +=
				(cursorPosition.current.y - ringPosition.current.y) * 0.18;

			if (ringRef.current) {
				ringRef.current.style.transform = `translate3d(${ringPosition.current.x}px, ${ringPosition.current.y}px, 0)`;
			}

			animationFrameRef.current =
				window.requestAnimationFrame(animateRing);
		};

		const handlePointerMove = (event: PointerEvent) => {
			const { clientX, clientY, target } = event;
			cursorPosition.current = { x: clientX, y: clientY };

			if (!isVisible) {
				ringPosition.current = { x: clientX, y: clientY };
				setIsVisible(true);
			}

			if (dotRef.current) {
				dotRef.current.style.transform = `translate3d(${clientX}px, ${clientY}px, 0)`;
			}

			setIsPointer(
				target instanceof Element && Boolean(target.closest(interactiveSelector))
			);
		};

		const handlePointerLeave = () => {
			setIsVisible(false);
			setIsPointer(false);
		};

		window.addEventListener("pointermove", handlePointerMove);
		window.addEventListener("blur", handlePointerLeave);
		document.addEventListener("mouseleave", handlePointerLeave);

		animationFrameRef.current = window.requestAnimationFrame(animateRing);

		return () => {
			window.removeEventListener("pointermove", handlePointerMove);
			window.removeEventListener("blur", handlePointerLeave);
			document.removeEventListener("mouseleave", handlePointerLeave);
			if (animationFrameRef.current) {
				window.cancelAnimationFrame(animationFrameRef.current);
			}
		};
	}, [enabled, isVisible]);

	if (!enabled) {
		return null;
	}

	return (
		<>
			<div
				ref={ringRef}
				className={`custom-cursor custom-cursor--ring ${
					isVisible ? "is-visible" : ""
				} ${isPointer ? "is-pointer" : ""}`}
				aria-hidden="true"
			/>
			<div
				ref={dotRef}
				className={`custom-cursor custom-cursor--dot ${
					isVisible ? "is-visible" : ""
				} ${isPointer ? "is-pointer" : ""}`}
				aria-hidden="true"
			/>
		</>
	);
};

export default CustomCursor;
