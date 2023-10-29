import { ArrowLeft } from "@phosphor-icons/react"
import { useNavigate } from "react-router-dom"
import { useFormik } from "formik"

import { Button, Input } from "components"
import { categories } from "constants"

const initialValues = {
	base_url: "",
	name: "",
	description: "",
	category: "",
	website: "",
	visibility: "",
	pricing: [],
	version: 0,
}

const visibility = ["public", "private"]

const AddProduct = () => {
	const navigate = useNavigate()

	const { errors, handleChange, handleSubmit } = useFormik({
		initialValues,
		onSubmit: (data) => console.log(data),
	})

	return (
		<div className="flex w-full flex-col">
			<div className="mb-10 flex w-full items-center justify-between">
				<button
					onClick={() => navigate(-1)}
					className="rounded bg-gray-200 px-4 py-2">
					<ArrowLeft />
				</button>
			</div>
			<div className="flex w-full flex-col items-center">
				<p className="mb-10 text-3xl font-light">Add API</p>
				<form onSubmit={handleSubmit} className="flex w-full flex-col">
					<div className="grid w-full grid-cols-1 gap-x-5 gap-y-4 lg:grid-cols-2">
						<Input
							element="input"
							type="text"
							name="name"
							placeholder="API name"
							label="Name"
							onChange={handleChange}
							error={errors.name}
						/>
						<Input
							element="input"
							type="url"
							name="base_url"
							placeholder="https://example.com/api/v1"
							label="Base URL"
							onChange={handleChange}
							error={errors.base_url}
						/>
						<Input
							element="select"
							name="category"
							label="Category"
							onChange={handleChange}
							error={errors.category}>
							{categories.map((category, index) => (
								<option key={index} value={category.value}>
									{category.name}
								</option>
							))}
						</Input>
						<Input
							element="input"
							type="url"
							name="website"
							placeholder="https://example.com"
							label="Website"
							onChange={handleChange}
							error={errors.website}
						/>
						<Input
							element="select"
							name="visibility"
							label="Visibility"
							onChange={handleChange}
							style={{ textTransform: "capitalize" }}
							error={errors.visibility}>
							{visibility.map((item, index) => (
								<option key={index} value={item}>
									{item}
								</option>
							))}
						</Input>
						<Input
							element="input"
							type="text"
							name="version"
							placeholder="1.0"
							label="Version"
							onChange={handleChange}
							error={errors.version}
						/>
						<Input
							element="textarea"
							name="description"
							placeholder="Description"
							label="Description"
							onChange={handleChange}
							error={errors.description}
						/>
					</div>
					<Button variant="filled" type="submit" style={{ margin: "16px 0" }}>
						Procced
					</Button>
				</form>
			</div>
		</div>
	)
}

export default AddProduct
