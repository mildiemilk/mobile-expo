import { Grid } from 'semantic-ui-react'
import AddedImages from '../organisms/AddedImages'
import ProductRegisterText from '../organisms/ProductRegisterText'
import ComissionInput from '../organisms/ComissionInput'
import Button from '../atoms/Button'
import ProductDescriptionForm from './ProductDescriptionForm'
import ProductDescriptionPreview from './ProductDescriptionPreview'
import Link from 'next/link'
import H3 from '../atoms/H3'
import Wrapper from '../atoms/Wrapper'
import Modal from '../molecules/Modal'
import DisplayImages from '../organisms/DisplayImages'
import DisplayProductText from '../organisms/DisplayProductText'
import ProductVariety from '../organisms/ProductVariety'
import Agreement from '../atoms/Agreement'

const ProductPreview = props => <Wrapper>
	<H3>ตัวอย่าง</H3>
	<DisplayImages images={props.productImages} />
	<DisplayProductText {...props} />
	<ProductDescriptionPreview {...props} />
	<Button fullWidth onClick={props.handleSubmit}>ลงขาย</Button>
</Wrapper>

export default props=> {
	const validateProductValues = (props.comissionCash > 0 ) && 
		props.comissionWithinLimit && 
		props.price > 0 && 
		props.productImages.length > 0 && 
		props.productName
	return(
		<Grid>
			<Grid.Row>
				<Grid.Column mobile={16} tablet={8} computer={6}>
					<Wrapper height="100%">
						<H3>รูปภาพสินค้า (1/4)</H3>
						<AddedImages {...props} />
					</Wrapper>
				</Grid.Column>
				<Grid.Column mobile={16} tablet={8} computer={10}>	
					<Wrapper height="100%">
						<H3>ข้อมูลสำคัญ (2/4)</H3>
						<ProductRegisterText {...props}/>
						<ComissionInput {...props}/>						
					</Wrapper>
				</Grid.Column>
			</Grid.Row>
			<Grid.Row>
				<Grid.Column mobile={16} tablet={8} computer={8}>
					<Wrapper height="100%">
						<H3>คำอธิบายสินค้า (3/4)</H3>				
						<ProductDescriptionForm {...props} />
					</Wrapper>
				</Grid.Column>
				<Grid.Column mobile={16} tablet={8} computer={8}>
					<div>
					<Wrapper>
						<H3>แบบสินค้า (4/4) </H3>
						<ProductVariety {...props}/>
					</Wrapper>
					<Wrapper>
						{!validateProductValues? <H3>กรุณาใส่ข้อมูลให้ครบ</H3>:null}
						<ul style={{color:'red'}}>
							{!props.productName? <li>ใส่ชื่อสินค้า</li>:null}
							{props.productImages.length ==0? <li>ใส่รูปภาพ</li>:null}
							{props.price <= 0 ? <li>ใส่ราคาสินค้า </li>:null}
							{!(props.comissionCash > 0 )?<li>ใส่ค่าคอมมิสชั่น</li>:null}
						</ul>
						<p> ในการกดลงขายคุณได้
							<Modal context = {<Agreement/>}>
								<span style={{color:'blue', cursor:'pointer'}}>ยอมรับเงื่อนไข</span>
							</Modal>
							ของทางเว็ปไซท์
						</p>
						<Modal context={<ProductPreview {...props}/>}>
							<Button buttonDisabled={!validateProductValues} disabled={!validateProductValues}>ลงขาย</Button>
						</Modal>
					</Wrapper>
					</div>
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
