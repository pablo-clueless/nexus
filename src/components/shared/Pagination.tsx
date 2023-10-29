import { ArrowLeft, ArrowRight } from "@phosphor-icons/react"

import Button from "./Button"

interface Props {
	current: number
	perPage: number
	total: number
	onPageChange: (value: number) => void
}

const Pagination = (props: Props) => {
	const totalPages = Math.ceil(props.total / props.perPage)

	const onPrevious = () => {
		if (props.current > 1) {
			props.onPageChange(props.current - 1)
		}
	}

	const onNext = () => {
		if (props.current < totalPages) {
			props.onPageChange(props.current + 1)
		}
	}

	const renderPageNumbers = () => {
		const pageNumbers = []
		for (let i = 1; i <= totalPages; i++) {
			pageNumbers.push(
				<li
					key={i}
					onClick={() => props.onPageChange(i)}
					className={`grid aspect-square w-5 cursor-pointer place-items-center rounded ${
						props.current === i ? "bg-primary text-white" : "text-primary"
					}`}>
					{i}
				</li>
			)
		}
		return pageNumbers
	}

	return (
		<div className="mt-14 flex w-full select-none items-center justify-between">
			<Button
				variant={props.current === 1 ? "outlined" : "filled"}
				onClick={onPrevious}
				disabled={props.current === 1}>
				<ArrowLeft />
				Previous
			</Button>
			<ul className="flex items-center gap-2">{renderPageNumbers()}</ul>
			<Button
				variant={props.current === totalPages ? "outlined" : "filled"}
				onClick={onNext}
				disabled={props.current === totalPages}>
				Next
				<ArrowRight />
			</Button>
		</div>
	)
}

export default Pagination
