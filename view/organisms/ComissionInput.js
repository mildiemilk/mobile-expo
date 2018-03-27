import Input from '../molecules/InputWithLabel'
import Wrapper from '../atoms/Wrapper'
import H3 from '../atoms/H3'
import { formatInt, formatPercent } from '../../lib/helpers/formvalidation'

export default ({comissionWithinLimit}) => 
<div style={{minWidth:'320px',padding:'40px'}}>
    <H3 padding='0 15px'>คอมมิสชั่นสำหรับลูกค้าที่แชร์สินค้า</H3>
    <Input format={formatInt} name="comissionCash" placeholder="10">
        คอมมิสชั่นเป็นเงินสด
    </Input>
    <Input format={formatPercent} name="comissionPercent" placeholder="20%">
        คอมมิสชั่นเป็น % ของราคาสินค้า
    </Input>
    <span>{!comissionWithinLimit ? "คอมมิสชั่นรวมต้องน้อยกว่า 70% ของราคาสินค้า": " "} </span>
</div>
