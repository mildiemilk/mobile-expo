import { Button as SMTButton } from 'semantic-ui-react'
import styled from 'styled-components'

const Button = styled(SMTButton)`
    position: fixed;
    bottom: 0;
    right: 0;
    margin: 0 20px 20px 0 !important;
    & > i{
        font-size:180%;
    }
`

const CircularButton = props => <Button onClick={props.onClick} circular icon='talk outline' color='yellow' size='massive'/>

export default CircularButton