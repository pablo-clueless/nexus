import { Link } from "react-router-dom"

import type { ButtonProps } from "types"

const ButtonStyles = {
	filled:
		"bg-primary text-white p-2 rounded transition duration-200 hover:bg-primary-dark",
	outlined:
		"border border-primary text-primary p-2 rounded transition duration-200 hover:border-primary-dark hover:text-primary-dark",
}

const Button = (props: ButtonProps) => {
	if (props.as === "link") {
		return (
			<Link
				to={props.href}
				className={`button flex items-center justify-center gap-2 px-4 py-2 capitalize disabled:cursor-not-allowed ${
					ButtonStyles[props.variant]
				}`}
				{...props}>
				{props.children}
			</Link>
		)
	}

	return (
		<button
			className={`button flex items-center justify-center gap-2 px-4 py-2 capitalize disabled:cursor-not-allowed ${
				ButtonStyles[props.variant]
			}`}
			{...props}>
			{props.children}
		</button>
	)
}

export default Button
