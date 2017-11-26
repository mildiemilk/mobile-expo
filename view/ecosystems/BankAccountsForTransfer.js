import BankAccountBkk from '../organisms/BankAccountBkk'
import BankAccountKbank from '../organisms/BankAccountKbank'
import BankAccountScb from '../organisms/BankAccountScb'
import Wrapper from '../atoms/Wrapper'

export default ({savePaymentImage}) => 
<Wrapper width="100%" maxWidth="512px">
    <BankAccountBkk accountNumber="1234567890" savePaymentImage={savePaymentImage}/>
    <BankAccountKbank accountNumber="1234567890" savePaymentImage={savePaymentImage}/>
    <BankAccountScb accountNumber="1234567890" savePaymentImage={savePaymentImage}/>
</Wrapper>
