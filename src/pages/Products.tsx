import { useSearchParams } from "react-router-dom"
import { useEffect, useState } from "react"

import { Card, Input, Pagination } from "components"
import { ProductProps } from "interfaces"
import { categories } from "constants"
import data from "mock.json"

const PAGE_SIZE = 10

const Products = () => {
	const [filtered, setFiltered] = useState<ProductProps[]>(data)
	const [searchParams, setSearchParams] = useSearchParams()
	const [page, setPage] = useState(1)

	const filter = searchParams.get("filter")
	const query = searchParams.get("query")

	const handlePagination = () => {
		if (filtered.length > PAGE_SIZE) {
			return (
				<Pagination
					current={page}
					onPageChange={onPageChange}
					perPage={PAGE_SIZE}
					total={filtered.length}
				/>
			)
		} else return null
	}

	const onPageChange = (value: number) => setPage(value)
	const onFilterChange = (value: string) => setSearchParams({ filter: value })
	const onQueryChange = (value: string) => setSearchParams({ query: value })

	const renderData = () => {
		const startIndex = (page - 1) * PAGE_SIZE
		const endIndex = startIndex + PAGE_SIZE
		return filtered.slice(startIndex, endIndex)
	}

	useEffect(() => {
		if (query) {
			const filteredData = data.filter((api) =>
				api.name.toLowerCase().includes(query.toLowerCase())
			)
			setFiltered(filteredData)
		} else if (filter) {
			const filteredData = data.filter(
				(api) => api.category.toLowerCase() === filter.toLowerCase()
			)
			setFiltered(filteredData)
		} else {
			setFiltered(data)
		}
	}, [filter, query])

	return (
		<div className="flex w-full flex-col">
			<div className="flex w-full flex-col items-center justify-between gap-4 lg:flex-row">
				<Input
					element="input"
					type="text"
					placeholder="Search APIs..."
					value={query || ""}
					onChange={(e) => onQueryChange(e.target.value)}
				/>
				<Input
					element="select"
					value={filter || ""}
					onChange={(e) => onFilterChange(e.target.value)}>
					{categories.map((category) => (
						<option key={category.name} value={category.value}>
							{category.name}
						</option>
					))}
				</Input>
			</div>
			<div className="mt-10 grid w-full grid-cols-2 gap-5 lg:grid-cols-5">
				{renderData().map((api) => (
					<Card key={api.id} {...api} />
				))}
			</div>
			{handlePagination()}
		</div>
	)
}

export default Products
