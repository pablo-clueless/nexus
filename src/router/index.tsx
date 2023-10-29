import { Route, Routes } from "react-router-dom"
import { Suspense } from "react"

import { DashboardLayout, Loader, MainLayout } from "components"
import PrivateRoute from "./PrivateRoute"
import {
	AddProduct,
	Category,
	Docs,
	ForgotPassword,
	Home,
	Pricing,
	Product,
	Products,
	Profile,
	Resources,
	Signin,
	Signup,
	User,
} from "pages"

const Router = () => {
	return (
		<Suspense fallback={<Loader />}>
			<Routes>
				<Route element={<MainLayout />}>
					<Route path="/" element={<Home />} />
					<Route path="/api" element={<Products />} />
					<Route path="/api/:id" element={<Product />} />
					<Route path="/user/:id" element={<User />} />
					<Route path="/category/:id" element={<Category />} />
					<Route path="/docs" element={<Docs />} />
					<Route path="/resources" element={<Resources />} />
					<Route path="/pricing/:id" element={<Pricing />} />
					<Route element={<PrivateRoute />}>
						<Route path="/api/new" element={<AddProduct />} />
					</Route>
				</Route>
				<Route path="/signin" element={<Signin />} />
				<Route path="/signup" element={<Signup />} />
				<Route path="/forgot-password" element={<ForgotPassword />} />
				<Route element={<PrivateRoute />}>
					<Route path="/dashboard" element={<DashboardLayout />}>
						<Route index element={<Profile />} />
					</Route>
				</Route>
			</Routes>
		</Suspense>
	)
}

export default Router
