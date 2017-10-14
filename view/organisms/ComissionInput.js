import styled from 'styled-components'
import Input from '../molecules/InputWithLabel'
import H3 from '../atoms/H3'

const Wrapper = styled.div`
    border: 2px solid #94002a;
    padding: 10px;
    margin: 10px;
    border-radius: 10px;
`

export default () => 
<Wrapper>
    <H3>คอมมิสชั่นสำหรับลูกค้าที่แชร์สินค้า</H3>
    <Input placeholder="10">
        คอมมิสชั่นเป็นเงินสด
    </Input>
    <Input placeholder="20%">
        คอมมิสชั่นเป็น % ของราคาสินค้า
    </Input>
</Wrapper>
