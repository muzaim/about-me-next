export type ProjectCategory = "professional" | "learning";

export type LearningProjectItem = {
	id: number;
	image: string;
	title: string;
	category: "learning";
	link?: string;
	tools: string;
	desc: string;
};

export type ProfessionalProjectItem = {
	id: number;
	category: "professional";
	company: string;
	companyInitial: string;
	logo?: string;
	logoVariant?: "wide" | "tall";
	projectName: string;
	duration: string;
	tools: string;
	responsibilities: string[];
};

export type ProjectItem = LearningProjectItem | ProfessionalProjectItem;

export const projectsData: ProjectItem[] = [
	{
		id: 9,
		image: "/assets/portf/img13.png",
		title: "ElderCare",
		category: "learning",
		link: "https://spyralize-submission.vercel.app/",
		tools: "ReactJS",
		desc: "A web platform dedicated to supporting and raising awareness for elderly care and well-being.",
	},
	{
		id: 1,
		image: "/assets/portf/img12.png",
		title: "Workpath",
		category: "learning",
		link: "https://workpath-fe.vercel.app/",
		tools: "ReactJS",
		desc: "A job search platform that helps users discover and apply for career opportunities.",
	},
	{
		id: 2,
		image: "/assets/work/travlog.png",
		title: "Travel Web",
		category: "learning",
		link: "https://travlog-pi.vercel.app/",
		tools: "VueJS",
		desc: "A modern travel website for exploring destinations, finding attractions, and planning trips.",
	},
	{
		id: 6,
		image: "/assets/portf/mag1.png",
		title: "Soerdja Magazine",
		category: "learning",
		link: "https://soerdja-magazine-pagb.vercel.app/",
		tools: "NextJS",
		desc: "An online magazine platform for articles and digital media content.",
	},
	{
		id: 8,
		image: "/assets/portf/ollama.png",
		title: "OrganAIze",
		category: "learning",
		tools: "NextJS, Ollama",
		desc: "An AI-powered task organizer that helps manage activities intelligently.",
	},
	{
		id: 3,
		image: "/assets/portf/nadia.png",
		title: "Sweet Dashboard",
		category: "learning",
		link: "https://nadia-dashboard.vercel.app/",
		tools: "ReactJS",
		desc: "An interactive admin dashboard with charts and analytics features.",
	},
	{
		id: 4,
		image: "/assets/work/skilline.png",
		title: "E-Learning Web",
		category: "learning",
		link: "https://skilline-zeta.vercel.app/",
		tools: "VueJS",
		desc: "An e-learning platform for courses, students, and online learning.",
	},
	{
		id: 10,
		image: "/assets/work/crypton.png",
		title: "Crypto Sphere",
		category: "learning",
		link: "https://crypto-sphere-murex.vercel.app/",
		tools: "ReactJS",
		desc: "A modern web platform for tracking cryptocurrency markets, prices, and trends in real-time.",
	},
	{
		id: 11,
		category: "professional",
		company: "PT. Sarana Multigriya Finansial (Persero)",
		companyInitial: "SMF",
		logo: "/assets/logo/smf.svg",
		logoVariant: "wide",
		projectName: "SMF - Market Risk Analyst",
		duration: "Jan 2026 - Present",
		tools: "Golang, NextJS",
		responsibilities: [
			"Built a Market Risk Profiling System for SMF, centralizing portfolio exposure analysis and eliminating manual risk assessment processes.",
			"Implemented backend logic for risk scoring, volatility analysis, and automated reporting to enable faster and more accurate decision making.",
			"Enhanced efficiency, compliance, and transparency by delivering a scalable and secure risk management platform.",
		],
	},
	{
		id: 12,
		category: "professional",
		company: "PT. Sarana Multigriya Finansial (Persero)",
		companyInitial: "SMF",
		logo: "/assets/logo/smf.svg",
		logoVariant: "wide",
		projectName: "SMF - Risk Register",
		duration: "Dec 2024 - Aug 2025",
		tools: "Golang, VueJS",
		responsibilities: [
			"Built the frontend for a Risk Register System, centralizing risk assessment and monitoring processes across multiple risk events.",
			"Designed interactive risk scoring, impact-likelihood evaluation, and visual categorization features to improve usability and decision clarity.",
			"Improved risk visibility and mitigation tracking by enabling RCSA teams to efficiently manage and monitor risk actions within a single platform.",
		],
	},
	{
		id: 13,
		category: "professional",
		company: "PT. Sarana Multigriya Finansial (Persero)",
		companyInitial: "SMF",
		logo: "/assets/logo/smf.svg",
		logoVariant: "wide",
		projectName: "SMF - Loan Origination System",
		duration: "Aug 2024 - May 2025",
		tools: "Golang, NextJS",
		responsibilities: [
			"Built the frontend for a Loan Origination System, centralizing loan application and credit evaluation processes based on comprehensive risk parameters.",
			"Implemented features for eligibility assessment and automated credit limit calculation using financial data and risk scoring models.",
			"Enhanced decision-making and user transparency through interactive workflows and real-time tracking dashboards, ensuring seamless integration with backend services.",
		],
	},
	{
		id: 14,
		category: "professional",
		company: "PT. Sarana Multigriya Finansial (Persero)",
		companyInitial: "SMF",
		logo: "/assets/logo/smf.svg",
		logoVariant: "wide",
		projectName: "SMF - I Procurement",
		duration: "March 2022 - Jan 2023",
		tools: "Golang, VueJS",
		responsibilities: [
			"Built a Procurement System to centralize and digitalize procurement processes, eliminating manual workflows from requisition to vendor selection.",
			"Implemented key functionalities for purchase requests, approval flows, and vendor management integrated with budgeting systems.",
			"Enhanced system performance and maintainability by optimizing frontend rendering, introducing efficient caching, and refactoring reusable components.",
		],
	},
	{
		id: 15,
		category: "professional",
		company: "Astra Credit Companies",
		companyInitial: "ACC",
		logo: "/assets/logo/acc.png",
		logoVariant: "tall",
		projectName: "ACC - Redberries",
		duration: "July 2021 - Feb 2022",
		tools: "Laravel",
		responsibilities: [
			"Built and maintained Redberries, a centralized recruitment platform for Astra Credit Companies, streamlining job postings and candidate application processes within a single system.",
			"Designed scalable backend architecture, database structures, and API integrations to ensure reliable and efficient recruitment operations.",
			"Enhanced recruitment efficiency by automating workflows, improving candidate tracking, and reducing manual coordination across teams.",
		],
	},
	{
		id: 16,
		category: "professional",
		company: "Astra Credit Companies",
		companyInitial: "ACC",
		logo: "/assets/logo/acc.png",
		logoVariant: "tall",
		projectName: "ACC - Gasfin",
		duration: "July 2021 - July 2023",
		tools: "Laravel",
		responsibilities: [
			"Developed ACC Gasfin, a centralized internal platform for managing operational policies and governance processes, eliminating fragmented and manual document handling.",
			"Built responsive interfaces for document tracking, version control, and compliance monitoring, improving accessibility and usability.",
			"Enhanced efficiency, consistency, and compliance visibility by delivering a secure, scalable, and performance-optimized system.",
		],
	},
];

export const projectNav: { name: string; category: ProjectCategory }[] = [
	{
		name: "professional work",
		category: "professional",
	},
	{
		name: "personal projects",
		category: "learning",
	},
];
