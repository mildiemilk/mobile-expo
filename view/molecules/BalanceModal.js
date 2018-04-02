import React from 'react'
import Button from '../atoms/Button'
import DivButton from '../atoms/TextAlign'
import Flex from '../atoms/Flex'
import H3 from '../atoms/H3'
import H5 from '../atoms/H5'
import WhiteDiv from '../atoms/WhiteDiv'
import BlackOut from '../atoms/BlackOut'
import Wrapper from '../atoms/Wrapper'
import Modal from '../molecules/Modal'
import { saveDispute } from '../../lib/handlers/dispute'
import { subUserWallet } from '../../lib/handlers/user'
import { updateUserBankAccount } from '../../lib/handlers/profile'

class BalanceModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            disputing: false,
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

    componentWillReceiveProps(nextProps){
        const{bankName, bankAccountNumber, bankAccountName } = this.props.user        
		nextProps.balance !== this.props.balance && nextProps.balance? 
            this.setState({ balanceDisplay: nextProps.balance }) : null
		nextProps.userUid !== this.props.userUid && nextProps.userUid? 
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

    handleChangeBankName = event => {
        this.setState({
            dispute: {
                ...this.state.dispute,
                bankName: event.target.value
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
            this.setState({
                disputing:false,
                dispute: {
                    userUid: this.props.userUid,
                    amount: 0,
                    bankAccountNumber: '',
                    bankAccountName: '',
                    bankName: 'bangkokbank',
                    DateAndTime: ''
                }
            });
            
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

    canClick = () => {
        const { dispute } = this.state
        const { amount, bankAccountNumber, bankAccountName } = dispute
        if(amount !== 0 && amount !== '0' && amount !== '' && bankAccountName !== '' && bankAccountNumber !== '') 
            return true
        return false
    }

    render() {
        const { balance,user } = this.props
        const canClick = this.canClick()
        return <Flex direction="row" verticleCenter >
            <H5 margin="0px 10px 0px 0px" lineHeight="32px">จำนวนเงิน: {this.props.balance||0} บาท</H5>
            {balance > 0 ?
                <Button round maxWidth="76px"  onClick={() => this.setState({ disputing: !this.state.disputing })}> {this.state.disputing ? 'ยกเลิก' : 'ถอนเงิน'} </Button>
                :null
            }
            <BlackOut display={this.state.disputing} height={this.state.wh + 'px'} widthDesktop="49vh">
                <Wrapper width='100%'>
                    <WhiteDiv padding={'10px'} style={{
                        width: '100%'
                    }}>
                        <DivButton TextAlign="left">
                            <Button onClick={() => this.setState({ disputing: false })} modalClose>x</Button>
                        </DivButton>
                        <div style={{ padding: "0px 10px 30px 10px" }}>
                            <h3>ธนาคาร</h3>
                            <select onChange={(e) => this.handleChangeBankName(e)} >
                                <option value="bangkokbank">ธนาคารกรุงเทพ</option>
                                <option value="ktb">ธนาคารกรุงไทย</option>
                                <option value="krungsri">ธนาคารกรุงศรีอยุธยา</option>
                                <option value="kasikornbank">ธนาคารกสิกรไทย</option>
                                <option value="scb">ธนาคารไทยพาณิชย์</option>
                            </select>
                            <h3>เลขบัญชีธนาคาร</h3>
                            <input type="text" value={this.state.dispute.bankAccountNumber} onChange={(e) => this.setState({
                                dispute: {
                                    ...this.state.dispute,
                                    bankAccountNumber: e.target.value
                                }
                            })} />
                            <h3>ชื่อบัญชี</h3>
                            <input type="text" value={this.state.dispute.bankAccountName} onChange={(e) => this.setState({
                                dispute: {
                                    ...this.state.dispute,
                                    bankAccountName: e.target.value
                                }
                            })} />
                            <h3>จำนวนเงิน({this.state.balanceDisplay})</h3>
                            <input type="number" onChange={this.handleChange}
                                onBlur={(e) => this.handleCheckAmount(e)}
                                value={this.state.dispute.amount} />
                            <br /><br />
                            <Button fullWidth onClick={() => this.handleSetDataDispute()} buttonDisabled={!canClick} disabled={!canClick}>ยืนยัน</Button>
                            {!canClick? <span style={{ color: 'red'}}>กรุณากรอกข้อมูลให้ครบถ้วน</span> : null}
                        </div>
                    </WhiteDiv>
                </Wrapper>
            </BlackOut>
        </Flex>
    }
}

export default BalanceModal
