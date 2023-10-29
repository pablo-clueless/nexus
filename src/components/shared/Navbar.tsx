import { Link, NavLink } from "react-router-dom"
import { List } from "@phosphor-icons/react"

import { navLinks } from "constants"
import Button from "./Button"

const Navbar = () => {
	return (
		<nav className="!z-10 flex w-screen items-center justify-between border-b px-5 py-6 lg:px-40">
			<Link to="/" className="font-bold">
				Nexus
			</Link>
			<div className="hidden items-center gap-4 lg:flex">
				{navLinks.map((link) => (
					<NavLink
						key={link.to}
						to={link.to}
						className={({ isActive }) =>
							`link text-sm font-light capitalize ${isActive ? "" : ""}`
						}>
						{link.name}
					</NavLink>
				))}
			</div>
			<div className="hidden items-center gap-4 lg:flex">
				<Button as="link" href="/signin" variant="filled">
					signin
				</Button>
				<Button as="link" href="/signup" variant="outlined">
					get started
				</Button>
			</div>
			<div className="block lg:hidden">
				<button className="button text-xl">
					<List />
				</button>
			</div>
		</nav>
	)
}

export default Navbar
