import styled from 'styled-components'

import Table from '../atoms/Table';
import JsonTable from '../organisms/JsonTable'
import transaction from '../../lib/reducers/transaction';
import {updateStatusTransactions, getAllPendingTransactions} from '../../lib/handlers/transaction'
import {updateStatusDisputes, getAllDisputes} from '../../lib/handlers/dispute'
import Button, {ButtonGroup} from '../atoms/Button'
import Label from '../atoms/LabelImage'
import Modal from '../molecules/Modal'
import Image from '../atoms/Image'
import Flex from '../atoms/Flex'
import color from '../../static/json/color.json'

const ButtonStyle = styled.label`
background: ${props => props.background? props.background : color.contrast};
${props => props.border ?`border: ${props.border};` : null}
color: ${props => props.textColor? props.textColor: color.lightPrimary};
padding: 10px;
font-size: 13px;
`
const disputeHeader = {
	DateAndTime: 'Date and Time',
	amount: 'Amount',
	bankAccountName: 'Bank Account Name',
	bankAccountNumber: 'Account Number',
	bankName: 'Bank Name',
	status: 'Status',
	paymentImage: 'Payment',
	userUid: 'user uid'
}

const pendingPaymentTransactionsHeader = {
	productName: 'Product Name',
	total: 'Total',
	paymentImage: 'Payment Image',
	status: 'Status'
}

const transactionHeader = {
	name: 'Name',
	productName: 'Product Name',
	total: 'Total',
	status: 'Status'
}

const ViewTransaction = ({transaction}) => <ul>{
	Object.keys(transaction).map(key => {
		if (typeof transaction[key] === 'string' || typeof transaction[key] === 'number') {
			return <li style={{color: 'black'}}>{key}:{transaction[key]}</li>
		}
	})
}
</ul>

const clearLoading = res => {
	if (res === 'success') {
		getAllPendingTransactions();
		alert(res);
	} else {
		alert('try again');
	}
}

const handlePaymentImage = (image, key, index, handleImageChange) => {
	let result = [];
	if(image) {
		return <Flex verticleCenter direction="row"><img src={image} width="50px" />
					<ButtonStyle for="buttonImg"><input name="image" style={{display:'none'}} onChange={e => handleImageChange(key, index, e)} id="buttonImg" type="file" />upload</ButtonStyle>
					</Flex>
	}
	else {
		return <ButtonStyle for="buttonImg"><input name="image" style={{display:'none'}} onChange={e => handleImageChange(key, index, e)} id="buttonImg" type="file" />upload</ButtonStyle>
	}
}

export default props => {

	const pendingPaymentTransactionsArray = Object.keys(props.pendingPaymentTransactions)
		.map(key=>({
			...props.pendingPaymentTransactions[key].paymentStatus,
			productName:  props.pendingPaymentTransactions[key].productName,
			total: props.pendingPaymentTransactions[key].quantity * props.pendingPaymentTransactions[key].price,
			paymentImage: <img style={{width:'200px', height:'auto'}} src={props.pendingPaymentTransactions[key].payment.paymentImage} />,
			status:props.pendingPaymentTransactions[key].paymentStatus === 'pending' ? <div><span>pending</span>
					<Button onClick={()=>props.approveBankTransferTransaction(
						 key,
						props.pendingPaymentTransactions[key]
					)}>Approve</Button>
				</div> : <p style={{color:'green'}}>Approved!</p>
		}))

	const disputes_arrs = Object.keys(props.disputes).map(key=>props.disputes[key]);
		const disputeArray = props.disputes
		? disputes_arrs.map((dispute, index) => ({
			...dispute,
			status: dispute.status === 'pending' ? <div><span>pending</span>
			<Button onClick={()=>updateStatusDisputes(
				dispute.key,
				index
			)}>Approve</Button>
		</div> : <p style={{color:'green'}}>Approved!</p>,
			paymentImage: <div>{handlePaymentImage(dispute.disputeImage, dispute.key, index, props.handleImageChange)}</div>,
		}))
		: null


	const transactions_arrs = Object.keys(props.transactions).map(key=>props.transactions[key])

	const transactionArray = transactions_arrs.map(transaction => ({
		...transaction,
		total: transaction.price * transaction.quantity,
		status: <ButtonGroup>
				<Button
					background={transaction.status === 'pending'
					? '#F0A505'
					: '#BCB3AE'}
					onClick={() => updateStatusTransactions(tts.key, 'pending', (success) => clearLoading(success))}>Pending</Button>
				<Button
					background={transaction.status === 'sent'
					? '#F0A505'
					: '#BCB3AE'}
					onClick={() => updateStatusTransactions(tts.key, 'sent', (success) => clearLoading(success))}>Send</Button>
				<Button
					background={transaction.status === 'delivered'
					? '#F0A505'
					: '#BCB3AE'}
					onClick={() => updateStatusTransactions(tts.key, 'delivered', (success) => clearLoading(success))}>Delivered</Button>
				<Modal
					context={< ViewTransaction transaction = {
					transaction
				} />}>
					<Button background="#41D4DA">View</Button>
				</Modal>
			</ButtonGroup>
	}))

	if ((transactions_arrs.length == 0) && (disputes_arrs.length == 0)) {
		return (
			<div>Loading...</div>
		)
	}

	return (
		<div>
			<h1>Admin Page</h1>
			<h2>Pending Payment Transactions</h2>
			<JsonTable headerJson={pendingPaymentTransactionsHeader} bodyJsonArray={pendingPaymentTransactionsArray}/>
			<h2>Dispute Transactions</h2>
			<JsonTable headerJson={disputeHeader} bodyJsonArray={disputeArray}/>
			<h2>Transaction Table
			</h2>
			<JsonTable headerJson={transactionHeader} bodyJsonArray={transactionArray}/>
		</div>
	);
}
