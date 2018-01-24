import React from 'react'
import Button, { DivButton } from '../atoms/Button'
import Flex from '../atoms/Flex'
import H3 from '../atoms/H3'
import H5 from '../atoms/H5'
import WhiteDiv from '../atoms/WhiteDiv'
import BlackOut from '../atoms/BlackOut'
import Wrapper from '../atoms/Wrapper'
import Modal from '../molecules/Modal'
import { saveDispute } from '../../lib/handlers/dispute'
import { subUserWallet } from '../../lib/handlers/user'

class BalanceModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            disputing: false,
            balanceDisplay:0,
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

    handleSetDataDispute = () => {
        let _this = this;
        subUserWallet(this.state.dispute.userUid, this.state.dispute.amount, () => {
            let disputeArr = _this.state.dispute;
            disputeArr.DateAndTime = new Date().toISOString().slice(0, 19).replace('T', ' ');
            saveDispute(disputeArr,(res)=>_this.handleDisputeCallback(res));
        })
    }
    render() {
        return <Flex direction="row" >
            <H5>Balance: {this.props.balance}</H5>
            <Button round maxWidth="76px"  onClick={() => this.setState({ disputing: !this.state.disputing })}> {this.state.disputing ? 'Cancel' : 'Dispute'} </Button>
            <BlackOut display={this.state.disputing} height={this.state.wh + 'px'} style={{
                position: 'fixed'
            }}  >
                <Wrapper>
                    <WhiteDiv padding={'10px'} style={{
                        width: '400px'
                    }}>
                        <DivButton>
                            <Button onClick={() => this.setState({ disputing: false })} modalClose>x</Button>
                        </DivButton>
                        <div style={{ padding: "0px 10px 30px 10px" }}>
                            <h3>Bank</h3>
                            <select onChange={(e) => this.handleChangeBankName(e)} >
                                <option value="bangkokbank">Bangkok Bank</option>
                                <option value="ktb">Krung thai Bank</option>
                                <option value="krungsri">Bank of Ayutthaya</option>
                                <option value="kasikornbank">Kasikorn Bank</option>
                                <option value="scb">Siam commercial Bank</option>
                            </select>
                            <h3>Account Number</h3>
                            <input type="text" value={this.state.dispute.bankAccountNumber} onChange={(e) => this.setState({
                                dispute: {
                                    ...this.state.dispute,
                                    bankAccountNumber: e.target.value
                                }
                            })} />
                            <h3>Account Name</h3>
                            <input type="text" value={this.state.dispute.bankAccountName} onChange={(e) => this.setState({
                                dispute: {
                                    ...this.state.dispute,
                                    bankAccountName: e.target.value
                                }
                            })} />
                            <h3>Amount({this.state.balanceDisplay.toLocaleString()})</h3>
                            <input type="text" onChange={(e) => {
                                this.setState({
                                    dispute: {
                                        ...this.state.dispute,
                                        amount: e.target.value
                                    },
                                    balanceDisplay:e.target.value!==''?this.props.balance-e.target.value:this.props.balance
                                })
                            }}
                                onBlur={(e) => this.handleCheckAmount(e)}
                                value={this.state.dispute.amount} />
                            <br /><br />
                            <Button fullWidth onClick={() => this.handleSetDataDispute()} >Confirm</Button>
                        </div>
                    </WhiteDiv>
                </Wrapper>
            </BlackOut>
        </Flex>
    }
}

export default BalanceModal
