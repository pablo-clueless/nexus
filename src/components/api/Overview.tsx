interface Props {
	data: string
}

const Overview = (props: Props) => {
	return (
		<div className="flex min-h-[500px] w-full gap-5">
			<p className="text-gray-500">{props.data}</p>
		</div>
	)
}

export default Overview
