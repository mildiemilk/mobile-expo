import Button from '../atoms/Button'
import Wrapper from '../atoms/Wrapper'
import ExpandTab from '../atoms/ExpandTab'
import CreditCard from '../organisms/CreditCard'

const ControlButton = props => <Button fullWidth maxWidth="300px" {...props} >จ่ายด้วยบัตร</Button>

const InnerDisplay = props =>
<Wrapper width="100%" maxWidth="512px">
    <CreditCard {...props}/>
</Wrapper>

export default props => 
<ExpandTab controlComponent={<ControlButton {...props}/>} innerComponent={<InnerDisplay {...props} />} />
