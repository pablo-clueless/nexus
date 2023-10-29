import { useSnapshot } from "valtio"

import state from "store"

const Profile = () => {
	const snap = useSnapshot(state)
	console.log(snap)

	return <div className="px-5 py-10">Profile</div>
}

export default Profile
