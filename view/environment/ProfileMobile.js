import Link from 'next/link'
import Wrapper from '../atoms/Wrapper'
import Button from '../atoms/Button'
import Flex from '../atoms/Flex'
import { Icon } from 'semantic-ui-react'

export default ({ handleProfileMobile, handleItemCard, handleTableMobile }) => 
	<Wrapper widthSmall="100vw" noMargin  height="100vh">
		<Flex verticleCenter height="100vh" >
				<Button fullWidth margin="10px" onClick={handleProfileMobile}><Icon name='user' size='large' />ข้อมูลส่วนตัว</Button>
				<Button fullWidth margin="10px" onClick={handleItemCard}><Icon name='shopping cart' size='large' />สินค้า</Button>
				<Button fullWidth margin="10px" onClick={handleTableMobile}><Icon name='list layout' size='large' />คำสั่งซื้อ</Button>
				<Link href="/productRegister">
					<Button fullWidth margin="10px"><Icon name='plus' size='large' />ลงสินค้าเพิ่ม</Button>
				</Link>
			<Link href="/member">
					<Button fullWidth margin="10px"><Icon name='users' size='large' />สมาชิก</Button>
			</Link>
		</Flex>
	</Wrapper>
