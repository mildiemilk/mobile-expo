import { Card, Button, Form, Icon } from 'semantic-ui-react'
import Head from './DefaultHead'
import Header from './Header'
import ProductDescription from '../components/ProductDescription'
import { AddItem } from '../components/Cart'

export default ({product}) => <div>
	<Head/>
	<Header/>
	<h1>Description</h1>
	<h1>{product.productName}</h1>
	<h2>
		Brand Name: {product.brandName}
	</h2>
	<h3>image</h3>
		<div className="image-wrapper">
			<i className="overlay-image fa fa-pencil" />
			<image alt="template" />
		</div>
		<image alt="template"/>
		<image alt="template"/>
		<image alt="template"/>
		<image alt="template"/>
	<h2>Description</h2>
	<ProductDescription productDescription={product.productDescription} />
	<AddItem />
</div>