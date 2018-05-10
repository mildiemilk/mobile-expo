import Wrapper from '../atoms/Wrapper'
import H3 from '../atoms/H3'
import Button from '../atoms/Button'
import Modal from '../molecules/Modal'
import DropZone from '../atoms/Dropzone'
import WebExplain from '../organisms/WebExplain'
import Head from 'next/head'

const accountNumberFormat = accountNumber => `${accountNumber.slice(0,3)}-${accountNumber.slice(3,4)}-${accountNumber.slice(4,9)}-${accountNumber.slice(9,10)}`

const ModalContext = props => 
<Wrapper>
	<h3>ขั้นตอนที่1 โอนเงินผ่านแอพธนาคารหรือโอนเงินที่	</h3>
		<p>ธนาคาร{props.bankName} </p>
		<p>เลขที่บัญชี:{accountNumberFormat(props.accountNumber)} </p>
		<p>ชื่อบัญชี: {props.accountName}</p>
		<p>จำนวนเงิน: {props.transaction.quantity*props.transaction.price}</p>
	<h3>ขั้นตอนที่2 อัพโหลดหลักฐานโดยการคลิกที่กล่องด้านล่างนี้</h3>
	{!props.startedUploadImage?
	<DropZone onDrop={image=>props.savePaymentImage(image, props.transaction)} size="100%">
		<img style={{width:'100%'}} src='/static/img/bankTransfer.svg'/>
	</DropZone>:
		<div>
	{props.pending? <H3>กำลังทำรายการ</H3>:<H3>ทำรายการเรียบร้อย</H3>}
			<WebExplain/>
			{
				!props.pending?
					<div>
						<img alt="" src={props.transaction.paymentImage} style={{width:'100%', height:'auto'}}  />
					</div>:null
			}
		</div>}
</Wrapper>


export default props =>
<Wrapper 
	backgroundColor={props.backgroundColor}
	maxWidth="530px"
	width="-webkit-fill-available"
	height="auto"  
	noMargin
	noBorder
	noBorderRadius
	position="relative"
>
	<Head>
		<meta name="format-detection" content="telephone=no" />
	</Head>
	<H3 color="white">{props.bankName}</H3>
	<img style={{width:'80px', height:'80px', position:'absolute', top:'0', right:'0'}} src={props.logo || ""} alt="bank image" />
	<H3 color="white" zIndex="10">{accountNumberFormat(props.accountNumber)}</H3>
	<H3 color="white">ชื่อบัญชี {props.accountName}</H3>
		<Modal context={<ModalContext {...props}/>} redirectUrl='/'>
		<Button 
			background="none" 
			textColor="white" 
			border="2px solid white" 
			hoverBg="black" 
			onClick={()=>props.addBankTransfer(props.bankNameEng)}>
			ส่งหลักฐานการโอน
		</Button>
	</Modal>
</Wrapper>
