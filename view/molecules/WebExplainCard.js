import MediaQuery from 'react-responsive'

import Wrapper from '../atoms/Wrapper'
import Image from '../atoms/Image'
import H3 from '../atoms/H3'
import WebExplainFooter from './WebExplainFooter'
import color from '../../static/json/color'
import Button from '../atoms/Button'
import Link from 'next/link'

export default ({ header, description, img }) =>
	<Wrapper margin='20px 0' padding='0' width='100%' maxWidth='700px' className='wraper-modal-item'>
		<div style={{ height: '300px', display: 'flex', alignItems: 'flex-end' }}>
			{img}
		</div>
		<WebExplainFooter>
			<H3 style={{ fontSize: '20px' }} color={color.lightPrimary}>{header}</H3>
			<p style={{ color: color.lightPrimary, fontSize: '18px' }}>{description}</p>
			<Link href='register'>
				<Button>สมัครเลย</Button>
			</Link>
		</WebExplainFooter>
	</Wrapper>
