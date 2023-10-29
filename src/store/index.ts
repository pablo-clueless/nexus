import { proxy } from "valtio"

import type { UserProps } from "interfaces"

interface State {
	user: UserProps | null
	isLoggedin: boolean
	login: (payload: UserProps) => void
	logout: () => void
}

const state = proxy<State>({
	isLoggedin: true,
	login: (payload) => {
		state.user = payload
		state.isLoggedin = true
	},
	logout: () => {
		state.user = null
		state.isLoggedin = false
	},
	user: null,
})

export default state
