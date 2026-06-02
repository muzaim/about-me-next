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
			"Built a Market Risk Profiling System that gives analysts a centralized view of portfolio exposure, making it easier to identify potential risks without relying on scattered reports and spreadsheets.",
			"Worked on risk scoring and volatility calculations to help teams evaluate portfolio performance through a more consistent and data-driven approach.",
			"Implemented automated reporting features that significantly reduced repetitive manual work during risk assessment and review processes.",
			"Collaborated with risk management stakeholders to translate business requirements into workflows that could be easily adopted by analysts.",
			"Designed and maintained backend services responsible for processing portfolio data, ensuring reports remained accurate and up to date.",
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
			"Built the frontend for a Risk Register platform used to manage risk events, mitigation plans, and monitoring activities across different business units.",
			"Created intuitive assessment flows that allowed users to evaluate risks based on impact, likelihood, and overall risk levels.",
			"Worked closely with business users to simplify complex risk management processes into a more structured and user-friendly experience.",
			"Added visual indicators and categorization features that helped teams quickly identify high-priority risks and ongoing mitigation efforts.",
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
			"Built the frontend for a Loan Origination System that supports the entire loan submission and evaluation process from application to approval.",
			"Implemented eligibility checks and credit limit calculations based on financial indicators and predefined risk parameters.",
			"Created dashboards and tracking features that gave users better visibility into application status and approval progress.",
			"Worked closely with backend teams to integrate multiple services and ensure data remained synchronized throughout the workflow.",
			"Helped streamline credit evaluation activities by reducing manual verification steps and improving information accessibility.",
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
			"Built a Procurement System that centralized procurement activities, replacing manual processes with a structured digital workflow.",
			"Implemented purchase request submissions, approval chains, and vendor management features to support day-to-day procurement operations.",
			"Improved application performance by optimizing frontend rendering and reducing unnecessary data requests across frequently used modules.",
			"Refactored reusable components and shared functionality to make future feature development faster and easier to maintain.",
			"Helped procurement teams gain better visibility into request statuses, approvals, and vendor-related activities through a single platform.",
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
			"Built and maintained Redberries, an internal recruitment platform used to manage job postings, candidate applications, and recruitment activities within Astra Credit Companies.",
			"Worked on backend development, database design, and system integrations that supported recruitment workflows across multiple teams.",
			"Added features that simplified candidate tracking and reduced the need for manual coordination between recruiters and hiring managers.",
			"Collaborated with stakeholders to improve recruitment processes and translate operational needs into practical system features.",
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
			"Built an internal platform used to manage company policies, governance documents, and operational procedures in a more organized and accessible way.",
			"Developed document tracking, version history, and approval workflows that helped teams manage policy changes more efficiently.",
			"Helped centralize documents that were previously scattered across different storage locations and communication channels.",
			"Improved usability and performance across key modules, making the platform easier to adopt for day-to-day operational activities.",
			"Supported governance and compliance efforts by providing better visibility into document ownership, updates, and approval statuses.",
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
