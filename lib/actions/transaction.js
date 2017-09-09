export const ADD_TRANSACTION = 'ADD_TRANSACTION'
export const addTransaction = ({
	price,
	quantity,
	comissionSeller,
	comissionOwner,
	sellerUid,
	ownerUid,
	buyerUid,
	productId
})=> ({
	type: ADD_TRANSACTION,
	payload: {
		price,
		quantity,
		comissionSeller,
		comissionOwner,
		sellerUid,
		ownerUid,
		buyerUid,
		productId
	}
})
