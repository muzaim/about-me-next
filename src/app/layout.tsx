import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";
import "@/components/header/header.css";
import "@/components/home/home.css";
import "@/components/about/about.css";
import "@/components/skills/skill.css";
import "@/components/services/service.css";
import "@/components/qualification/qualification.css";
import "@/components/work/work.css";
import "@/components/contact/contact.css";
import "@/components/footer/footer.css";
import "@/components/scrollup/scrollup.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://syafrisurya.com";
const title = "Syafri Surya | Fullstack Developer";
const description =
	"Portfolio of Syafri Surya, a fullstack developer building modern web and mobile experiences with React, Next.js, Vue, Golang, Laravel, and thoughtful UI/UX.";

export const metadata: Metadata = {
	metadataBase: new URL(siteUrl),
	title,
	description,
	applicationName: "Syafri Surya Portfolio",
	authors: [{ name: "Syafri Surya", url: siteUrl }],
	creator: "Syafri Surya",
	publisher: "Syafri Surya",
	alternates: {
		canonical: "/",
	},
	keywords: [
		"Syafri Surya",
		"Fullstack Developer",
		"Frontend Developer",
		"Next.js Developer",
		"React Developer",
		"Vue Developer",
		"Golang Developer",
		"Portfolio",
	],
	openGraph: {
		type: "website",
		url: "/",
		title,
		description,
		siteName: "Syafri Surya Portfolio",
		images: [
			{
				url: "/assets/about1.jpg",
				width: 1200,
				height: 630,
				alt: "Syafri Surya portfolio portrait",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title,
		description,
		images: ["/assets/about1.jpg"],
	},
	icons: {
		icon: "/hand.svg",
		apple: "/hand.svg",
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-image-preview": "large",
			"max-snippet": -1,
			"max-video-preview": -1,
		},
	},
};

export const viewport: Viewport = {
	width: "device-width",
	initialScale: 1,
	themeColor: [
		{ media: "(prefers-color-scheme: light)", color: "#fafafa" },
		{ media: "(prefers-color-scheme: dark)", color: "#0b0f19" },
	],
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<head>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link
					rel="preconnect"
					href="https://fonts.gstatic.com"
					crossOrigin="anonymous"
				/>
				<link
					href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap"
					rel="stylesheet"
				/>
				<link
					rel="preconnect"
					href="https://unpkg.com"
					crossOrigin="anonymous"
				/>
				<link
					rel="stylesheet"
					href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
				/>
				<link
					rel="stylesheet"
					href="https://unicons.iconscout.com/release/v4.0.0/css/line.css"
				/>
			</head>
			<body>
				{children}
				<Script
					id="portfolio-structured-data"
					type="application/ld+json"
				>
					{JSON.stringify({
						"@context": "https://schema.org",
						"@type": "Person",
						name: "Syafri Surya",
						url: siteUrl,
						jobTitle: "Fullstack Developer",
						email: "mailto:muzaimsurya16@gmail.com",
						telephone: "+62-822-5778-7559",
						sameAs: [
							"https://github.com/muzaim",
							"https://www.linkedin.com/in/syafri-surya-574369207/",
							"https://www.upwork.com/freelancers/~01efa129667ae9e3f3",
						],
						knowsAbout: [
							"Next.js",
							"React",
							"Vue.js",
							"Golang",
							"Laravel",
							"UI/UX Design",
						],
					})}
				</Script>
			</body>
		</html>
	);
}
