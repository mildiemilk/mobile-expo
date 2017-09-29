import { Button, Icon } from 'semantic-ui-react'
import Link from 'next/link'
import copy from 'copy-to-clipboard';
import styled from 'styled-components'

const Card = styled.div`
	margin: 10pt;
	max-width: 360px;
	background-color: #f9f9f9; /* color behind the dashicon */
	border: 2px solid #ccc; /* circle border width */
	border-radius: 15px;
	padding: 15px;
`

const Header = styled.h2`
	width: auto;
`

const Content = styled.div`
	width: auto;
`

const Img = styled.img`
	min-width: 320px;
	min-height: 240px;
`

const copyLink = (productKey, userUid)=>{
	copy(`${window.location.hostname}:${window.location.port}/p/${productKey}/${userUid}`)
	alert('the link has been copied')
}

export default ({ userUid, userProduct, productKey }) => {
const { brandName, comissionCash, comissionPercent, price, priductDescription, productName, productImages} = userProduct

return(
	<Card>
		<Link as={`/p/${productKey}/${userUid}`} href={`/product?productID=${productKey}&userID=${userUid}`}>
			<Img alt="242x200" src={productImages ? productImages[0]: '/static/img/noimg.png'}/>
		</Link>
		<Header>
			<h2>{productName} </h2>
		</Header>
		<Content>
			<p>Price: {userProduct.price} baht </p>
			<p>Comission: {comissionPercent} % & {comissionCash || '0.00'} BAHT (if owner can edit ) </p>
			<Button.Group>
				{userUid === userProduct.userUid ?
				<Link as={`/p/edit/${productKey}/${userUid}`} href={`/productRegister?productID=${productKey}&userID=${userUid}`}><Button basic color='blue'>Edit</Button></Link>
				:null
				}
				<Link as={`/p/${productKey}/${userUid}`} href={`/product?productID=${productKey}&userID=${userUid}`}><Button basic color='green'>Preview</Button></Link>
				<Button basic color='teal' onClick={()=>copyLink(productKey, userUid)}>GetLink</Button>
				<Button basic color='violet'>Share <i className="fa fa-share" aria-hidden="true"></i></Button>
			</Button.Group>
		</Content>
	</Card>
)
}
