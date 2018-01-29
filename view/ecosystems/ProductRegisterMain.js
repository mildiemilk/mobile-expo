import AddedImages from '../organisms/AddedImages'
import ProductRegisterText from '../organisms/ProductRegisterText'
import ComissionInput from '../organisms/ComissionInput'
import Flex from '../atoms/Flex'
import Button from '../atoms/Button'
import Multitab from '../molecules/Multitab'
import ProductDescriptionForm from './ProductDescriptionForm'
import ProductDescriptionPreview from './ProductDescriptionPreview'

const Detail = props => [
    {
        buttonLabal: 'ข้อมูลสำคัญ',
        component: <ProductRegisterText {...props}/>
    },
    {
        buttonLabal: 'ข้อมูลสินค้า',
        component: <ProductDescriptionForm {...props} />
    },
    {
        buttonLabal: 'preview',
        component: <ProductDescriptionPreview {...props} />
    }

]

export default props=> 
<Flex direction='row' center width='100%'>
    <AddedImages {...props} />
    <Flex minWidth='320px'  width='100%' direction='column' verticleCenter>
        <Multitab tabs={Detail(props)} />
        <ComissionInput {...props}/>
        <Button {...props} buttonDisabled={!props.comissionWithinLimit} disabled={!props.comissionWithinLimit} fullWidth mobileFixedButtom onClick={props.handleSubmit}>ลงขาย</Button>
    </Flex>
    <br/>
    <br/>
</Flex>
