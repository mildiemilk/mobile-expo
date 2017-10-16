import Wrapper from '../atoms/Wrapper'
import Input from '../molecules/InputWithLabel'

export default () => 
<Wrapper bigScreenWidth="100%">
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
