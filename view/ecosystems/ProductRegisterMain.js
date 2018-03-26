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

export default props=> {
	const { handleSubmit, comissionCash, comissionPercent, comissionWithinLimit, price, productImages, productName } = props
	const conditionButton = !comissionCash||!comissionPercent||!comissionWithinLimit||!price||(productImages.length==0)||!productName
	return(
		<Grid>
			<Grid.Row>
				<Grid.Column mobile={16} tablet={16} computer={16}>
					<Flex direction='row' width='100vw' onlyDesktop>
						<AddedImages {...props} />
						<Multitab tabs={Detail(props)}
						footer= {<Button {...props} buttonDisabled={conditionButton} disabled={conditionButton} fullWidth mobileFixedButtom onClick={handleSubmit}>ลงขาย</Button>}
						/>
						<br/>
						<br/>
					</Flex>
					<Flex direction='row' width='100vw' onlyMobile>
						<Multitab tabs={DetailMobile(props)}
						footer= {<Button {...props} buttonDisabled={conditionButton} disabled={conditionButton}>ลงขาย</Button>}
						/>
						<br/>
						<br/>
					</Flex>
				</Grid.Column>
			</Grid.Row>
			<Grid.Row>
				<Grid.Column>
					<Link href='/profile'>
						<Button secondary>Back</Button>
					</Link>
				</Grid.Column>
			</Grid.Row>
		</Grid>
	)
}
