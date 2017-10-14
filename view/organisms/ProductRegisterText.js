import styled from 'styled-components'
import Input from '../molecules/InputWithLabel'

const Wrapper = styled.div`
    border: 2px solid #94002a;
    padding: 10px;
    margin: 10px;
    border-radius: 10px;
`

export default () => 
<Wrapper>
    <Input placeholder="iPhone 8 สีแดง 64GB">
        ชื่อสินค้า
    </Input>
    <Input placeholder="Apple">
        ชื่อแบรนด์
    </Input>
    <Input placeholder="36000.00 บาท">
        ราคา
    </Input>
</Wrapper>
