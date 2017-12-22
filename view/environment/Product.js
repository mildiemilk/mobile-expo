import Head from './DefaultHead'
import Header from './Header'
import ProductDisplay from '../ecosystems/ProductDisplay'

export default props => <div>
	<Head/>
	<Header/>
	{console.log(props)}
	<ProductDisplay 
		{...props}
		images={props.product.productImages} 
	/>
</div>
