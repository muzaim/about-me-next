import type { MetadataRoute } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://syafrisurya.com";
const lastModified =
	process.env.NEXT_PUBLIC_SITE_LAST_MODIFIED ?? "2026-05-23";

export default function sitemap(): MetadataRoute.Sitemap {
	return [
		{
			url: siteUrl,
			lastModified: new Date(lastModified),
			changeFrequency: "monthly",
			priority: 1,
		},
	];
}
