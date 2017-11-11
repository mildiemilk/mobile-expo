import Label from '../atoms/Label'
import Input from '../atoms/InputText'
import styled from 'styled-components'

const Wrapper = styled.div`
    margin-bottom: 20px;
`

export default ({children, placeholder, name}) => 
<Wrapper>
    <Label>{children}</Label>
    <Input name={name} placeholder={placeholder}/>
</Wrapper>
