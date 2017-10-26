import Flex from '../atoms/Flex'
import DisplayImages from '../organisms/DisplayImages'
import DisplayProductText from '../organisms/DisplayProductText'

export default ({productName, shopName, price, images}) =>
<Flex direction='row'>
    <DisplayImages images={images}/>
    <DisplayProductText productName={productName} shopName={shopName} price={price}/>
</Flex>