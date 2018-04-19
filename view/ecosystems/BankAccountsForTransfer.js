import styled from 'styled-components'
import BankAccountBkk from '../organisms/BankAccountBkk'
import BankAccountKbank from '../organisms/BankAccountKbank'
import BankAccountScb from '../organisms/BankAccountScb'
import {Button} from 'semantic-ui-react'
import Wrapper from '../atoms/Wrapper'
import ipadpayment from '../../static/img/ipadpayment.svg'
import cardpayment from '../../static/img/cardpayment.svg'
import Flex from '../atoms/Flex';
import H3 from '../atoms/H3';

const ControllerButton = props => <Button margin="10px" {...props} fullWidth maxWidth="300px">โอนเงินผ่านบัญชีธนาคาร</Button>

export default props => 
<div width="-webkit-fill-available">
    <BankAccountKbank {...props}/>
    <BankAccountScb {...props} />
    <form ref="formPayment" method="post" action="https://www.thaiepay.com/epaylink/payment.aspx">
        <input type="hidden" name="refno" value={props.refno}/>
        <input type="hidden" name="merchantid" value="41911567"/>
        <input type="hidden" name="customeremail" value={props.transaction.email}/>
        <input type="hidden" name="productdetail" value={props.transaction.productName}/>
        <input type="hidden" name="total" value={props.transaction.price*props.transaction.quantity}/>
        <Wrapper 
            backgroundColor="#4ca6a6"
            maxWidth="530px"
            width="-webkit-fill-available"
            height="auto"  
            noMargin
            noBorder
            noBorderRadius
            position="relative"
            onClick={props.onSubmit}>
            <Flex>
                <Button 
                    color='orange'
                    style={{fontSize:'120%'}}
                    onClick={props.onSubmit}
                >
                    อินเตอร์เน็ตแบงค์กิ้ง/บัตรเครดิต
                </Button>
                <div style={{marginTop:'15px', alignItems:'space-around', display:'flex'}}>
                <CardPayment/>
                <IpadPayment/>
                </div>
            </Flex>
        </Wrapper>
    </form>
</div>

const IpadPayment = styled(ipadpayment)`
    width:30%;
    height:auto;
`

const CardPayment = styled(cardpayment)`
    width:30%;
    height:auto;
`