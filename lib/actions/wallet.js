export const SET_WALLET_OWNER = 'SET_WALLET_OWNER'
export const SET_WALLET_SELLER = 'SET_WALLET_SELLER'
export const SET_WALLET_BUYER = 'SET_WALLET_BUYER'
export const setWallet = 
	(walletOwner, walletBalance, walletUserUid) => ({
		action: 
			walletOwner === 'productSeller'? SET_WALLET_SELLER: 
			walletOwner === 'productOwner'? SET_WALLET_OWNER : 
			walletOwner === 'productBuyer' ? SET_WALLET_BUYER : 
			null,
		payload: {
			mode: walletOwner,
			balance: walletBalance,
			userUid: walletUserUid
		}
	})
