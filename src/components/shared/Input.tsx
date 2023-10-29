import type { InputProps } from "types"

const Input = (props: InputProps) => {
	if (props.element === "textarea") {
		return (
			<div className="flex flex-col">
				<label htmlFor={props.name}>{props.label}</label>
				<textarea
					className={`h-[150px] w-full resize-none appearance-none rounded border-0 px-4 py-3 text-dark outline-none ring-1 focus:ring-2 focus:ring-primary ${
						props.error ? "ring-2 ring-red-600" : "ring-gray-300"
					}`}
					{...props}></textarea>
				{props.error && <p className="text-xs text-red-600">{props.error}</p>}
			</div>
		)
	}

	if (props.element === "select") {
		return (
			<div className="flex flex-col">
				<label htmlFor={props.name}>{props.label}</label>
				<select
					className={`w-full appearance-none rounded border-0 px-4 py-3 text-dark outline-none ring-1 focus:ring-2 focus:ring-primary ${
						props.error ? "ring-2 ring-red-600" : "ring-gray-300"
					}`}
					{...props}>
					{props.children}
				</select>
				{props.error && <p className="text-xs text-red-600">{props.error}</p>}
			</div>
		)
	}

	return (
		<div className="flex flex-col">
			<label htmlFor={props.name}>{props.label}</label>
			<div
				className={`flex w-full appearance-none items-center rounded border-0 px-4 py-3 text-dark outline-none ring-1 focus-within:ring-2 focus-within:ring-primary ${
					props.error ? "ring-2 ring-red-600" : "ring-gray-300"
				}`}>
				{props.icon && <span className="mr-1">{props.icon}</span>}
				<input
					className="h-full w-full border-none bg-transparent outline-none"
					{...props}
				/>
			</div>
			{props.error && <p className="text-xs text-red-600">{props.error}</p>}
		</div>
	)
}

export default Input
