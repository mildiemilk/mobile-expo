import Flex from '../atoms/Flex'
import DisplayImages from '../organisms/DisplayImages'
import DisplayProductText from '../organisms/DisplayProductText'
import { addQuantity } from '../../lib/handlers/cart';

export default ({images, product, productQuantity, productUid, addQuantity, minusQuantity}) =>
<Flex direction='row'>
    <DisplayImages images={images}/>
    <DisplayProductText 
        productName={product.productName} 
        shopName={product.brandName} 
        price={product.price}
        minusQuantity={minusQuantity} 
        addQuantity={addQuantity} 
        productUid={productUid} 
        productQuantity={productQuantity}
    />
</Flex>
