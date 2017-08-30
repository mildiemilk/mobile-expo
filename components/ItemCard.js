import { Card as SemanticCard, Button, Icon } from 'semantic-ui-react'
import Link from 'next/link'
import copy from 'copy-to-clipboard';
import styled from 'styled-components'

const Card = styled(SemanticCard)`
	width: auto !important;
	margin: 10pt !important;
`

const Header = styled(SemanticCard.Header)`
	width: auto;
`

const Content = styled(SemanticCard.Content)`
	width: auto;
`

export default ({ userUid, userProduct, productKey }) => {
const { brandName, comissionCash, comissionPercent, price, priductDescription, productName} = userProduct

return(
	<Card>
		<img alt="242x200" />
		<Header>
			<p>NAME: {productName} </p>
		</Header>
		<Content>
			<p>PRICE : {userProduct.price} baht </p>
			<p>{userUid === userProduct.userUid ? 'product owner' : 'product seller'} </p>
			<p>COMISSION : {comissionPercent} % & {comissionCash} BAHT (if owner can edit ) </p>
			<Button.Group>
				<Link as={`/p/edit/${productKey}/${userUid}`} href={`/productRegister?productID=${productKey}&userID=${userUid}`}><Button basic color='blue'>Edit</Button></Link>
				<Link as={`/p/${productKey}/${userUid}`} href={`/product?productID=${productKey}&userID=${userUid}`}><Button basic color='green'>Preview</Button></Link>
				<Button basic color='teal' onClick={()=>copy(`${window.location.hostname}:${window.location.port}/p/${productKey}/${userUid}`)}>GetLink</Button>
				<Button basic color='violet'>Share <i className="fa fa-share" aria-hidden="true"></i></Button>
			</Button.Group>
		</Content>
	</Card>
)
}
