import Wrapper from '../atoms/Wrapper'
import H1 from '../atoms/H1'
import H3 from '../atoms/H3'
import H5 from '../atoms/H5'
import Button from '../atoms/Button'

export default ({productName, shopName, price, minusQuantity, addQuantity, productUid, productQuantity, addProductTransaction, sellerId}) =>
<div>
    <H1>{productName}</H1>
    <H3>{shopName}</H3>
    <H3>{price}</H3>
</div>
