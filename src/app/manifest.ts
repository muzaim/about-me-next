import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
	return {
		name: "Syafri Surya Portfolio",
		short_name: "Surya",
		description:
			"Portfolio of Syafri Surya, fullstack developer for web, mobile, and UI/UX experiences.",
		start_url: "/",
		display: "standalone",
		background_color: "#ffffff",
		theme_color: "#0b0f19",
		icons: [
			{
				src: "/hand.svg",
				sizes: "any",
				type: "image/svg+xml",
			},
			{
				src: "/logo192.png",
				sizes: "192x192",
				type: "image/png",
			},
			{
				src: "/logo512.png",
				sizes: "512x512",
				type: "image/png",
			},
		],
	};
}
