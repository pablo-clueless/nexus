import { useNavigate, useParams } from "react-router-dom"
import { ArrowLeft } from "@phosphor-icons/react"
import { useFormik } from "formik"

import { Button, Input, Loader } from "components"
import { ProductProps } from "interfaces"
import { currency } from "utils"
import data from "mock.json"

const initialValues = {
	cardExpiry: "",
	cardNumber: "",
	cvv: "",
}

const Pricing = () => {
	const navigate = useNavigate()
	const { id } = useParams()

	const findPricingElementById = (data: ProductProps[], targetId: string) => {
		for (const item of data) {
			const pricingElement = item.pricing.find(
				(element) => element.id === targetId
			)
			if (pricingElement) {
				return pricingElement
			}
		}
		return null
	}

	const pricing = findPricingElementById(data, String(id))

	const { errors, handleChange, handleSubmit } = useFormik({
		initialValues,
		onSubmit: (data) => console.log(data),
	})

	if (!pricing) return <Loader />

	return (
		<div className="flex w-full flex-col">
			<div className="mb-10 flex w-full items-center justify-between">
				<button
					onClick={() => navigate(-1)}
					className="rounded bg-gray-200 px-4 py-2">
					<ArrowLeft />
				</button>
			</div>
			<div className="flex w-full flex-col items-center">
				<div className="mt-5 text-center">
					<p className="text-3xl font-light">Checkout</p>
					<p className="text-xs font-medium">Please enter your card details</p>
				</div>
				<div className="my-10">
					<p className="text-xl">
						Payment for {pricing.name} subscription at
						<span className="mx-1 text-secondary">
							{currency("USD", pricing.price)}
						</span>
						{pricing.interval}
					</p>
				</div>
				<form onSubmit={handleSubmit} className="flex w-2/5 flex-col gap-4">
					<Input
						element="input"
						type="text"
						name="cardNumber"
						placeholder="0000 0000 0000 0000"
						label="Card Number"
						onChange={handleChange}
						error={errors.cardNumber}
					/>
					<div className="flex w-full items-center gap-5">
						<Input
							element="input"
							type="date"
							name="cardExpiry"
							label="Card Expiry"
							onChange={handleChange}
							error={errors.cardExpiry}
						/>
						<Input
							element="input"
							type="text"
							name="cvv"
							placeholder="0000"
							inputMode="numeric"
							label="CVV"
							onChange={handleChange}
							error={errors.cvv}
						/>
					</div>
					<Button variant="filled" type="submit" style={{ margin: "16px 0" }}>
						Proceed
					</Button>
				</form>
			</div>
		</div>
	)
}

export default Pricing
