import { Icon } from 'semantic-ui-react'
import Link from 'next/link'
import copy from 'copy-to-clipboard'
import styled from 'styled-components'
import Image from '../atoms/Image'
import Header from '../atoms/H3'
import Wrapper from '../atoms/Wrapper'
import AddStock from '../molecules/AddStocksButton'
import Button, { ButtonGroup } from '../atoms/Button'

const copyLink = (productKey, userUid)=>{
	copy(`${window.location.hostname}:${window.location.port}/p/${productKey}/${userUid}`)
	alert('the link has been copied')
}

export default ({ userUid, userProduct, productKey }) => {
const { brandName, comissionCash, comissionPercent, price, productDescription, productName, productImages, stock} = userProduct

return(
	<Wrapper bigScreenWidth="max-content">
		<Link as={`/p/${productKey}/${userUid}`} href={`/product?productID=${productKey}&userID=${userUid}`}>
			<Image alt="242x200" src={productImages ? productImages[0]: '/static/img/noimg.png'} smallScreen="display:none;" maxHeight="200px"/>
		</Link>
		<Header>
			{productName}
		</Header>
		<div>
			<table>
				<tbody>
				<tr>
					<td style={{textAlign:'right'}}>Price:</td>
					<td>{userProduct.price} baht</td>
					<td></td>
				</tr>
				<tr>
					<td style={{textAlign:'right'}}>Comission:</td>
					<td>{comissionPercent} % & {comissionCash || '0.00'} บาท </td>
				</tr>
				<tr>
					<td style={{textAlign:'right'}}>Stock: </td>
					<td>{stock}</td>
					<td>{userUid === userProduct.userUid ? <AddStock round/>: null }</td>
				</tr>
				</tbody>
			</table>
			<ButtonGroup>
				{userUid === userProduct.userUid ?
				<Link as={`/p/edit/${productKey}/${userUid}`} href={`/productRegister?productID=${productKey}&userID=${userUid}`}><Button basic color='#52BE80'>Edit</Button></Link>
				:null
				}
				<Link as={`/p/${productKey}/${userUid}`} href={`/product?productID=${productKey}&userID=${userUid}`}><Button basic color='#45B39D'>Preview</Button></Link>
				<Button basic color='teal' onClick={()=>copyLink(productKey, userUid)}>GetLink</Button>
				<Button basic color='#3f87a6'>Share <i className="fa fa-share" aria-hidden="true"></i></Button>
			</ButtonGroup>
		</div>
	</Wrapper>
)
}
