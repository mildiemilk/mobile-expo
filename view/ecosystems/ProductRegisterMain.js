import AddedImages from '../organisms/AddedImages'
import ProductRegisterText from '../organisms/ProductRegisterText'
import ComissionInput from '../organisms/ComissionInput'
import Flex from '../atoms/Flex'
import Button from '../atoms/Button'

export default () => 
<Flex direction='row'>
    <AddedImages/>
    <Flex direction='column' verticleCenter>
        <ProductRegisterText/>
        <ComissionInput/>
        <Button fullWidth big mobileFixedButtom>ลงขาย</Button>
    </Flex>
    <br/>
    <br/>
</Flex>