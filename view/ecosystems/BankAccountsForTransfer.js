import BankAccountBkk from '../organisms/BankAccountBkk'
import BankAccountKbank from '../organisms/BankAccountKbank'
import BankAccountScb from '../organisms/BankAccountScb'
import Button from '../atoms/Button'
import Wrapper from '../atoms/Wrapper'
import ExpandTab from '../atoms/ExpandTab'

const ControllerButton = props => <Button margin="10px" {...props} fullWidth maxWidth="300px">โอนเงินผ่านบัญชีธนาคาร</Button>

const InnerDisplay = ({savePaymentImage, addPayment, imageUpload}) => 
<Wrapper width="-webkit-fill-available">
    <BankAccountBkk accountNumber="1234567890" savePaymentImage={savePaymentImage} addPayment={addPayment} imageUpload={imageUpload} />
    <BankAccountKbank accountNumber="1234567890" savePaymentImage={savePaymentImage} addPayment={addPayment} imageUpload={imageUpload}/>
    <BankAccountScb accountNumber="1234567890" savePaymentImage={savePaymentImage} addPayment={addPayment} imageUpload={imageUpload}/>
</Wrapper>

export default props => <ExpandTab controlComponent={<ControllerButton/>} innerComponent={<InnerDisplay {...props}/>} />
