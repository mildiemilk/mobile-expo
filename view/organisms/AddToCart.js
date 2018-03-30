import styled from 'styled-components'
import AddItem from '../molecules/AddItem'
import Router from 'next/link'
import Button from '../atoms/Button'
import Link from 'next/link'
import color from '../../static/json/color.json'

const CheckoutWrap = styled.div`
padding-top:20px;
width: -webkit-fill-available;
max-width: 400px;
display: flex; 
flex-flow: column nowrap;
`

const PriceWrap = styled.div`
    border: 2px solid ${color.contrast};
		color: ${color.contrast};
		background: white;
    display: flex;
    justify-content: center;
    font-weight: 1000;
`

export default ({minusQuantity, addQuantity, productUid, productQuantity, addProductTransaction, sellerId, price}) => 
<CheckoutWrap>
	<PriceWrap>ราคา: {price * productQuantity} บาท</PriceWrap>
	<AddItem onClickMinus={minusQuantity} onClickAdd={addQuantity} productUid={productUid} productQuantity={productQuantity}/>
	<Link prefetch href='/checkout'>
		<Button margin="2px 0 0 0">สั่งเลย</Button>
	</Link>
</CheckoutWrap>
