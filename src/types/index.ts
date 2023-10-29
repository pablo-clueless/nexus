import { ComponentProps } from "react"

export type ButtonProps =
	| (Omit<ComponentProps<"button">, "className"> & {
			as?: "button"
			icon?: JSX.Element
			variant: "filled" | "outlined"
	  })
	| {
			as: "link"
			href: string
			icon?: JSX.Element
			variant: "filled" | "outlined"
			children: React.ReactNode
	  }

export type InputProps =
	| (Omit<ComponentProps<"input">, "className"> & {
			error?: string
			label?: string
			icon?: JSX.Element
			element: "input"
	  })
	| (Omit<ComponentProps<"select">, "className"> & {
			error?: string
			label?: string
			icon?: JSX.Element
			element: "select"
	  })
	| (Omit<ComponentProps<"textarea">, "className"> & {
			error?: string
			label?: string
			icon?: JSX.Element
			element: "textarea"
	  })
