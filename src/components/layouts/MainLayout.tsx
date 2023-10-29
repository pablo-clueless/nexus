import { Outlet } from "react-router-dom"

import Footer from "components/shared/Footer"
import Navbar from "components/shared/Navbar"

const MainLayout = () => {
	return (
		<>
			<Navbar />
			<main className="w-screen px-5 py-10 lg:px-40">
				<Outlet />
			</main>
			<Footer />
		</>
	)
}

export default MainLayout
