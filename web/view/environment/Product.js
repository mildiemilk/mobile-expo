import Head from './DefaultHead'
import Header from './Header'
import ProductDisplay from '../ecosystems/ProductDisplay'
import HeightDiv from '../atoms/HeightDiv'
export default props => <HeightDiv>
	<Head title={props.product.brandName} image={props.product.productImages} description={props.product.productName} />
	<Header content={
		<ProductDisplay 
		{...props}
		images={props.product.productImages} 
	/>
	} />
</HeightDiv>
