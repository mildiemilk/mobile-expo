import Input from '../molecules/InputWithLabel'
import Wrapper from '../atoms/Wrapper'
import H3 from '../atoms/H3'

const formatInt = value => value ? value.replace(/[^\d]/g, '') : null
const formatPercent = value => value ? formatLessThanSeventy( value.replace(/[^\d]/g, '').slice(0,2) ): null
const formatLessThanSeventy = value => parseInt(value) > 70? 70 :value

export default ({comissionWithinLimit}) => 
<Wrapper bigScreenWidth="100%">
    <H3>คอมมิสชั่นสำหรับลูกค้าที่แชร์สินค้า</H3>
    <Input format={formatInt} name="comissionCash" placeholder="10">
        คอมมิสชั่นเป็นเงินสด
    </Input>
    <Input format={formatPercent} name="comissionPercent" placeholder="20%">
        คอมมิสชั่นเป็น % ของราคาสินค้า
    </Input>
    <span>{!comissionWithinLimit ? "คอมมิสชั่นรวมต้องน้อยกว่า 70% ของราคาสินค้า": " "} </span>
</Wrapper>
