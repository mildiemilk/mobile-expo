import ProductAction from '../molecules/ProductAction'
import {Icon, Popup} from 'semantic-ui-react'
import styled from 'styled-components'

const	Image = styled.img`
		width:100px;
		height:auto;
	`

export default props => {
	const { userUid, product, productKey,isSponsor } = props
	if(!product){
		return null
	}
	return(
		<GridWrap style={{margin:'5px'}}>
			<div>
				<Image alt="242x200" src={product.productImages ? product.productImages[0]: '/static/img/noimg.png'}/>
			</div>
			<div>
				<div>
					<Popup
						trigger={<p><Icon name='hashtag'/>{product.productName}</p>}
						content='ชื่อสินค้า'
					/>					
					<Popup
						trigger={<p><Icon name='tag'/>{product.price} บาท</p>}
						content='ราคาสินค้า'
					/>
					<Popup
						trigger={<p><Icon name='percent'/>{product.comissionCash || '0.00'} บาท</p>}
						content='ค่าแนะนำ'
					/>
				</div>
			</div>
			<GridAction>
				<ProductAction product={product} productId={productKey} userUid={userUid} isSponsor={isSponsor} />
			</GridAction>
		</GridWrap>
	)
}

const GridWrap = styled.div`
	display:inline-grid;
	grid-template-columns: 100px 170px;
	grid-template-rows: 120px 40px;
	grid-gap: 10px;
	width:270px;
	max-width:270px;
	flex-grow:1;
	background:white;
	margin:5px;
`

const GridAction = styled.div`
	grid-column:1 / span 2;
`
