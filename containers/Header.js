import Link from 'next/link'
import { Menu } from 'semantic-ui-react'

export default () =>	<Menu>
		<Menu.Item><Link prefetch href='/'><a>Home </a></Link></Menu.Item>
		<Menu.Item><Link prefetch href='/login'><a>Log in </a></Link></Menu.Item>
		<Menu.Item><Link prefetch href='/productRegister'><a>product register</a></Link></Menu.Item>
		<Menu.Item><Link prefetch href='/profile'><a>profile </a></Link></Menu.Item>
		<Menu.Item><Link prefetch href='/checkout'><a>checkout </a></Link></Menu.Item>
		<Menu.Item><Link prefetch href='/payment'><a>payment </a></Link></Menu.Item>
		<Menu.Item><Link prefetch href='/about'><a>about</a></Link></Menu.Item>
		<Menu.Item><Link prefetch href='/register'><a>register</a></Link></Menu.Item>
		<Menu.Item><Link prefetch href='/product'><a>product</a></Link></Menu.Item>
	</Menu>