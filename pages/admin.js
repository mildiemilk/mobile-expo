import React from 'react'
import store from '../lib/store'
import withRedux from 'next-redux-wrapper'
import {getAllPendingTransactions} from '../lib/handlers/transaction'

class Admin extends React.Component{
	componentDidMount() {
		getAllPendingTransactions()
	}

	render() {
		return(
			<div> Admin Page </div>
		)
	}
}

export default withRedux(()=>store)(Admin)
