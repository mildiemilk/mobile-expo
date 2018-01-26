import Label from '../atoms/Label'
import Input from '../atoms/TextField'
import styled from 'styled-components'
import Flex from '../atoms/Flex'

export default ({children, placeholder, name, format}) => 
<Flex >
    <Label>{children}</Label>
    <Input name={name} placeholder={placeholder} format={format}/>
</Flex>
