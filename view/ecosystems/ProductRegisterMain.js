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
        buttonLabel: 'ข้อมูลสำคัญ',
        component: <ProductRegisterText {...props}/>
    },
    {
        buttonLabel: 'ข้อมูลสินค้า',
        component: <ProductDescriptionForm {...props} />
    },
    {
        buttonLabel: 'ตัวอย่างข้อมูลสินค้า',
        component: <ProductDescriptionPreview {...props} />
    },
    {
        buttonLabel: 'คอมมิสชั่น',
        component: <ComissionInput {...props}/>
    }

]

export default props=> 
<Flex direction='row' width='100%'>
    <AddedImages {...props} />
    <Multitab tabs={Detail(props)}
    footer= {<Button {...props} buttonDisabled={!props.comissionWithinLimit} disabled={!props.comissionWithinLimit} fullWidth mobileFixedButtom onClick={props.handleSubmit}>ลงขาย</Button>}
    />
    <br/>
    <br/>
</Flex>
