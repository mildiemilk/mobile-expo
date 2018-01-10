import React from 'react'
import store from '../lib/store'
import withRedux from 'next-redux-wrapper'
import {getAllPendingTransactions} from '../lib/handlers/transaction'

class Admin extends React.Component{
	componentDidMount() {
		getAllPendingTransactions()
	}

	render() {
		const disputeTransaction = {
			userUid: '',
			amount: 0,
			bankAccountNumber: '',
			bankName: '',
			DateAndTime: ''
		}
		return(
			<div>
				<div> Admin Page </div>
				<h1>Transaction Table </h1>
				<h1>Dispute Transactions</h1>
			</div>
		)
	}
}

export default withRedux(()=>store)(Admin)
