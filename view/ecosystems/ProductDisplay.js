import Flex from '../atoms/Flex'
import DisplayImages from '../organisms/DisplayImages'
import DisplayProductText from '../organisms/DisplayProductText'
import ProductDescriptionPreview from '../ecosystems/ProductDescriptionPreview'
import { Grid } from 'semantic-ui-react'
import MultiTab from '../molecules/Multitab'
import AddToCart from '../organisms/AddToCart'
import Wrapper from '../atoms/Wrapper';
import ProductVarietyPreview from '../organisms/ProductVarietyPreview'
import Chat from '../organisms/Chat';

export default props =>
<Grid>
	<Grid.Column mobile={16} tablet={16} computer={6}>
		<Wrapper>
			<DisplayImages images={props.images} />
		</Wrapper>
	</Grid.Column>
	<Grid.Column mobile={16} tablet={16} computer={10}>
		<Wrapper>
		<DisplayProductText {...props.product} />
		<ProductDescriptionPreview productDescription={props.product.productDescription} />
		<ProductVarietyPreview addVariety={props.addVariety}  varieties={props.product.variety?props.product.variety:[]} />
		<AddToCart
				minusQuantity = {props.minusQuantity}
				addQuantity = {props.addQuantity}
				sellerId={props.sellerId}
				productUid = {props.productUid}
				productQuantity = {props.quantity}
				addProductTransaction={props.addProductTransaction}
				price = {props.product.price}
		/>
		</Wrapper>
		<Chat {...props}/>
	</Grid.Column>
</Grid>
