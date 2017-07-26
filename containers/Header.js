import Link from 'next/link'
import { Menu } from 'semantic-ui-react'

export default () =>	<Menu>
		<Menu.Item><Link href='/'><a>Home </a></Link></Menu.Item>
		<Menu.Item><Link href='/login'><a>Log in </a></Link></Menu.Item>
		<Menu.Item><Link href='/productRegister'><a>product register</a></Link></Menu.Item>
		<Menu.Item><Link href='/profile'><a>profile </a></Link></Menu.Item>
		<Menu.Item><Link href='/checkout'><a>checkout </a></Link></Menu.Item>
		<Menu.Item><Link href='/payment'><a>payment </a></Link></Menu.Item>
		<Menu.Item><Link href='/about'><a>about</a></Link></Menu.Item>
		<Menu.Item><Link href='/register'><a>register</a></Link></Menu.Item>
		<Menu.Item><Link href='/product'><a>product</a></Link></Menu.Item>
	</Menu>