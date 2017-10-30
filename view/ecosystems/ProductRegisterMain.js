import AddedImages from '../organisms/AddedImages'
import ProductRegisterText from '../organisms/ProductRegisterText'
import ComissionInput from '../organisms/ComissionInput'
import Flex from '../atoms/Flex'
import Button from '../atoms/Button'

export default ({productImages, setProductImage}) => 
<Flex direction='row'>
    <AddedImages productImages={productImages} setProductImage={setProductImage} />
    <Flex direction='column' verticleCenter>
        <ProductRegisterText/>
        <ComissionInput/>
        <Button fullWidth big mobileFixedButtom>ลงขาย</Button>
    </Flex>
    <br/>
    <br/>
</Flex>