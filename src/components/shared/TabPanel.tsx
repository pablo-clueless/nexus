interface Props {
	children?: React.ReactNode
	className?: string
	index: number
	value: number
}

const TabPanel = (props: Props) => {
	return (
		<div
			style={{ width: "100%", height: "100%" }}
			className={props.className}
			role="tabpanel"
			id={`tabpanel-${props.index}`}
			hidden={props.value !== props.index}>
			{props.value === props.index && <div>{props.children}</div>}
		</div>
	)
}

export default TabPanel
