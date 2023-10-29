import { useNavigate, useParams } from "react-router-dom"
import { ArrowLeft } from "@phosphor-icons/react"

import { Loader } from "components"
import data from "mock.json"
import styles from "styles"

const User = () => {
	const navigate = useNavigate()
	const { id } = useParams()

	const api = data.find((api) => api.created_by.id === id)
	const user = api?.created_by

	if (!user) return <Loader />

	return (
		<div className="flex w-full flex-col">
			<div className="mb-10 flex w-full items-center justify-between">
				<button
					onClick={() => navigate(-1)}
					className="rounded bg-gray-200 px-4 py-2">
					<ArrowLeft />
				</button>
			</div>
			<div className="w-full">
				<div className="flex items-center gap-4">
					<img src={user.image} alt={user.name} className={styles.avatar} />
					<div className="flex flex-col">
						<p className="text-2xl font-light">{user.name}</p>
						<p className="text-sm font-medium">{user.email}</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default User
