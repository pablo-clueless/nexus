import { Navigate, Outlet } from "react-router-dom"
import { useSnapshot } from "valtio"

import state from "store"

const PrivateRoute = () => {
	const snap = useSnapshot(state)

	return snap.isLoggedin ? <Outlet /> : <Navigate to="/signin" />
}

export default PrivateRoute
