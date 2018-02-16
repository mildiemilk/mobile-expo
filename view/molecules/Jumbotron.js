import Wrapper from '../atoms/Wrapper'
import Flex from '../atoms/Flex'
import Button from '../atoms/Button'

export default ()=><div style={{width:'100%', height:'100%', display:'flex', justifyContent:'center', backgroundColor:'white !important'}}>
<Wrapper position='relative' noBorderRadius noBorder boxShadow='0 10px 20px rgba(0,0,0,0.15), 0 5px 10px rgba(0,0,0,0.05)' width='80%' maxWidth='700px' height='400px'>
	<Flex direction='row' position='relative'>
		<div style={{position:'relative',width:'60%',textAlign:'right'}}>
			<div style={{position:'absolute', left: '120px', top: '75px'}}>
				<h1 style={{margin:'0'}}>ซื้อ โพสต์ รวย!</h1>
				<ul style={{listStyle:'none'}}>
					<li>ซื้อสินค้า </li>
					<li>ใส่แล้วโพส </li>
					<li>เพื่อนซื้อผ่านลิงค์ </li>
					<li>เราได้ตังค์ โดยไม่ต้องขาย</li>
				</ul>
				<Button>สมัครเลย</Button>
			</div>
		</div>
		<div style={{width:'40%', position:'relative',height:'400px'}}>
			<img style={{width:'300px', position:'absolute', right:'-50px', top: '0'}} src='../../static/img/frontpagephoto.png' alt="เวปที่จะเปลี่ยนแปลงชีวิตคุณ"/>
		</div>
	</Flex>
</Wrapper>
</div>
