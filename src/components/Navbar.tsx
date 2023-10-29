import { Bell, Envelope } from "@phosphor-icons/react"

const Navbar = () => {
	return (
		<nav className="!z-10 flex w-full items-center justify-between border-b px-5 py-6">
			<div className=""></div>
			<div className="flex items-center gap-4">
				<button className="button text-xl">
					<Bell />
				</button>
				<button className="button text-xl">
					<Envelope />
				</button>
			</div>
		</nav>
	)
}

export default Navbar
