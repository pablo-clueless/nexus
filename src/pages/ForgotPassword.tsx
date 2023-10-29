import { Link, useNavigate } from "react-router-dom"
import { ArrowLeft } from "@phosphor-icons/react"
import { useFormik } from "formik"

import { Button, Input } from "components"

const ForgotPassword = () => {
	const navigate = useNavigate()
	const { errors, handleChange, handleSubmit } = useFormik({
		initialValues: { email: "" },
		onSubmit: (data) => console.log(data),
	})

	return (
		<div className="flex h-screen w-full items-center">
			<div className="h-full w-0 bg-gray-300 lg:w-2/3"></div>
			<div className="grid h-full w-full place-items-center bg-light lg:w-1/3">
				<div className="flex w-full flex-col items-center">
					<Link to="/" className="text-2xl font-bold">
						Nexus
					</Link>
					<div className="mb-10 mt-5 text-center">
						<p className="text-4xl font-light text-primary">Forgot Password</p>
						<p className="text-xs font-medium">Please enter your registered email</p>
					</div>
					<form onSubmit={handleSubmit} className="flex w-full flex-col gap-8 px-10">
						<Input
							element="input"
							type="email"
							name="email"
							placeholder="Email"
							label="Email"
							onChange={handleChange}
							error={errors.email}
						/>
						<Button variant="filled" type="submit">
							Proceed
						</Button>
					</form>
					<button
						onClick={() => navigate(-1)}
						className="mt-10  flex items-center gap-1 rounded px-4 py-2 text-sm text-gray-500">
						<ArrowLeft /> Back
					</button>
				</div>
			</div>
		</div>
	)
}

export default ForgotPassword
