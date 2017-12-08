import BankAccountBkk from '../organisms/BankAccountBkk'
import BankAccountKbank from '../organisms/BankAccountKbank'
import BankAccountScb from '../organisms/BankAccountScb'
import Button from '../atoms/Button'
import Wrapper from '../atoms/Wrapper'
import ExpandTab from '../atoms/ExpandTab'

const ControllerButton = props => <Button margin="10px" {...props} >โอนเงินผ่านบัญชีธนาคาร</Button>

const InnerDisplay = ({savePaymentImage}) => 
<Wrapper width="100%" maxWidth="512px">
    <BankAccountBkk accountNumber="1234567890" savePaymentImage={savePaymentImage}/>
    <BankAccountKbank accountNumber="1234567890" savePaymentImage={savePaymentImage}/>
    <BankAccountScb accountNumber="1234567890" savePaymentImage={savePaymentImage}/>
</Wrapper>

export default props => <ExpandTab controlComponent={<ControllerButton/>} innerComponent={<InnerDisplay {...props}/>} />
