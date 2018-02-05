import Wrapper from '../atoms/Wrapper'
import Image from '../atoms/Image'
import H3 from '../atoms/H3'
import WebExplainFooter from './WebExplainFooter'
import color from '../../static/json/color'
import Button from '../atoms/Button'

export default props => <Wrapper margin='20px 0' padding='0' minWidth='320px' maxWidth='700px'>
	<div style={{height:'300px'}}>
		<img />
	</div>
	<WebExplainFooter>
		<H3 color={color.lightPrimary}>{props.header}</H3>
		<p style={{color:color.lightPrimary}}>{props.description}</p>
		<Button>สมัครเลย</Button>
	</WebExplainFooter>
</Wrapper>
	