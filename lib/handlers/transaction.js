export const calculateComissionSeller = (price, sellerComissionCash, sellerComissionPercent) => {
	let sellerComission = (parseFloat(sellerComissionCash) + parseFloat(price) * (parseFloat(sellerComissionPercent)/100))
	return ({
			seller: sellerComission,
			owner: parseFloat(price) * 0.90 - sellerComission
	})
}
