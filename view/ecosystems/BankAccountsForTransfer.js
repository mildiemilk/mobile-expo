import BankAccountBkk from '../organisms/BankAccountBkk'
import BankAccountKbank from '../organisms/BankAccountKbank'
import BankAccountScb from '../organisms/BankAccountScb'
import Button from '../atoms/Button'
import Wrapper from '../atoms/Wrapper'

const ControllerButton = props => <Button margin="10px" {...props} fullWidth maxWidth="300px">โอนเงินผ่านบัญชีธนาคาร</Button>

export default props => 
<div width="-webkit-fill-available">
    <BankAccountKbank {...props}/>
    <BankAccountScb {...props} />
</div>

