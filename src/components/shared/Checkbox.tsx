import { ComponentProps } from "react"

type Props = Omit<ComponentProps<"input">, "className" | "type"> & {
	label: string
	error?: string
}

const Checkbox = (props: Props) => {
	return (
		<div className="flex flex-col">
			<label
				htmlFor={props.name}
				className="flex cursor-pointer items-center gap-1">
				<input
					type="checkbox"
					className="peer sr-only rounded accent-primary"
					{...props}
				/>
				<div className="grid aspect-square w-4 place-items-center rounded border-2 border-gray-300">
					{props.checked && (
						<div className="aspect-square w-2 rounded-sm bg-primary transition-opacity"></div>
					)}
				</div>
				<span>{props.label}</span>
			</label>
			{props.error && <p className="text-xs text-red-600">{props.error}</p>}
		</div>
	)
}

export default Checkbox
