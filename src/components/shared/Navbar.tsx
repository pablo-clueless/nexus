import { Link, NavLink } from "react-router-dom"

import { navLinks } from "constants"
import Button from "./Button"

const Navbar = () => {
	return (
		<nav className="!z-10 flex w-screen items-center justify-between border-b px-5 py-6 lg:px-40">
			<Link to="/" className="font-bold">
				Nexus
			</Link>
			<div className="flex items-center gap-4">
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
			<div className="flex items-center gap-4">
				<Button as="link" href="/signin" variant="filled">
					signin
				</Button>
				<Button as="link" href="/signup" variant="outlined">
					get started
				</Button>
			</div>
		</nav>
	)
}

export default Navbar
