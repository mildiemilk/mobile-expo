import styled from 'styled-components'
import BankAccountBkk from '../organisms/BankAccountBkk'
import BankAccountKbank from '../organisms/BankAccountKbank'
import BankAccountScb from '../organisms/BankAccountScb'
import {Button} from 'semantic-ui-react'
import Wrapper from '../atoms/Wrapper'
import Flex from '../atoms/Flex'
import H3 from '../atoms/H3'

export default props => 
<div width="-webkit-fill-available">
    <BankAccountKbank {...props}/>
    <BankAccountScb {...props} />

</div>
