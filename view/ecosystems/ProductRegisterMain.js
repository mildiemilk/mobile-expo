import { Grid } from 'semantic-ui-react'
import AddedImages from '../organisms/AddedImages'
import ProductRegisterText from '../organisms/ProductRegisterText'
import ComissionInput from '../organisms/ComissionInput'
import Flex from '../atoms/Flex'
import Button from '../atoms/Button'
import Multitab from '../molecules/Multitab'
import ProductDescriptionForm from './ProductDescriptionForm'
import ProductDescriptionPreview from './ProductDescriptionPreview'
import Link from 'next/link'
import OnlyDesktop from '../atoms/OnlyDesktop'
import OnlyMobile from '../atoms/OnlyMobile'
import styled from 'styled-components'
import MediaQuery from 'react-responsive';


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

const DetailMobile = props => [
    {
        buttonLabel: 'รูปภาพ',
        component: <AddedImages {...props} />
    },
    ...Detail(props)
]


export default props=> 
<div style={{padding:'0',margin:'0'}}>
    <Flex onlyDesktop flexFlow='row wrap' justifyContent='spread-evenly'>
        <AddedImages {...props} />           
        <Multitab 
            tabs={Detail(props)}
            footer= {<Button {...props} buttonDisabled={!props.comissionWithinLimit} disabled={!props.comissionWithinLimit} fullWidth onClick={props.handleSubmit}>ลงขาย</Button>}
        />
    </Flex>
    <Flex onlyMobile flexFlow='row wrap' justifyContent='spread-evenly' padding='0' margin='0'>
    
        <Multitab 
            tabs={DetailMobile(props)}
            footer= {<Button {...props} buttonDisabled={!props.comissionWithinLimit} disabled={!props.comissionWithinLimit} fullWidth mobileFixedButtom onClick={props.handleSubmit}>ลงขาย</Button>}
        />
    </Flex>
    <Link href='/profile'>
        <Button secondary>กลับ</Button>
    </Link>
</div>
