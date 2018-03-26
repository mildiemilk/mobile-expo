import React from 'react'
import store from '../lib/store'
import withRedux from 'next-redux-wrapper'
import { getAllPendingTransactions, getAllPendingPaymentTransactions} from '../lib/handlers/transaction'
import {getAllDisputes} from '../lib/handlers/dispute'
import transaction from '../lib/reducers/transaction'
import AdminTable from '../view/environment/AdminTable'
import { Field, reduxForm, formValueSelector } from 'redux-form'
import { approveBankTransferTransaction } from '../lib/handlers/payment'
import Wrapper from '../view/atoms/Wrapper'
import { addDisputeImageHandlers } from '../lib/handlers/dispute'
import { checkPassword } from '../lib/actions/admin'

class Admin extends React.Component {

	fetchInfos = async () => {
		await getAllPendingTransactions()
		await getAllDisputes()
		await getAllPendingPaymentTransactions()
	}

	componentWillReceiveProps(nextProps){
		nextProps.admin !== this.props.admin && nextProps.admin? 
			this.fetchInfos() : null
	}
	handleImageChange = (key, index, e) => {
		console.log('dddsfs')
    e.preventDefault();
    const reader = new FileReader();
    const file = e.target.files[0];
    reader.onloadend = () => {
			addDisputeImageHandlers(key, index, file)
    };

    reader.readAsDataURL(file);
	}
	render() {
		const { transactions, disputes, admin, password, checkPassword, pendingPaymentTransactions } = this.props
		console.log('dispute', disputes)
		return (
			admin?
			<AdminTable transactions={transactions} disputes={disputes} pendingPaymentTransactions={pendingPaymentTransactions} approveBankTransferTransaction={approveBankTransferTransaction}
			handleImageChange={this.handleImageChange}/>:
			<Wrapper>
				<Field name="password" id="password" component="input" type="password"/>
				<button onClick={()=>checkPassword(password)} > submit</button>
			</Wrapper>
		)
	}
}

const admin = 'adminForm'

Admin = reduxForm({form:admin,destroyOnUnmount: false})(Admin)

const selector = formValueSelector(admin)

const mapStateToProps = state => ({
	admin: state.admin,
	transactions: state.transactions.pendingTransactions,
	pendingPaymentTransactions: state.transactions.pendingPaymentTransactions,
	disputes:state.disputes,
	password: selector(state,'password')
})

const mapDispatchToProps = {
	checkPassword
}

export default withRedux(() => store, mapStateToProps, mapDispatchToProps)(Admin)
