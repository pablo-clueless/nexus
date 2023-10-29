export interface UserProps {
	id: string
	name: string
	email: string
	image: string
}

export interface ProductProps {
	id: string
	name: string
	description: string
	base_url: string
	category: string
	logo: string
	website: string
	visibility: string
	popularity: number
	service_level: number
	created_by: UserProps
	created_on: Date | string
	pricing: PricingProps[]
	version: number
}

export interface PricingProps {
	id: string
	name: string
	description: string
	price: number
	interval: string
}
