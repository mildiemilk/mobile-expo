import Wrapper from '../atoms/Wrapper'
import Input from '../molecules/InputWithLabel'

export default () => 
<Wrapper width='100%' minWidth='320px'>
    <Input name="productName" placeholder="iPhone 8 สีแดง 64GB">
        ชื่อสินค้า
    </Input>
    <Input name="brandName" placeholder="Apple">
        ชื่อแบรนด์
    </Input>
    <Input name="price" placeholder="36000.00 บาท">
        ราคา
    </Input>
    <Input name="stock" placeholder="100">
        จำนวนสต๊อก
    </Input>
</Wrapper>
