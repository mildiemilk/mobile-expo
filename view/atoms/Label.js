import styled from 'styled-components'
import color from '../../static/json/color.json'


export default styled.label`
color: {color.darkPrimary};
@media screen and (max-width: 700px){
	font-size: 16pt;
}
@media screen and (min-width: 700px) {
	font-size: 20pt;
}
`
