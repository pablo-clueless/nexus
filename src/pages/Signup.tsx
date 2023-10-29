import { GoogleLogo } from "@phosphor-icons/react"
import { Link } from "react-router-dom"
import { useFormik } from "formik"

import { Button, Input } from "components"

const initialValues = {
	email: "",
	name: "",
	password: "",
}

const Signup = () => {
	const { errors, handleChange, handleSubmit } = useFormik({
		initialValues,
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
						<p className="text-4xl font-light text-primary">Create Account</p>
						<p className="text-xs font-medium">
							Welcome to Nexus, the largest API marketplace in Nigeria
						</p>
					</div>
					<form onSubmit={handleSubmit} className="flex w-full flex-col gap-4 px-10">
						<Input
							element="input"
							type="text"
							name="name"
							placeholder="Name"
							label="Name"
							onChange={handleChange}
							error={errors.name}
						/>
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

						<Button variant="filled" type="submit" style={{ margin: "16px 0" }}>
							Create Account
						</Button>
					</form>
					<Button variant="filled" type="button" style={{ margin: "60px 0" }}>
						<GoogleLogo /> Signin with Google
					</Button>
					<p className="text-xs text-gray-500">
						Have an account already?
						<Link to="/signin" className="ml-1 underline">
							Signin.
						</Link>
					</p>
				</div>
			</div>
		</div>
	)
}

export default Signup
