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
<div>
<Grid>
    <Grid.Row>
        <Grid.Column mobile={16} tablet={16} computer={16}>
            <Flex direction='row' width='100vw' onlyDesktop>
                    <AddedImages {...props} />
                    <Multitab tabs={Detail(props)}
                    footer= {<Button {...props} buttonDisabled={!props.comissionWithinLimit} disabled={!props.comissionWithinLimit} fullWidth mobileFixedButtom onClick={props.handleSubmit}>ลงขาย</Button>}
                    />
                    <br/>
                    <br/>
            </Flex>
            <Flex direction='row' width='100vw' onlyMobile>
                    <Multitab tabs={DetailMobile(props)}
                    footer= {<Button {...props} buttonDisabled={!props.comissionWithinLimit} disabled={!props.comissionWithinLimit} fullWidth mobileFixedButtom onClick={props.handleSubmit}>ลงขาย</Button>}
                    />
                    <br/>
                    <br/>
            </Flex>
        </Grid.Column>
    </Grid.Row>
    <Grid.Row>
        <Grid.Column>
            <Link href='/profile'>
                <Button>Back</Button>
            </Link>
        </Grid.Column>
    </Grid.Row>
</Grid>
</div>