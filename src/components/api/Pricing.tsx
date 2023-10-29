import { Link } from "react-router-dom"

import { PricingProps } from "interfaces"
import { currency } from "utils"

interface Props {
	data: PricingProps[]
}

const Pricing = (props: Props) => {
	return (
		<div className="flex h-[500px] w-full items-center justify-center gap-5">
			{props.data.map((pricing) => (
				<Link
					to={`/pricing/${pricing.id}`}
					key={pricing.id}
					className="flex h-full w-[250px] flex-col items-center rounded border border-gray-300 px-5 py-10 transition-all duration-300 hover:border-primary hover:shadow-2xl">
					<p className="text-2xl font-medium capitalize">{pricing.name}</p>
					<p className="mt-10 text-5xl font-light text-primary">
						{currency("USD", pricing.price)}/
						<span className="text-xs">{pricing.interval}</span>
					</p>
					<div className="mt-10 flex flex-col">
						<p className="w-full text-sm font-medium text-gray-500">Features</p>
					</div>
				</Link>
			))}
		</div>
	)
}

export default Pricing
