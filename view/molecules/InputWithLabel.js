import Label from '../atoms/Label'
import Input from '../atoms/InputText'
import styled from 'styled-components'

const Wrapper = styled.div`
    margin-bottom: 20px;
`

export default ({children, placeholder}) => 
<Wrapper>
    <Label>{children}</Label>
    <Input placeholder={placeholder}/>
</Wrapper>