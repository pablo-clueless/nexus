import { Link } from "react-router-dom"

import { community, footerLinks } from "constants"

const Footer = () => {
	return (
		<footer className="flex w-screen flex-col gap-10 bg-dark px-5 py-10 text-light lg:px-40">
			<div className="flex w-full flex-col items-start justify-between gap-10 lg:flex-row">
				<div className="flex flex-1 flex-col">
					<Link to="/" className="text-5xl font-bold">
						Nexus
					</Link>
				</div>
				<div className="flex w-full flex-[2] flex-wrap items-start justify-between gap-5 font-light">
					{footerLinks.map((item) => (
						<div key={item.label} className="flex w-[150px] flex-col gap-5">
							<p className="font-medium capitalize text-secondary">{item.label}</p>
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
							className="text-xl transition-all duration-500 hover:text-secondary">
							{item.icon}
						</a>
					))}
				</div>
			</div>
		</footer>
	)
}

export default Footer
