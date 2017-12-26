import styled from 'styled-components'
import AddImg from '../../static/img/addimg.svg'

export default styled(AddImg)`
	max-width: 100vw;
	max-height: -webkit-fill-available;
	display: ${props => props.src ? 'none' :'unset' };
	${Dropzone}:hover & {
		display:unset;
		background: #F2F2F2;
	}
	@media (max-width: 600px) {
		 max-width: ${props => props.subimg ? '20vw' : '100vw'};
	}
`
