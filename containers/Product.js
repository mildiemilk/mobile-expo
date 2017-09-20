import { Card, Button, Form, Icon } from 'semantic-ui-react'
import Link from 'next/link'
import Head from './DefaultHead'
import Header from './Header'
import ProductDescription from '../components/ProductDescription'
import { AddItem } from '../components/Cart'

export default ({product, minusQuantity, addQuantity, productUid, productQuantity}) => <div>
	<Head/>
	<Header/>
	<h1>{product.productName}</h1>
	<h2>
		Brand Name: {product.brandName}
	</h2>
	<div className="image-wrapper">
		<i className="overlay-image fa fa-pencil" />
		<image alt="template" />
	</div>
	<h2>Description</h2>
	<ProductDescription productDescription={product.productDescription} />
	<AddItem onClickMinus={minusQuantity} onClickAdd={addQuantity} productUid={productUid} productQuantity={productQuantity}/>
	<Link href='/checkout'><Button>Check out </Button></Link>
</div>
