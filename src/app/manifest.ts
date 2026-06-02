import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
	return {
		name: "Syafri Surya Portfolio",
		short_name: "Surya",
		description:
			"Portfolio of Syafri Surya, Full Stack Engineer for web, mobile, and UI/UX experiences.",
		start_url: "/",
		display: "standalone",
		background_color: "#ffffff",
		theme_color: "#0b0f19",
		icons: [
			{
				src: "/assets/senyum-icon-192.png",
				sizes: "192x192",
				type: "image/png",
			},
			{
				src: "/assets/senyum-icon.png",
				sizes: "512x512",
				type: "image/png",
			},
		],
	};
}
