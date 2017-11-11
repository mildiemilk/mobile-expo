import Input from '../molecules/InputWithLabel'
import Wrapper from '../atoms/Wrapper'
import H3 from '../atoms/H3'


export default () => 
<Wrapper bigScreenWidth="100%">
    <H3>คอมมิสชั่นสำหรับลูกค้าที่แชร์สินค้า</H3>
    <Input name="comissionCash" placeholder="10">
        คอมมิสชั่นเป็นเงินสด
    </Input>
    <Input name="comissionPercent" placeholder="20%">
        คอมมิสชั่นเป็น % ของราคาสินค้า
    </Input>
</Wrapper>
