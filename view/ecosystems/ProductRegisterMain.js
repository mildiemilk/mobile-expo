import { Grid, Icon } from 'semantic-ui-react'
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
import Flex from '../atoms/Flex'
import H5 from '../atoms/H5'
import Image from '../atoms/Image'

const ProductPreview = props => <Wrapper>
	<H3>ตัวอย่าง</H3>
	<DisplayImages images={props.productImages} />
	<DisplayProductText {...props} />
	<ProductDescriptionPreview {...props} />
	<Button fullWidth onClick={props.handleSubmit}>ลงขาย</Button>
</Wrapper>

const ProductImageTip = () => <div style={{padding:'20px'}}>
	<H3>เคล็ดลับการลงรูป</H3>
	<H5>รูปแรกควรเป็นรูป Landscape เพื่อให้รูปออกมาสวยงามเมื่อถูกแชร์บนเฟสบุ๊คหรือ social media อื่นๆ </H5>
	<p>รูปแบบ Landscape เวลา แชร์ </p>
	<Image height="auto" src="https://firebasestorage.googleapis.com/v0/b/sharemai-1.appspot.com/o/web-explain-svg%2F1.PNG?alt=media&token=13d7364f-6555-4e79-a895-2b38c0d309c0"/>
	<H5>แต่ถ้าอยากได้ช้อความเยอะๆให้ใส่รูปเป็ร portrait</H5>
	<p>รูปแบบ Potrait เวลาแชร์</p>
	<Image height="auto" src="https://firebasestorage.googleapis.com/v0/b/sharemai-1.appspot.com/o/web-explain-svg%2F2.PNG?alt=media&token=aebfb7a5-97c8-4942-a19c-53da2d5772c3"/>
</div>

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
						<Flex direction='row'>
							<H3>รูปภาพสินค้า (1/4)</H3>
							<Modal context={<ProductImageTip/>}>
								<Icon fitted name="help circle" />
							</Modal>
						</Flex>
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
