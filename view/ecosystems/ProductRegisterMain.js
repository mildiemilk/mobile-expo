import AddedImages from '../organisms/AddedImages'
import ProductRegisterText from '../organisms/ProductRegisterText'
import ComissionInput from '../organisms/ComissionInput'
import Flex from '../atoms/Flex'
import Button from '../atoms/Button'

export default props=> 
<Flex direction='row'>
    <AddedImages {...props} />
    <Flex direction='column' verticleCenter>
        <ProductRegisterText {...props}/>
        <ComissionInput {...props}/>
        <Button {...props} buttonDisabled={!props.comissionWithinLimit} disabled={!props.comissionWithinLimit} fullWidth big mobileFixedButtom onClick={props.handleSubmit}>ลงขาย</Button>
    </Flex>
    <br/>
    <br/>
</Flex>
