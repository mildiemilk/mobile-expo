import { Grid } from 'semantic-ui-react'
import Link from 'next/link'
import Wrapper from '../atoms/Wrapper'
import H1 from '../atoms/H1'
import H3 from '../atoms/H3'
import Flex from '../atoms/Flex'
import Button from '../atoms/Button'
import Modal from '../molecules/Modal'
import Image from '../atoms/Image'
import DropZone from '../atoms/Dropzone'
import WebExplain from '../organisms/WebExplain'

const accountNumberFormat = accountNumber => `${accountNumber.slice(0,3)}-${accountNumber.slice(3,4)}-${accountNumber.slice(4,9)}-${accountNumber.slice(9,10)}`

const ModalContext = ({savePaymentImage, pending, startedUploadImage, image, bankNameEng}) => 
<Wrapper>
	{!startedUploadImage?
	<DropZone onDrop={savePaymentImage} size="100%" marginTop="15px">
		<img style={{width:'100%'}} src='/static/img/bankTransfer.svg'/>
	</DropZone>:
		<div>
	{pending? <H3>กำลังทำรายการ</H3>:<H3>ทำรายการเรียบร้อย</H3>}
			<WebExplain/>
			{
				!pending?
					<div>
						<img alt="" src={image} style={{width:'100%', height:'auto'}}  />
					</div>:null
			}
		</div>}
</Wrapper>


export default ({backgroundColor, accountNumber, accountName, bankName, bankNameEng, savePaymentImage, addBankTransfer, logo, pending, startedUploadImage, image}) =>
<Wrapper 
	backgroundColor={backgroundColor}
	maxWidth="530px"
	width="-webkit-fill-available"
	height="auto"  
	noMargin
	noBorder
	noBorderRadius
	position="relative"
>
	<H3 color="white">{bankName}</H3>
	<img style={{width:'80px', height:'80px', position:'absolute', top:'0', right:'0'}} src={logo || ""} alt="bank image" />
	<H3 color="white" zIndex="10">{accountNumberFormat(accountNumber)}</H3>
	<H3 color="white">ชื่อ {accountName}</H3>
	<Modal context={ModalContext({savePaymentImage, pending, startedUploadImage, image, bankNameEng})}>
		<Button background="none" textColor="white" border="2px solid white" hoverBg="black" onClick={()=>addBankTransfer(bankNameEng)}>ส่งหลักฐานการโอน</Button>
	</Modal>
</Wrapper>
