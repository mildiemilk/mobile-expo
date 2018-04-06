import React from 'react'
import Button from '../atoms/Button'
import DivButton from '../atoms/TextAlign'
import Flex from '../atoms/Flex'
import H3 from '../atoms/H3'
import H5 from '../atoms/H5'
import WhiteDiv from '../atoms/WhiteDiv'
import BlackOut from '../atoms/BlackOut'
import Wrapper from '../atoms/Wrapper'
import { Modal, Dropdown } from 'semantic-ui-react'
import { saveDispute } from '../../lib/handlers/dispute'
import { subUserWallet } from '../../lib/handlers/user'
import { updateUserBankAccount } from '../../lib/handlers/profile'
import TextField from '../atoms/TextField'
import { change,Field } from 'redux-form'

const banks =[{
    text: 'ธนาคารกรุงเทพ',
    value: 'bangkokbank'
},{
    text: 'ธนาคารกรุงไทย',
    value:'ktb'
},{
    text:'ธนาคารกรุงศรีอยุธยา',
    value:'krungsri'
},{
    text:'ธนาคารกสิกรไทย',
    value:'kasikornbank'
},{
    text:'ธนาคารไทยพาณิชย์',
    value:'scb'
}
]

const SelectField = ({
    input,
    label,
    meta: { touched, error },
    children,
    ...custom
  })=><Dropdown     
    placeholder={label}
    errorText={touched && error}
    {...input}
    onChange={(event, value) => input.onChange(value.value)}
    children={children}
    {...custom} 
    options={banks}  
    fluid selection/>    


class BalanceModal extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            balanceDisplay: props.balance || 0,
            dispute: {
                userUid: props.userUid,
                amount: 0,
                bankAccountNumber: '',
                bankAccountName: '',
                bankName: 'bangkokbank',
                DateAndTime: ''
            }
        }
    }

    componentDidMount(){
        if(
            this.props.user&&
            this.props.user.bankName &&
            this.props.user.bankAccountNumber &&
            this.props.user.bankAccountName ){
                const{bankName, bankAccountNumber, bankAccountName } = this.props.user
                this.setState({
                    dispute:{
                        ...this.state.dispute,
                        bankAccountNumber,
                        bankAccountName,
                        bankName
                    }
                })
        }
    }

    componentWillReceiveProps(nextProps){
        if(
            this.props.user&& 
            this.props.user.bankName &&
            this.props.user.bankAccountNumber &&
            this.props.user.bankAccountName ){
            const{bankName, bankAccountNumber, bankAccountName } = this.props.user        
        }
		nextProps.balance !== this.props.balance && nextProps.balance? 
            this.setState({ balanceDisplay: nextProps.balance }) : null
        this.props.user&&
        nextProps.userUid !== this.props.userUid && 
        nextProps.userUid &&
        this.props.user.bankName &&
        this.props.user.bankAccountNumber &&
        this.props.user.bankAccountName? 
            this.setState({ 
                dispute: {
                    ...this.state.dispute,
                    userUid: nextProps.userUid,
                    bankAccountNumber,
                    bankAccountName,
                    bankName
                }
            }) : null
	}

    handleChangeBankName = (event,data) => {
        this.setState({
            dispute: {
                ...this.state.dispute,
                bankName: data.value
            }
        })
    }

    handleCheckAmount = event => {
        if (event.target.value >= this.props.balance) {
            this.setState({
                dispute: {
                    ...this.state.dispute,
                    amount: this.props.balance
                },
                balanceDisplay:0
            })
        }
        if(event.target.value===''){
            event.target.value = 0
        }
    }
    handleDisputeCallback = res => {
        if (res === 'success') {
            alert('Dispute Success');
            this.setState({dispute:{...this.state.dispute, amount:0}})
            Router.push('/profile')
        } else {
            alert('Try Again');
        }
    }

    handleSetDataDispute = async () => {
        let _this = this;
        const {userUid, amount, bankAccountName, bankAccountNumber, bankName} = this.state.dispute
        await subUserWallet(userUid, amount, () => {
            let disputeArr = _this.state.dispute;
            disputeArr.DateAndTime = new Date().toISOString().slice(0, 19).replace('T', ' ');
            saveDispute(disputeArr,(res)=>_this.handleDisputeCallback(res));
        })
        await updateUserBankAccount(userUid, bankName, bankAccountName, bankAccountNumber)
    }

    handleChange = (e) => {
        const { value } = e.target
        if(value <= this.props.balance) {
            this.setState({
                dispute: {
                    ...this.state.dispute,
                    amount: value
                },
                balanceDisplay:value!==''?this.props.balance-value:this.props.balance
            })
        }
    }

    canClick = userBankDetail => {
        let bankDetail = {
            amount:0,
            bankAccountName:'',
            bankAccountNumber:'',
            bankAccountName:'',
            ...userBankDetail
        }
        const { amount, bankAccountNumber, bankAccountName } = bankDetail
        if(amount && amount !== 0 && amount !== '0' && amount !== '' && bankAccountName !== '' && bankAccountNumber !== '') 
            return true
        return false
    }

    render() {
        const { balance,user, userBankDetail } = this.props
        const canClick = this.canClick()

        return <Flex direction="row" verticleCenter >
            <H5 margin="0px 10px 0px 0px" lineHeight="32px">จำนวนเงิน: {this.props.balance||0} บาท</H5>
            {balance > 0 ?
                <Modal trigger ={
                        <Button padding='2px 0'>ถอนเงิน</Button>
                    }
                    closeIcon
                >
                    <Modal.Header>ถอนเงิน</Modal.Header>
                    <Modal.Content>
                        <h3>ธนาคาร</h3>
                        <Field
                            name="bankName"
                            component={SelectField}
                            label="ชื่อธนาคาร"
                        />
                        <TextField label='เลขบัญชีธนาคาร' name="bankAccountNumber" type="text"/>
                        <TextField label="ชื่อบัญชี" name="bankAccountName" type="text" />
                        <TextField label={'จำนวนเงิน('+this.state.balanceDisplay+')'} name="amount" type="number" />
                        <br /><br />
                        <Modal.Actions>
                            <Button fullWidth onClick={() => this.handleSetDataDispute()} buttonDisabled={()=>!canClick(userBankDetail)} disabled={()=>!canClick(userBankDetail)}>ยืนยัน</Button>
                            {!canClick? <span style={{ color: 'red'}}>กรุณากรอกข้อมูลให้ครบถ้วน</span> : null}
                        </Modal.Actions>
                    </Modal.Content>
                </Modal>
                :null
            }
            
        </Flex>
    }
}

export default BalanceModal
