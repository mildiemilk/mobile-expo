import styled from 'styled-components'
import AddItem from '../molecules/AddItem'
import Link from 'next/link'
import Button from '../atoms/Button'

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
export default ({minusQuantity, addQuantity, productUid, productQuantity}) => 
<CheckoutWrap>
<AddItem onClickMinus={minusQuantity} onClickAdd={addQuantity} productUid={productUid} productQuantity={productQuantity}/>
<Link href='/checkout'><Button color='orange'>สั่งเลย</Button></Link>
</CheckoutWrap>
