import { Link, useNavigate, useParams } from "react-router-dom"
import { useState } from "react"
import {
	ArrowLeft,
	ChartLineUp,
	ShieldCheck,
	Timer,
} from "@phosphor-icons/react"

import { tabList } from "constants"
import data from "mock.json"
import styles from "styles"
import {
	Discussion,
	Endpoints,
	Loader,
	Overview,
	Pricing,
	TabPanel,
	Tutorials,
} from "components"

const Product = () => {
	const [tab, setTab] = useState(0)
	const navigate = useNavigate()
	const { id } = useParams()

	const api = data.find((api) => api.id === id)

	if (!api) return <Loader />

	return (
		<div className="flex w-full flex-col">
			<div className="mb-10 flex w-full items-center justify-between">
				<button
					onClick={() => navigate(-1)}
					className="rounded bg-gray-200 px-4 py-2">
					<ArrowLeft />
				</button>
			</div>
			<div className="flex items-center justify-between border-y py-5">
				<div className="flex flex-1 items-center gap-4">
					<img src={api.logo} alt={api.name} className={styles.image} />
					<div className="flex flex-col">
						<p className="mb-4 text-4xl font-light">{api.name}</p>
						<div className="flex items-center gap-5 text-sm capitalize">
							<p>
								published by:{" "}
								<Link
									to={`/user/${api.created_by.id}`}
									className="font-semibold underline">
									{api.created_by.name}
								</Link>
							</p>
							<p>
								created:{" "}
								<span className="font-semibold">
									{new Date(api.created_on).toLocaleDateString()}
								</span>
							</p>
							<p>
								category:{" "}
								<Link
									to={`/category/${api.category}`}
									className="font-semibold underline">
									{api.category}
								</Link>
							</p>
						</div>
					</div>
				</div>
				<div className="flex flex-1 items-center gap-4">
					<div className="flex flex-1 flex-col items-center">
						<p className="flex items-center gap-1 text-sm text-gray-500">
							<ChartLineUp />
							Popularity
						</p>
						<p className="text-3xl font-medium">
							{api.popularity}
							<span className="text-base">/10</span>
						</p>
					</div>
					<div className="flex flex-1 flex-col items-center">
						<p className="flex items-center gap-1 text-sm text-gray-500">
							<Timer />
							Latency
						</p>
						<p className="text-3xl font-medium">
							{api.popularity * api.version * 10}
							<span className="text-base">ms</span>
						</p>
					</div>
					<div className="flex flex-1 flex-col items-center">
						<p className="flex items-center gap-1 text-sm text-gray-500">
							<ShieldCheck />
							Service Level
						</p>
						<p className="text-3xl font-medium">
							{api.service_level}
							<span className="text-base">%</span>
						</p>
					</div>
				</div>
			</div>
			<div className="flex w-full items-center gap-5 border-b py-5">
				{tabList.map((item, index) => (
					<button
						key={index}
						className={`rounded px-5 py-2 text-sm capitalize ${
							index === tab ? "bg-primary text-white" : "bg-gray-200"
						}`}
						onClick={() => setTab(index)}>
						{item.name}
					</button>
				))}
			</div>
			<div className="w-full py-10">
				<TabPanel index={0} value={tab}>
					<Overview data={api.description} />
				</TabPanel>
				<TabPanel index={1} value={tab}>
					<Endpoints />
				</TabPanel>
				<TabPanel index={2} value={tab}>
					<Tutorials />
				</TabPanel>
				<TabPanel index={3} value={tab}>
					<Discussion />
				</TabPanel>
				<TabPanel index={4} value={tab}>
					<Pricing data={api.pricing} />
				</TabPanel>
			</div>
		</div>
	)
}

export default Product
