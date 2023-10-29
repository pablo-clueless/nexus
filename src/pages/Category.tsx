import { useNavigate, useParams } from "react-router-dom"
import { ArrowLeft } from "@phosphor-icons/react"
import { useState } from "react"

import { Card, Loader, Pagination } from "components"
import data from "mock.json"
import styles from "styles"

const PAGE_SIZE = 10

const Category = () => {
	const [page, setPage] = useState(1)
	const navigate = useNavigate()
	const { id } = useParams()

	const apis = data.filter(
		(api) => api.category.toLowerCase() === id?.toLowerCase()
	)

	const handlePagination = () => {
		if (apis.length > PAGE_SIZE) {
			return (
				<Pagination
					current={page}
					onPageChange={onPageChange}
					perPage={PAGE_SIZE}
					total={apis?.length}
				/>
			)
		} else return null
	}

	const onPageChange = (value: number) => setPage(value)

	const renderData = () => {
		const startIndex = (page - 1) * PAGE_SIZE
		const endIndex = startIndex + PAGE_SIZE
		return apis?.slice(startIndex, endIndex)
	}

	if (!apis) return <Loader />

	return (
		<div className="flex w-full flex-col">
			<div className="mb-10 flex w-full items-center justify-between">
				<button
					onClick={() => navigate(-1)}
					className="rounded bg-gray-200 px-4 py-2">
					<ArrowLeft />
				</button>
			</div>
			<p className={styles.header}>{id}</p>
			<div className="mt-10 grid w-full grid-cols-1 gap-5 lg:grid-cols-5">
				{renderData().map((api) => (
					<Card key={api.id} {...api} />
				))}
			</div>
			{handlePagination()}
		</div>
	)
}

export default Category
