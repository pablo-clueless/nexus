import { Link, useNavigate } from "react-router-dom"
import { KeyboardEvent } from "react"

import type { ProductProps } from "interfaces"
import { Card, Input } from "components"
import { randomizeArray } from "utils"
import data from "mock.json"
import styles from "styles"

const Home = () => {
	const recommended = randomizeArray<ProductProps>(data)
	const popular = data
		.filter((api) => api.popularity > 7)
		.sort((a, b) => b.popularity - a.popularity)

	const navigate = useNavigate()

	const handleSearch = (e: KeyboardEvent<HTMLInputElement>) => {
		if (e.key === "Enter") {
			const query = e.currentTarget.value
			navigate(`/api?query=${query}`)
		}
	}

	return (
		<div className="flex w-full flex-col">
			<section className="flex h-[60vh] w-full flex-col items-center justify-center">
				<h1 className="mb-3 text-center text-5xl font-semibold text-primary">
					The largest API marketplace in Nigeria
				</h1>
				<p className="mb-5 text-xl">Get the best value for your money</p>
				<Input
					element="input"
					type="text"
					placeholder="Search APIs..."
					onKeyDown={handleSearch}
				/>
			</section>
			<section className="mt-10 flex w-full flex-col">
				<div className="flex w-full items-center justify-between">
					<p className={styles.heading}>Popular APIs</p>
					<Link to="/api" className={styles.heading}>
						View all
					</Link>
				</div>
				<p className={styles.subheading}>
					APIs that are popular and frequently used on Nexus
				</p>
				<div className="mt-5 grid w-full grid-cols-2 gap-5 lg:grid-cols-5">
					{popular?.slice(0, 5).map((api) => <Card key={api.id} {...api} />)}
				</div>
			</section>
			<section className="mt-10 flex w-full flex-col">
				<div className="flex w-full items-center justify-between">
					<p className={styles.heading}>Recommended APIs</p>
					<Link to="/api" className={styles.heading}>
						View all
					</Link>
				</div>
				<p className={styles.subheading}>
					APIs that are popular and frequently used on Nexus
				</p>
				<div className="mt-5 grid w-full grid-cols-2 gap-5 lg:grid-cols-5">
					{recommended?.slice(0, 5).map((api) => <Card key={api.id} {...api} />)}
				</div>
			</section>
		</div>
	)
}

export default Home
