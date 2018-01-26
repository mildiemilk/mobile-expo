import Head from './DefaultHead'
import Header from './Header'
import ProductDisplay from '../ecosystems/ProductDisplay'

export default props => <div>
	<Head title={props.product.productName} image="../../static/img/thumbnail.png" description={props.product.brandName} />
	<Header/>
	<ProductDisplay 
		{...props}
		images={props.product.productImages} 
	/>
</div>
