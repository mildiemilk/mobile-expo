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

const handleDisputeCallback = res => {
    if (res === 'success') {
        alert('ถอนเงินสำเร็จ ทางเราจะโอนเงินให้ภายใน1-3 วันทำการ');
        Router.push('/profile')
    }
}

const handleSetDataDispute =async( props) => {
    const {uid, amount, bankAccountName, bankAccountNumber, bankName, email} = props.user
    await subUserWallet(uid, props.userBankDetail.amount, () => {
        let disputeArr = { userUid: uid, ...props.userBankDetail, DateAndTime:Date().toString()}
        saveDispute(email, disputeArr,(res)=>handleDisputeCallback(res));
    })
    await updateUserBankAccount(uid, bankName, bankAccountName, bankAccountNumber)
}

const canClick = (userBankDetail) => {
    let bankDetail = {
        amount:0,
        bankAccountName:'',
        bankAccountNumber:'',
        ...userBankDetail
    }
    const { amount, bankAccountNumber, bankAccountName, bankName } = bankDetail

    if(parseInt(amount) > 0 && bankAccountName !== '' && bankAccountNumber !== '') 
        return true
    return false
}

export default ({ balance,user, userBankDetail } ) => <Flex direction="row" verticleCenter >
    <H5 margin="0px 10px 0px 0px" lineHeight="32px">จำนวนเงิน: {balance||0} บาท</H5>
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
                <TextField label='จำนวนเงิน' name="amount" type="number" format={value=>parseInt(value)>parseInt(balance)? balance:value}/>
                <Modal.Actions>
                    <p>จำนวนเงินคงเหลือ : {Math.floor(balance-(userBankDetail && userBankDetail.amount ? userBankDetail.amount : 0))}</p>
                    <Button fullWidth onClick={() => handleSetDataDispute({user,userBankDetail})} buttonDisabled={!canClick(userBankDetail)} disabled={!canClick(userBankDetail)}>ยืนยัน</Button>
                    {!canClick? <span style={{ color: 'red'}}>กรุณากรอกข้อมูลให้ครบถ้วน</span> : null}
                </Modal.Actions>
            </Modal.Content>
        </Modal>
        :null
    }
    
</Flex>

