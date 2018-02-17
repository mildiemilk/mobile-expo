import MediaQuery from 'react-responsive'

import Wrapper from '../atoms/Wrapper'
import Flex from '../atoms/Flex'
import Button from '../atoms/Button'

const TextButtonHomeContent = isMobile => {
	return (<div style={{ position: 'relative', width: isMobile?'100%':'60%', textAlign:'right' }}>
		<div style={{ position: isMobile?'relative': 'absolute', left: isMobile?'0':'120px', top: isMobile?'0':'75px' }}>
			<h1 style={{ margin: '0' }}>ซื้อ โพสต์ รวย!</h1>
			<ul style={{ listStyle: 'none' }}>
				<li>ซื้อสินค้า </li>
				<li>ใส่แล้วโพส </li>
				<li>เพื่อนซื้อผ่านลิงค์ </li>
				<li>เราได้ตังค์ โดยไม่ต้องขาย</li>
			</ul>
			<Button>สมัครเลย</Button>
		</div>
	</div>);
}
const ImageHomeContent = isMobile => {
	return (<div style={{ width: isMobile?'100%':'40%', position: 'relative', height: '400px' }}>
		<img style={{ width: '300px', position:isMobile?'relative': 'absolute', right: isMobile?'0':'-50px', top: '0' }} src='../../static/img/frontpagephoto.png' alt="เวปที่จะเปลี่ยนแปลงชีวิตคุณ" />
	</div>)
}
export default () => <div style={{ width: '100%', height: 'auto', display: 'flex', justifyContent: 'center' }}>
	<Wrapper position='relative' noBorderRadius noBorder boxShadow='0 10px 20px rgba(0,0,0,0.15), 0 5px 10px rgba(0,0,0,0.05)' width='80%' maxWidth='700px'>
		<Flex direction='row' position='relative'>
			<MediaQuery maxDeviceWidth={700}>
				{TextButtonHomeContent(true)}
				{ImageHomeContent(true)}
			</MediaQuery>
			<MediaQuery minDeviceWidth={701}>
				{TextButtonHomeContent(false)}
				{ImageHomeContent(false)}
			</MediaQuery>
		</Flex>
	</Wrapper>
</div>
