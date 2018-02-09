import Wrapper from '../atoms/Wrapper'
import Flex from '../atoms/Flex'
import Button from '../atoms/Button'

export default ()=><div style={{position:'relative', width:'100%', height:'100%', display:'flex', justifyContent:'center'}}>
<Wrapper noBorderRadius noBorder boxShadow='0 10px 20px rgba(0,0,0,0.15), 0 5px 10px rgba(0,0,0,0.05)' position='absolute' width='80%'>
	<Flex direction='row'>
		<div style={{width:'40%',textAlign:'right'}}>
			<h1 style={{margin:'0'}}>ซื้อ โพสต์ รวย!</h1>
			<p>คุณชอบสินค้าที่คุณซื้อมาก</p>
			<p>เมื่อคุณโพสต์ผ่านเวปของเรา </p>
			<p>คุณจะได้รายได้จากการขายทันที!</p>
		</div>
		<div style={{width:'60%'}}>
			<img src=""/>
		</div>
		<Button>สมัครเลย</Button>
	</Flex>
</Wrapper>
</div>
