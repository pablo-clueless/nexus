import { Link, Outlet } from "react-router-dom"

import Navbar from "components/Navbar"
import { navigation } from "constants"

const DashboardLayout = () => {
	return (
		<main className="flex h-screen w-screen items-start">
			<div className="flex h-full w-[100px] flex-col items-center bg-dark py-10">
				<Link to="/" className="font-bold text-light">
					Nexus
				</Link>
				<div className="mt-10 flex w-full flex-col items-center">
					{navigation.map((item, index) => (
						<div key={index} className="my-8 flex w-full flex-col items-center gap-5">
							{item.list.map((item, index) => (
								<Link
									to={item.to}
									title={item.name}
									key={index}
									className="text-2xl text-light">
									{item.icon}
								</Link>
							))}
						</div>
					))}
				</div>
			</div>
			<div className="w-full">
				<Navbar />
				<Outlet />
			</div>
		</main>
	)
}

export default DashboardLayout
