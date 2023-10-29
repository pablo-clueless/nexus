import { GoogleLogo } from "@phosphor-icons/react"
import { Link } from "react-router-dom"
import { useFormik } from "formik"

import { Button, Input } from "components"

const initialValues = {
	email: "",
	password: "",
}

const Signin = () => {
	const { errors, handleChange, handleSubmit } = useFormik({
		initialValues,
		onSubmit: (data) => console.log(data),
	})

	return (
		<div className="flex h-screen w-full items-center">
			<div className="h-full w-2/3 bg-gray-300"></div>
			<div className="grid h-full w-1/3 place-items-center bg-light">
				<div className="flex w-full flex-col items-center">
					<Link to="/" className="text-2xl font-bold">
						Nexus
					</Link>
					<div className="mb-10 mt-5 text-center">
						<p className="text-4xl font-light text-primary">Welcome back</p>
						<p className="text-xs font-medium">Please enter your details</p>
					</div>
					<form onSubmit={handleSubmit} className="flex w-full flex-col gap-4 px-10">
						<Input
							element="input"
							type="email"
							name="email"
							placeholder="Email"
							label="Email"
							onChange={handleChange}
							error={errors.email}
						/>
						<Input
							element="input"
							type="password"
							name="password"
							placeholder="Password"
							label="Password"
							onChange={handleChange}
							error={errors.password}
						/>
						<div className="flex w-full items-center justify-between text-xs text-gray-500">
							<div className="">Remember me</div>
							<Link to="/" className="underline">
								Forgot password?
							</Link>
						</div>
						<Button variant="filled" type="submit" style={{ margin: "16px 0" }}>
							Signin
						</Button>
					</form>
					<Button variant="filled" type="button" style={{ margin: "60px 0" }}>
						<GoogleLogo /> Signin with Google
					</Button>
					<p className="text-xs text-gray-500">
						Don't have an account?
						<Link to="/signup" className="ml-1 underline">
							Signup now.
						</Link>
					</p>
				</div>
			</div>
		</div>
	)
}

export default Signin
