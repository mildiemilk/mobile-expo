import WebExplainCard from "../molecules/WebExplainCard"
import WebImage01 from '../../static/img/webexplain/01.svg'
import WebImage02 from '../../static/img/webexplain/02.svg'
import WebImage03 from '../../static/img/webexplain/03.svg'
import WebImage04 from '../../static/img/webexplain/04.svg'
import WebImage05 from '../../static/img/webexplain/05.svg'
import WebImage06 from '../../static/img/webexplain/06.svg'
import Flex from '../atoms/Flex'

const styleImg={
	height: '100%',
	width:'auto'
}

const webExplain = [{
	img:<WebImage01 style={styleImg}/>,
	header: 'ยินดีด้วยคุณได้รับสิทธิได้รับเงินคืนทั้งหมดหรือมากกว่านั้น!',
	description:'การซื้อสินค้าของคุณจะไม่ใช่แค่การเสียเงินอีกแล้ว แต่มันคือการสร้างโอกาสในการมีรายได้ไม่มีที่สิ้นสุด! อยากรู้แล้วใช่ไหมว่าต้องทำอย่างไร ไปดูกันเลย'
},{
	img:<WebImage02 style={styleImg}/>,
	header:'สร้างโอกาสจากการช๊อปปิ้ง',
	description:'ในการช๊อปปิ้งผ่านเวปเราในแต่ละครั้ง คุณจะได้รับลิ้งค์ส่วนตัวของคุณ ง่ายๆเพียงแค่คุณซื้อสินค้า หรือติดต่อกับเจ้าของร้านเพื่อขอเป็นตัวแทน'
},{
	img:<WebImage03 style={styleImg}/>,
	header:'วิธีการโพสต์ที่ง่ายแสนง่าย',
	description: 'เมื่อคุณซื้อสินค้าเรียบร้อยแล้ว คุณสมัครผ่านเวปนี้ด้วยอีเมลหรือ facebook คุณก็จะสามารถหาลิงค์ได้จากสินค้าที่คุณเป็น sponsor ทันที เมื่อคนมากดไลค์ กดคอนเม้นมากขึ้น โอกาสในการขายสินค้าของคุณก็มีมากขึ้น'
},{
	img:<WebImage04 style={styleImg}/>,
	header:'รับทรัพย์กันไปแบบเต็มๆ',
	description: 'เมื่อมีคนซื้อของเพิ่มขึ้นๆ เจ้าของธุรกิจก็ดีใจ คนลงขายก็ดีใจ '
},{
	img:<WebImage05 style={styleImg}/>,
	header:'ง่ายๆแค่นี้เอง!',
	description:'ทุกครั้งที่มีคนซื้อเราก็จะได้ส่วนแบ่งจากการขายตามที่เจ้าของสินค้ากำหนด'
},{
	img:<WebImage06 style={styleImg}/>,
	header:'สมัครกับเรา!',
	description:'เพียงแค่สมัครครั้งเดียวคุณสามารถเป็นผู้แนะนำสินค้าได้อย่างไม่จะกัด!'
}]

export default () => <Flex verticleCenter>
	{
		webExplain.map((content, index)=><WebExplainCard img={content.img} header={content.header} description={content.description}/>)
	}
</Flex>
