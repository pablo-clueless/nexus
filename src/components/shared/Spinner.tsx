interface Props {
	/**
	 * @param color: string "TailwindCSS border color, e.g., border-primary"
	 */
	color?: string
}

const Spinner = (props: Props) => {
	return (
		<div
			className={`aspect-square w-6 animate-spin rounded-full border-2 border-t-transparent ${
				props.color ? props.color : "border-white"
			}`}
		/>
	)
}

export default Spinner
