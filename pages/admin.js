import React from 'react'
import store from '../lib/store'
import withRedux from 'next-redux-wrapper'
import { getAllPendingTransactions, getAllPendingPaymentTransactions} from '../lib/handlers/transaction'
import {getAllDisputes} from '../lib/handlers/dispute'
import transaction from '../lib/reducers/transaction'
import AdminTable from '../view/environment/AdminTable'
import { Field, reduxForm, formValueSelector } from 'redux-form'
import Wrapper from '../view/atoms/Wrapper'
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

	render() {
		const { transactions,disputes, admin, password, checkPassword } = this.props
		return (
			admin?
			<AdminTable transactions={transactions} disputes={disputes} />:
			<Wrapper>
				<Field name="password" id="password" component="input" type="password"/>
				<button onClick={()=>checkPassword(password)} > submit</button>
			</Wrapper>
		)
	}
}

const admin = 'adminForm'

Admin = reduxForm({
	form:admin,
	destroyOnUnmount: false
})(Admin)

const selector = formValueSelector(admin)

const mapStateToProps = state => ({
	admin: state.admin,
	transactions: state.transactions,
	disputes:state.disputes,
	password: selector(state,'password')
})

const mapDispatchToProps = {
	checkPassword
}

export default withRedux(() => store, mapStateToProps, mapDispatchToProps)(Admin)
