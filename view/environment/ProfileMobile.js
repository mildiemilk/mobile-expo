import Link from 'next/link'
import Wrapper from '../atoms/Wrapper'
import Button from '../atoms/Button'
import Flex from '../atoms/Flex'

export default ({ handleProfileMobile, handleItemCard, handleTableMobile }) => 
	<Wrapper absolute widthSmall="100vw" noMargin>
		<Flex verticleCenter>
			<div>
				<Button width="30vw" margin="10px" onClick={handleProfileMobile}>ข้อมูลส่วนตัว</Button>
				<Button width="30vw" margin="10px" onClick={handleItemCard}>สินค้า</Button>
			</div>
			<div>
				<Button width="30vw" margin="10px" onClick={handleTableMobile}>คำสั่งซื้อ</Button>
				<Link href="/productRegister">
					<Button width="30vw" margin="10px">ลงสินค้าเพิ่ม</Button>
				</Link>
			</div>
		</Flex>
	</Wrapper>