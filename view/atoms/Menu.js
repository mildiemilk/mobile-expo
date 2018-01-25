import styled from 'styled-components'
import { Menu  } from 'semantic-ui-react'
import color from '../../static/json/color.json'

export default styled(Menu)`
background: ${color.primary1} !important;
width: 100%;
display: flex;
justify-content: space-evenly;
`
