import Link from 'next/link'
import { Modal, Grid } from 'semantic-ui-react'
import Button from '../atoms/Button'
import WebExplain from '../organisms/WebExplain'
import styled from 'styled-components'
import Banner01 from '../../static/banner/banner_12.svg'
import Banner02 from '../../static/banner/banner_22.svg'
import SignInForm from '../organisms/SignInForm'

export default ({...props}) => 
	<Section>
		<Wrapper>
			<div style={{minHeight:'80vh'}}>
				<MobileImage src='https://firebasestorage.googleapis.com/v0/b/sharemai-1.appspot.com/o/cover-page%2Ffrontpagephoto.png?alt=media&token=4777a091-b059-4b80-8d36-5d2501158ce5' alt="เวปที่จะเปลี่ยนแปลงชีวิตคุณ" />
			</div>
			<TextWrapper>
				<Title rotate='-5'>ซื้อ แชร์ รวย!</Title>
				<Subtitle>ซื้อสินค้า แชร์สินค้า คนสั่งซื้อ รับค่าคอม</Subtitle>
				<ButtonWrap>
					<Link prefetch href="/login">
						<SecondaryButton secondary>ล๊อกอิน</SecondaryButton>
					</Link>
					<Link prefetch href="/register">
						<PrimaryButton>สมัครเลย</PrimaryButton>
					</Link>
				</ButtonWrap>
			</TextWrapper>
		</Wrapper>
		<Grid columns={3} centered style={{background:'#66b2b2'}}>
			<Grid.Row>
				<Grid.Column mobile={16} tablet={16} computer={8}>
					<WebExplain/>
				</Grid.Column>
			</Grid.Row>
		</Grid>
		<Grid centered>
			<Grid.Row>
				<BannerWrapper mobile={16} computer={8} color='teal' centered>
					<BannerHeader>
						เป้าหมายคอมมิสชั่น 10 ล้านบาท
					</BannerHeader>
					<BannerSub>
						ร้านค้ามากมายที่ต้องการให้คุณได้ค่าตอบแทนจากการแชร์สินค้า
					</BannerSub>
					<Banner1/>
				</BannerWrapper>
				<BannerWrapper mobile={16} computer={8} color='teal' centered>
					<BannerHeader>
						เป้าหมายสินค้า 1000 รายการ
					</BannerHeader>
					<BannerSub>
						เจ้าของร้านค้าไม่จำเป็นต้องหาตัวแทนที่ไหนอีกแล้วเพราะที่นี่ลูกค้าทุกคนคือตัวแทนของคุณ!
					</BannerSub>
					<Banner2/>
				</BannerWrapper>
			</Grid.Row>
		</Grid>
		<RegisterWrapper centered doubling columns={2} >
			<Grid.Column>
				<SignInForm {...props} color="white"/>	
			</Grid.Column>	
		</RegisterWrapper>
	</Section>


const BannerWrapper = styled(Grid.Column)`
display: flex !important;
flex-direction: column !important;
align-items: center;
`

const colorPink='#ff5e62'
const colorOrange='#ff9966'

const RegisterWrapper = styled(Grid)`
	background: ${colorOrange}  !important; 
	background: -moz-linear-gradient(135deg, ${colorOrange} 0%, orange 100%) !important; 
	background: -webkit-linear-gradient(135deg, ${colorOrange} 0%,orange 100%) !important; 
	background: linear-gradient(135deg, ${colorOrange} 0%,orange 100%) !important;
`


const Banner1 = styled(Banner01)`
	width:100%
`

const Banner2 = styled(Banner02)`
width:100%
`

const BannerHeader = styled.h2`
font-family: 'Athiti',sans-serif;
color: white;
font-size: 300%;
font-weight: 200;
padding-top:10px;
margin:0;
padding:0;
width:100%;
`
const BannerSub = styled.h3`
font-family: 'Athiti',sans-serif;
color: #FEFEFA;
font-size: 150%;
font-weight: 200;
width:539px;
padding:0;
margin:0;
width:100%;

`



const Wrapper = styled.div`
display: flex;
flex-flow: row wrap-reverse;
width:100%;
margin-top:0px;
background: ${colorOrange}; 
background: -moz-linear-gradient(135deg, ${colorOrange} 0%, ${colorPink} 100%); 
background: -webkit-linear-gradient(135deg, ${colorOrange} 0%,${colorPink} 100%); 
background: linear-gradient(135deg, ${colorOrange} 0%,${colorPink} 100%);
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

const MobileImage = styled.img`
width:80%;
@media (max-width: 700px) {
	width:100%;
}
`

const Section = styled.div`
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

const MainPageButton = styled(Button)`
margin:5px;
border-radius: 10px;
max-width: 180px;
width:30%;
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

const PrimaryButton = styled(MainPageButton)`
box-shadow:4px 4px 0px 0px rgba(155,0,0);
background: rgba(155,0,0,0.8);
`

const SecondaryButton = styled(MainPageButton)`
	border:none;
	box-shadow:4px 4px 0px 0px rgba(155,0,0);
	color:rgba(155,0,0);
`
