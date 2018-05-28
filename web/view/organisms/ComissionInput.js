import Input from '../molecules/InputWithLabel'
import Wrapper from '../atoms/Wrapper'
import H3 from '../atoms/H3'
import { formatInt, formatPercent } from '../../lib/helpers/formvalidation'

export default ({comissionWithinLimit}) => 
<div>
    <Input format={formatInt} name="comissionCash" placeholder="10">
        คอมมิสชั่นเป็นเงินสด
    </Input>
    <span>{!comissionWithinLimit ? "*คอมมิสชั่นรวมต้องน้อยกว่า 70% ของราคาสินค้า": " "} </span>
</div>
