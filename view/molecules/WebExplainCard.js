import MediaQuery from 'react-responsive'

import Wrapper from '../atoms/Wrapper'
import Image from '../atoms/Image'
import H3 from '../atoms/H3'
import WebExplainFooter from './WebExplainFooter'
import color from '../../static/json/color'
import Button from '../atoms/Button'
import Link from 'next/link'

const WrapperWebRender = (dtype, { header, description, img }) => {
	return (
		<Wrapper margin='20px 0' padding='0' minWidth='320px' maxWidth={dtype === 'mb' ? '300px' : dtype === 'tl' ? '400px' : '700px'}>
			<div style={{ height: '300px', display: 'flex', alignItems: 'flex-end' }}>
				{img}
			</div>
			<WebExplainFooter>
				<H3 color={color.lightPrimary}>{header}</H3>
				<p style={{ color: color.lightPrimary }}>{description}</p>
				<Link href='register'>
					<Button>สมัครเลย</Button>
				</Link>
			</WebExplainFooter>
		</Wrapper>
	);
}
export default ({ header, description, img }) =>
	<div>
		<MediaQuery maxDeviceWidth={480}>
			{WrapperWebRender('mb', { header, description, img })}

		</MediaQuery>
		<MediaQuery minDeviceWidth={481} maxDeviceWidth={700}>
			{WrapperWebRender('tl', { header, description, img })}
		</MediaQuery>
		<MediaQuery minDeviceWidth={701}>
			{WrapperWebRender('dt', { header, description, img })}
		</MediaQuery>
	</div>