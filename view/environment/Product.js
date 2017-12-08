import Head from './DefaultHead'
import Header from './Header'
import ProductDisplay from '../ecosystems/ProductDisplay'

export default ({product, minusQuantity, addQuantity, productUid, productQuantity}) => <div>
	<Head/>
	<Header/>
	<ProductDisplay 
		images={product.productImages} 
		productName={product.productName} 
		shopName={product.brandName} 
		price={product.price}
		minusQuantity={minusQuantity}
		addQuantity={addQuantity}		
		onClickAdd={addQuantity} 
		productUid={productUid} 
		productQuantity={productQuantity}
	/>
</div>
