import { Card, Button, Form, Icon } from 'semantic-ui-react'
import Link from 'next/link'
import Head from './DefaultHead'
import Header from './Header'
import ProductDescription from '../components/ProductDescription'
import { AddItem } from '../components/Cart'
import { SubImage, SubImageSection } from '../components/Styled'
import styled from 'styled-components'
import ImageGallery from 'react-image-gallery'

const Page = styled.div`
	display: flex;
	flex-flow: row wrap;
	width: 100vw;
	height: auto;
`

const ImageWrap = styled.div`
	width: 33%;
	height: 400px;
	border: 2px solid grey;
	min-width: 320px;
	display: flex;
	flex-direction: column;
	align-item: center;
	&:last-child {
		justify-content: flex-end;
		width: 500px;
	}
	`
	
const MainContentWrap = styled.div`
	width: 66%;
	height: 400px;
	border: 2px solid grey;
	min-width:320px;
`

const CheckoutWrap = styled.div`
	width: -webkit-fill-available;
	border: 2px solid blue;
	max-width: 400px;
	display: flex; 
	flex-flow: column nowrap;
`

export default ({product, minusQuantity, addQuantity, productUid, productQuantity}) => {
	const images = product
	return(<div>
	<Head/>
	<Header/>
	<Page>
		<ImageWrap>
			<img src={product.productImages ? product.productImages[0] : '/static/img/noimg.png'} />			
			<SubImageSection>		
				{
					product.productImages ?
					[1,2,3,4,5].map( number => 	<SubImage key={number} number={number} preview={true} image={product.productImages ? product.productImages[number] : '/static/img/noimg.png'}/>	)
					: null
				}
			</SubImageSection>
		</ImageWrap>
		<MainContentWrap>
		<h1>{product.productName}</h1>
		<h2>Brand Name: {product.brandName}</h2>
		<h3>{product.price}</h3>
		<CheckoutWrap>
			<AddItem onClickMinus={minusQuantity} onClickAdd={addQuantity} productUid={productUid} productQuantity={productQuantity}/>
			<Link href='/checkout'><Button>Check out </Button></Link>
		</CheckoutWrap>
		</MainContentWrap>
	</Page>
</div>)
}
