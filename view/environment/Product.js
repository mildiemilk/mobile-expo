import { Card, Button, Form, Icon } from 'semantic-ui-react'
import Link from 'next/link'
import Head from './DefaultHead'
import Header from './Header'
import AddItem from '../molecules/AddItem'
import SubImage from '../organisms/SubImage'
import SubImageSection from '../atoms/SubImageSection'
import styled from 'styled-components'
import ImageGallery from 'react-image-gallery'
import Image from '../atoms/Image'
import ProductDisplay from '../ecosystems/ProductDisplay'

export default ({product, minusQuantity, addQuantity, productUid, productQuantity}) => {
	const images = product
	return(<div>
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
</div>)
}
