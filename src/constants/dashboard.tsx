import {
	Code,
	CreditCard,
	Gear,
	House,
	Tag,
	Usb,
	Users,
} from "@phosphor-icons/react"

export const navigation = [
	{ label: "", list: [{ icon: <House />, name: "home", to: "/dashboard" }] },
	{
		label: "",
		list: [
			{ icon: <Tag />, name: "tickets", to: "/dashboard" },
			{ icon: <Code />, name: "apis", to: "/dashboard" },
		],
	},
	{
		label: "",
		list: [
			{ icon: <Usb />, name: "integrations", to: "/dashboard" },
			{ icon: <CreditCard />, name: "billing", to: "/dashboard" },
			{ icon: <Users />, name: "organization", to: "/dashboard" },
			{ icon: <Gear />, name: "settings", to: "/dashboard" },
		],
	},
]
