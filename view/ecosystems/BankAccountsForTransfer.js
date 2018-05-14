import BankAccountKbank from '../organisms/BankAccountKbank'
import H3 from '../atoms/H3'
import H5 from '../atoms/H5'

export default props => 
	<div>
		<div style={{border:'1px solid teal', padding:'10px', marginBottom:'20px'}}>
			<H3>วิธีชำระผ่านการโอนเงิน</H3>
			<H5>1. โอนเงินมาที่บัญชีนี้ </H5>
			<H5>2. เมื่อโอนเงินเรียบร้อยแล้วกรุณากดส่งหลักฐานการชำระเงิน</H5> 
			<BankAccountKbank {...props}/>
		</div>
		{props.children}
	</div>
