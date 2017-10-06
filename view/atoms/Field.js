import styled from 'styled-components'
import { Field } from 'redux-form'


export default styled(Field)`
min-height: 40pt;
font-size: 20pt;
@media screen and (max-width:700px) {
	height: 60pt;
} 
`
