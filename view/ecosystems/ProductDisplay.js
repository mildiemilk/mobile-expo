import Flex from '../atoms/Flex'
import DisplayImages from '../organisms/DisplayImages'
import DisplayProductText from '../organisms/DisplayProductText'
import ProductDescriptionPreview from '../ecosystems/ProductDescriptionPreview'
import { addQuantity } from '../../lib/handlers/cart'
import { Grid } from 'semantic-ui-react'
import MultiTab from '../molecules/Multitab'
import AddToCart from '../organisms/AddToCart'

const tabs = props => ([{
    buttonLabel: 'รูปภาพ', 
    component: <DisplayImages images={props.images} />
},{
    buttonLabel: 'ข้อมูลสำคัญ',
    component: <DisplayProductText {...props} />
},{
    buttonLabel: 'คำอธิบายสินค้า',
component: <ProductDescriptionPreview productDescription={props.productDescription} />
}])

export default props =>
<Grid>
	<Grid.Column mobile={16} tablet={16} computer={12}>
		<Flex direction='row' center>
				<MultiTab tabs={tabs({
						images: props.images || [],
						productName:props.product.productName ||'', 
						shopName:props.product.brandName || '',
						price:props.product.price ||'',
						sellerId:props.product.userUid ||'',
						minusQuantity:props.minusQuantity || null,
						addQuantity:props.addQuantity || null,
						productUid:props.productUid || '',
						productQuantity:props.productQuantity ||0,
						addProductTransaction:props.addProductTransaction || null,
						productDescription: props.product.productDescription || []
					})}
					footer={    <AddToCart
							minusQuantity = {props.minusQuantity}
							addQuantity = {props.addQuantity}
							sellerId={props.sellerId}
							productUid = {props.productUid}
							productQuantity = {props.productQuantity}
							addProductTransaction={props.addProductTransaction}
				/>}
				/>

		</Flex>
	</Grid.Column>
</Grid>
