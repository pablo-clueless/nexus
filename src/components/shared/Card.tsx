import { ChartLineUp, Eye } from "@phosphor-icons/react"
import { Link } from "react-router-dom"

import type { ProductProps } from "interfaces"

const Card = (props: ProductProps) => {
	return (
		<Link
			to={`/api/${props.id}`}
			className="border-dark aspect-square w-full rounded border py-4 transition-all duration-300 hover:shadow-2xl">
			<div className="flex w-full flex-col px-4">
				<img
					src={props.logo}
					alt={props.name}
					className="mb-3 aspect-square w-16 rounded"
				/>
				<p className="mb-1 w-fit text-lg">{props.name}</p>
				<p className="text-xs">For {props.created_by.name}</p>
			</div>
			<hr className="bg-dark my-1 h-[1px] w-full" />
			<div className="flex w-full flex-col px-4 text-xs">
				<div className="">
					<p className="uppercase">{props.category}</p>
				</div>
				<div className="mt-2 flex w-full items-center justify-between capitalize">
					<p className="flex items-center gap-1">
						<ChartLineUp />
						{props.popularity}/10
					</p>
					<p className="flex items-center gap-1">
						<Eye />
						{props.visibility}
					</p>
				</div>
				<p className="font-semibold">v{props.version}</p>
			</div>
		</Link>
	)
}

export default Card
