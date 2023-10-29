import { Route, Routes } from "react-router-dom"
import { Suspense } from "react"

import { Loader, MainLayout } from "components"
import PrivateRoute from "./PrivateRoute"
import {
	AddProduct,
	Category,
	Docs,
	Home,
	Pricing,
	Product,
	Products,
	Resources,
	Signin,
	Signup,
	User,
} from "pages"

const Router = () => {
	return (
		<Suspense fallback={<Loader />}>
			<Routes>
				<Route path="/" element={<MainLayout />}>
					<Route index element={<Home />} />
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
				<Route path="signin" element={<Signin />} />
				<Route path="signup" element={<Signup />} />
			</Routes>
		</Suspense>
	)
}

export default Router
