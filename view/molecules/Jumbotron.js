import MediaQuery from 'react-responsive'
import Link from 'next/link'
import Flex from '../atoms/Flex'
import ManyMobile from '../../static/img/manyMobiles.svg'
import { Modal } from 'semantic-ui-react'
import Button from '../atoms/Button'
import WebExplain from '../organisms/WebExplain'
import color from '../../static/json/color.json'
import H1 from '../atoms/H1'
import styled from 'styled-components'


export default () => 
<Section1>
	<Wrapper>
		<div>
			<MobileImage src='https://firebasestorage.googleapis.com/v0/b/sharemai-1.appspot.com/o/cover-page%2Ffrontpagephoto.png?alt=media&token=4777a091-b059-4b80-8d36-5d2501158ce5' alt="เวปที่จะเปลี่ยนแปลงชีวิตคุณ" />
		</div>
		<TextWrapper>
			<Title rotate='-5'>ซื้อ แชร์ รวย!</Title>
			<Subtitle>ซื้อสินค้า แชร์สินค้า คนสั่งซื้อ รับค่าคอม</Subtitle>
			<ButtonWrap>
				<Modal closeIcon trigger={<HowtoButton secondary>วิธีการใช้งาน</HowtoButton>}>
					<Modal.Header>วิธีการใช้งาน</Modal.Header>
					<Modal.Content>
						<Modal.Description>
							<WebExplain />
						</Modal.Description>
					</Modal.Content>
				</Modal>
				<Link prefetch href="/register">
					<RegisterButton>สมัครเลย</RegisterButton>
				</Link>
			</ButtonWrap>
		</TextWrapper>
	</Wrapper>
</Section1>


const colorPink='#ff2b30'
const colorOrange='#ff902b'

const Wrapper = styled.div`
display: flex;
flex-flow: row wrap-reverse;
margin-top:0px;
padding-bottom:60px;
background: ${colorOrange}; 
background: -moz-linear-gradient(135deg, ${colorOrange} 0%, ${colorPink} 100%); 
background: -webkit-linear-gradient(135deg, ${colorOrange} 0%,${colorPink} 100%); 
background: linear-gradient(135deg, ${colorOrange} 0%,${colorPink} 100%);
justify-content:center;
`

const Subtitle = styled.p`
font-family: 'Athiti', sans-serif;
color:white;
padding-left:20px;
max-width:100vw;
@media (max-width:700px){
	font-size:120%;
}
@media (min-width:701px){
	font-size:200%;
}

/* Safari */
-webkit-transform: rotate(-5deg);

/* Firefox */
-moz-transform: rotate(-5deg);

/* IE */
-ms-transform: rotate(-5deg);

/* Opera */
-o-transform: rotate(-5deg);
`

const TitleWrapper = styled.div`
	margin-top:14px !important;
	background:white;
	margin-bottom:0 !important;
`

const Heading = styled.h1`
	text-transform: uppercase;
`

const MobileImage = styled.img`
@media (max-width: 700px) {
	width:100%;
}
`

const Section1 = styled.div`
	max-width:100vw;
`

const ButtonWrap = styled.div`
	display: flex;
	@media (max-width: 700px) {
		flex-flow: column wrap;
		width:100%;
	}
	@media (min-width: 701px) {
		flex-flow: row wrap;
	}
	justify-content: center;
`
const TextWrapper = styled.div`
	display:flex;
	flex-flow: column;
	justify-content:center;
	@media (max-width: 700px){
		width:100%;
	}
`

const Title = styled.h1`
color:white;
font-family: 'Athiti', sans-serif;
padding:0;
max-width:100vw;
margin-bottom:0;	
@media (min-width: 701px){
	font-size: 800%;
}
@media (max-width: 700px){
	font-size: 350%;
}
${props=> props.rotate? `
/* Safari */
-webkit-transform: rotate(${props.rotate}deg);

/* Firefox */
-moz-transform: rotate(${props.rotate}deg);

/* IE */
-ms-transform: rotate(${props.rotate}deg);

/* Opera */
-o-transform: rotate(${props.rotate}deg);`:null}
`

const MainPageButton = Button.extend`
margin:10px;
border-radius: 10px;
max-width: 200px;
width:40%;
font-family: 'Athiti', sans-serif;
font-weight:bold;
@media (max-width: 700px){
	font-size:120%;
	padding:10px 2.5px 10px 2.5px;
	width:100%;
}
@media (min-width: 701px){
	font-size:200%;
	padding:15px 5px 15px 5px;
}
`

const RegisterButton = MainPageButton.extend`
box-shadow:4px 4px 0px 0px rgba(155,0,0);
background: rgba(155,0,0,0.8);
`

const HowtoButton = MainPageButton.extend`
	border:none;
	box-shadow:4px 4px 0px 0px rgba(155,0,0);
	color:rgba(155,0,0);
`
