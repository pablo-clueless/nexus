import {
	DiscordLogo,
	FacebookLogo,
	GithubLogo,
	LinkedinLogo,
	TwitterLogo,
} from "@phosphor-icons/react"

export const navLinks = [
	{ name: "docs", to: "/docs" },
	{ name: "resources", to: "/resources" },
	{ name: "create API", to: "/api/new" },
]

export const footerLinks = [
	{
		label: "product",
		links: [
			{ name: "overview", to: "/" },
			{ name: "features", to: "/" },
			{ name: "solutions", to: "/" },
			{ name: "pricing", to: "/" },
			{ name: "releases", to: "/" },
		],
	},
	{
		label: "company",
		links: [
			{ name: "about", to: "/" },
			{ name: "careers", to: "/" },
			{ name: "press", to: "/" },
			{ name: "news", to: "/" },
			{ name: "media kit", to: "/" },
			{ name: "contact", to: "/" },
		],
	},
	{
		label: "resources",
		links: [
			{ name: "blog", to: "/" },
			{ name: "newsletter", to: "/" },
			{ name: "events", to: "/" },
			{ name: "help center", to: "/" },
			{ name: "tutorials", to: "/" },
			{ name: "support", to: "/" },
		],
	},
	{
		label: "legal",
		links: [
			{ name: "terms", to: "/" },
			{ name: "privacy", to: "/" },
			{ name: "cookies", to: "/" },
			{ name: "license", to: "/" },
		],
	},
]

export const community = [
	{ icon: <TwitterLogo />, url: "" },
	{ icon: <GithubLogo />, url: "" },
	{ icon: <LinkedinLogo />, url: "" },
	{ icon: <DiscordLogo />, url: "" },
	{ icon: <FacebookLogo />, url: "" },
]

export const tabList = [
	{ name: "overview" },
	{ name: "endpoints" },
	{ name: "tutorials" },
	{ name: "discussion" },
	{ name: "pricing" },
]
