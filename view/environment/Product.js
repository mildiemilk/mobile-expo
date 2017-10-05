import { Card, Button, Form, Icon } from 'semantic-ui-react'
import Link from 'next/link'
import Head from './DefaultHead'
import Header from './Header'
import ProductDescription from '../view/ecosystems/ProductDescription'
import { AddItem } from '../molecules/Cart'
import { SubImage, SubImageSection } from '../ecosystems/Styled'
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
	justify-content: spread-between;
	&:last-child {
		align-self: flex-end;
		width: 500px;
	}
	`
	
const MainContentWrap = styled.div`
	width: 66%;
	height: 400px;
	border: 2px solid grey;
	min-width:320px;
	display: flex;
	flex-direction: column;
	justify-content: space-around; 
	@media (max-width: 700px) {
		justify-content: flex-start;
	}
`

const CheckoutWrap = styled.div`
	width: -webkit-fill-available;
	max-width: 400px;
	display: flex; 
	flex-flow: column nowrap;
	@media (max-width: 700px) {
		background: palevioletred;
		position: fixed;
		bottom: 0px;
		max-width: 100%;
		width: 100vw;
	}
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
			<div>
				<h1>{product.productName}</h1>
			</div>
			<div>
				<i>{product.brandName}</i>
			</div>
			<div>
				<h3>{product.price} BAHT</h3>
			</div>
			<CheckoutWrap>
				<AddItem onClickMinus={minusQuantity} onClickAdd={addQuantity} productUid={productUid} productQuantity={productQuantity}/>
				<Link href='/checkout'><Button color='orange'>สั่งเลย</Button></Link>
			</CheckoutWrap>
		</MainContentWrap>
	</Page>
</div>)
}
