import { Card, Button, Icon } from 'semantic-ui-react'
import Link from 'next/link'


export default ({userUid, userProduct}) => {
const { brandName, comissionCash, comissionPercent, price, priductDescription, productName} = userProduct
return(
	<Card>
		<img alt="242x200" />
		<Card.Header>
			<p>NAME: {productName} </p>
		</Card.Header>
		<Card.Content>
			<p>PRICE : {userProduct.price} baht </p>
			<p>{userUid === userProduct.userUid ? 'product owner' : 'product seller'} </p>
			<p>COMISSION : {comissionPercent} % & {comissionCash} BAHT (if owner can edit ) </p>
			<Button.Group>
				<Link href="/product/edit/"><Button basic color='blue'>Edit</Button></Link>
				<Link href="/product/"><Button basic color='green'>SHOW</Button></Link>
				<Button basic color='teal'>GetLink</Button>
				<Button basic color='violet'>Share <i className="fa fa-share" aria-hidden="true"></i></Button>
			</Button.Group>
		</Card.Content>
	</Card>
)
}