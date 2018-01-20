import React from 'react'
import store from '../lib/store'
import withRedux from 'next-redux-wrapper'
import { getAllPendingTransactions} from '../lib/handlers/transaction'
import {getAllDisputes} from '../lib/handlers/dispute'
import transaction from '../lib/reducers/transaction';
import AdminTable from '../view/environment/Admin';

class Admin extends React.Component {
	componentDidMount() {
		getAllPendingTransactions();
		getAllDisputes();
	}

	render() {
		const disputeTransaction = {
			userUid: '',
			amount: 0,
			bankAccountNumber: '',
			bankName: '',
			DateAndTime: ''
		}
		const { transactions,disputes } = this.props;
		return (
			<AdminTable transactions={transactions} disputes={disputes} />
		)
	}
}
const mapStateToProps = state => ({
	transactions: state.transactions,
	disputes:state.disputes
});

export default withRedux(() => store, mapStateToProps)(Admin)
