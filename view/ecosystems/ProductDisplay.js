import Flex from '../atoms/Flex'
import DisplayImages from '../organisms/DisplayImages'
import DisplayProductText from '../organisms/DisplayProductText'
import ProductDescriptionPreview from '../ecosystems/ProductDescriptionPreview'
import { Grid } from 'semantic-ui-react'
import MultiTab from '../molecules/Multitab'
import AddToCart from '../organisms/AddToCart'
import Wrapper from '../atoms/Wrapper';

export default props =>
<Grid>
	<Grid.Column mobile={16} tablet={16} computer={16}>
		<Wrapper>
			<Flex direction='row' center>
			<DisplayImages images={props.images} />
			<DisplayProductText {...props.product} />
			<ProductDescriptionPreview productDescription={props.product.productDescription} />
			<AddToCart
					minusQuantity = {props.minusQuantity}
					addQuantity = {props.addQuantity}
					sellerId={props.sellerId}
				 		productUid = {props.productUid}
					productQuantity = {props.quantity}
					addProductTransaction={props.addProductTransaction}
					price = {props.product.price}
			/>
			</Flex>
		</Wrapper>
	</Grid.Column>
</Grid>
