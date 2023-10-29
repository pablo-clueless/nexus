import React from "react"

const AddProduct = React.lazy(() => import("./AddProduct"))
const Category = React.lazy(() => import("./Category"))
const Docs = React.lazy(() => import("./Docs"))
const ForgotPassword = React.lazy(() => import("./ForgotPassword"))
const Home = React.lazy(() => import("./Home"))
const Pricing = React.lazy(() => import("./Pricing"))
const Product = React.lazy(() => import("./Product"))
const Resources = React.lazy(() => import("./Resources"))
const Products = React.lazy(() => import("./Products"))
const Profile = React.lazy(() => import("./Profile"))
const Signin = React.lazy(() => import("./Signin"))
const Signup = React.lazy(() => import("./Signup"))
const User = React.lazy(() => import("./User"))

export {
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
}
