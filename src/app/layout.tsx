import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "lenis/dist/lenis.css";
import "./globals.css";
import "../components/header/header.css";
import "../components/home/home.css";
import "../components/about/about.css";
import "../components/skills/skill.css";
import "../components/services/service.css";
import "../components/qualification/qualification.css";
import "../components/work/work.css";
import "../components/contact/contact.css";
import "../components/footer/footer.css";
import "../components/scrollup/scrollup.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://syafrisurya.com";
const title =
	"Syafri Surya — Full Stack Engineer | Next.js, React.js, Laravel, NestJS & Golang Developer";
const description =
	"Full Stack Engineer specializing in Next.js, React.js, Laravel, NestJS, and Golang. Building scalable web applications, SaaS platforms, and enterprise solutions.";
const profileImage = "/assets/og.jpg";
const sameAs = [
	"https://github.com/muzaim",
	"https://www.linkedin.com/in/syafri-surya/",
	"https://www.upwork.com/freelancers/~01efa129667ae9e3f3",
];
const skills = [
	"Next.js",
	"React",
	"Vue.js",
	"Golang",
	"Laravel",
	"UI/UX Design",
	"Frontend Development",
	"Backend Development",
];

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
		// Personal Brand
		"Syafri Surya",
		"Syafri Surya Portfolio",
		"Syafri Surya Full Stack Engineer",

		// Main Roles
		"Full Stack Engineer",
		"Full Stack Developer",
		"Fullstack Developer",
		"Software Engineer",
		"Web Developer",
		"Web Application Developer",
		"Product Engineer",

		// Location Based
		"Full Stack Engineer Indonesia",
		"Full Stack Developer Indonesia",
		"Software Engineer Indonesia",
		"Web Developer Indonesia",
		"Freelance Developer Indonesia",

		// Frontend
		"Frontend Engineer",
		"Frontend Developer",
		"React Developer",
		"React.js Developer",
		"Next.js Developer",
		"Vue Developer",
		"Vue.js Developer",
		"JavaScript Developer",
		"TypeScript Developer",
		"Tailwind CSS Developer",

		// Backend
		"Backend Engineer",
		"Backend Developer",
		"Golang Developer",
		"Go Developer",
		"Laravel Developer",
		"PHP Developer",
		"REST API Developer",
		"API Developer",

		// Fullstack Tech
		"Next.js and Golang Developer",
		"Vue.js and Golang Developer",
		"Laravel and Vue Developer",
		"Fullstack JavaScript Developer",
		"Fullstack Golang Developer",

		// Services
		"Custom Web Development",
		"Web Application Development",
		"Frontend Development Services",
		"Backend Development Services",
		"Product Development",
		"SaaS Development",
		"Business Application Development",

		// Portfolio
		"Developer Portfolio",
		"Software Engineer Portfolio",
		"Fullstack Portfolio",
		"Frontend Portfolio",
		"Backend Portfolio",
		"Web Developer Portfolio",

		// Hiring Intent
		"Hire Fullstack Developer",
		"Hire React Developer",
		"Hire Next.js Developer",
		"Hire Golang Developer",
		"Freelance Fullstack Developer",
		"Freelance Software Engineer",
	],
	openGraph: {
		type: "website",
		url: "/",
		title,
		description,
		siteName: "Syafri Surya Portfolio",
		locale: "en_US",
		images: [
			{
				url: profileImage,
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
		creator: "@muzaim",
		images: [profileImage],
	},
	icons: {
		icon: "/hand.svg",
		apple: "/hand.svg",
	},
	verification: {
		google: "_KReqKF8ee-NdEi93vn6VRVJ89JTl33aPpF51qPjHLA",
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
						"@graph": [
							{
								"@type": "Person",
								"@id": `${siteUrl}/#person`,
								name: "Syafri Surya",
								url: siteUrl,
								image: `${siteUrl}${profileImage}`,
								jobTitle: "Full Stack Engineer",
								email: "mailto:muzaimsurya16@gmail.com",
								telephone: "+62-822-5778-7559",
								sameAs,
								knowsAbout: skills,
								worksFor: {
									"@type": "Organization",
									name: "PT. Sarana Multigriya Finansial (Persero)",
								},
							},
							{
								"@type": "WebSite",
								"@id": `${siteUrl}/#website`,
								url: siteUrl,
								name: "Syafri Surya Portfolio",
								description,
								inLanguage: "en",
								publisher: {
									"@id": `${siteUrl}/#person`,
								},
							},
							{
								"@type": "ProfilePage",
								"@id": `${siteUrl}/#profilepage`,
								url: siteUrl,
								name: title,
								description,
								inLanguage: "en",
								isPartOf: {
									"@id": `${siteUrl}/#website`,
								},
								mainEntity: {
									"@id": `${siteUrl}/#person`,
								},
							},
						],
					})}
				</Script>
			</body>
		</html>
	);
}
