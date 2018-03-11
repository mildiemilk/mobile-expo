import { Grid, Icon } from 'semantic-ui-react'
import Link from 'next/link'
import Button from '../atoms/Button'

export default ({signOut}) =>
<div>
	<Grid.Row>
		<Grid.Column>
			<h3 style={{color:'green'}}>ล๊อกอินสำเร็จ</h3>
			<Link href='/profile'>
				<Button secondary margin='10px 0' >ไปที่โปรไฟล์</Button>
			</Link>
			<Button 
				size='medium' 
				background='red' 
				onClick={()=>signOut()}>
				<Icon name='user' /> 
				 ออกจากระบบ
			</Button>
		</Grid.Column>
	</Grid.Row>
</div>
