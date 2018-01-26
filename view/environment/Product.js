import Head from './DefaultHead'
import Header from './Header'
import ProductDisplay from '../ecosystems/ProductDisplay'

export default props => <div>
	<Head title={props.product.productName} image={props.product.productImages} description={props.product.brandName} />
	<Header/>
	<ProductDisplay 
		{...props}
		images={props.product.productImages} 
	/>
</div>
