export const randomizeArray = <T>(array: T[]) => {
	if (array) {
		const shuffled = [...array]
		for (let i = shuffled.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1))
			const temp = shuffled[i]
			shuffled[i] = shuffled[j]
			shuffled[j] = temp
		}
		return shuffled
	}
}

export const currency = (currency: string, amount: number) => {
	return new Intl.NumberFormat("en-NG", {
		style: "currency",
		currency,
		maximumFractionDigits: 0,
	}).format(amount)
}
