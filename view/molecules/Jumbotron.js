import MediaQuery from 'react-responsive'
import Link from 'next/link'
import Wrapper from '../atoms/Wrapper'
import Flex from '../atoms/Flex'
import Button from '../atoms/Button'
import ManyMobile from '../../static/img/manyMobiles.svg'
import Modal from '../molecules/Modal'
import WebExplain from '../organisms/WebExplain'
import color from '../../static/json/color.json'

const TextButtonHomeContent = isMobile => {
	return (<div style={{ position: 'relative', width: isMobile?'100%':'60%', textAlign: isMobile? 'center':'right' }}>
			<h1 style={{ margin: '0' }}>ซื้อ แชร์ รวย!</h1>
			<p style={{color:color.gray}}>ซื้อสินค้า แชร์สินค้า คนสั่งซื้อ รับค่าคอม
				<Modal context={<WebExplain/>}>
					<a>วิธีการใช้งานที่ง่ายแสนง่าย</a>
				</Modal>
			</p>
			<Link prefetch href="/register">
				<Button width={isMobile? '100%':''}>สมัครเลย</Button>
			</Link>
	</div>);
}
const ImageHomeContent = isMobile => {
	return (<div style={{ width: isMobile?'100%':'40%', position: 'relative', height: '400px', display:'flex', justifyContent:'center' }}>
		<img style={{ width: '300px', position:isMobile?'relative': 'absolute', right: isMobile?'0':'-50px', top: '0' }} src='https://firebasestorage.googleapis.com/v0/b/sharemai-1.appspot.com/o/cover-page%2Ffrontpagephoto.png?alt=media&token=4777a091-b059-4b80-8d36-5d2501158ce5' alt="เวปที่จะเปลี่ยนแปลงชีวิตคุณ" />
	</div>)
}
export default () => <div style={{ width: '100%', height: 'auto', display: 'flex', justifyContent: 'center' }}>
	<Wrapper position='relative' noBorderRadius noBorder width='80%' maxWidth='700px'>
		<Flex direction='row' position='relative' wrap='wrap-reverse'>
			<MediaQuery maxDeviceWidth={700}>
				{TextButtonHomeContent(true)}
				{ImageHomeContent(true)}
			</MediaQuery>
			<MediaQuery minDeviceWidth={701}>
				{TextButtonHomeContent(false)}
				{ImageHomeContent(false)}
				<ManyMobile style={{position:'absolute', bottom:'0', maxHeight:'40%', left:'0', width:'auto'}}/>
			</MediaQuery>
		</Flex>
	</Wrapper>
</div>
