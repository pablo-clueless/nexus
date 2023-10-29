import { Link } from "react-router-dom"

import { community, footerLinks } from "constants"

const Footer = () => {
	return (
		<footer className="bg-dark text-light flex w-screen flex-col gap-10 px-5 py-10 lg:px-40">
			<div className="flex w-full items-start justify-between">
				<div className="flex flex-1 flex-col">
					<Link to="/" className="text-5xl font-bold">
						Nexus
					</Link>
				</div>
				<div className="flex flex-[2] items-start justify-between font-light">
					{footerLinks.map((item) => (
						<div key={item.label} className="flex flex-col gap-5">
							<p className="text-secondary font-medium capitalize">{item.label}</p>
							{item.links.map((link, index) => (
								<Link
									key={index}
									to={link.to}
									className="link_light w-fit text-xs capitalize">
									{link.name}
								</Link>
							))}
						</div>
					))}
				</div>
			</div>
			<div className="flex w-full items-center justify-between font-light">
				<p className="text-xs font-extralight">
					&copy;{new Date().getFullYear()} Nexus. All rights reserved.
				</p>
				<div className="flex items-center gap-4">
					{community.map((item, index) => (
						<a
							key={index}
							href={item.url}
							target="/"
							className="hover:text-secondary text-xl transition-all duration-500">
							{item.icon}
						</a>
					))}
				</div>
			</div>
		</footer>
	)
}

export default Footer
