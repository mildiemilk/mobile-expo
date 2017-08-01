import { Grid, Card } from 'semantic-ui-react'
import ItemCard from '../components/ItemCard'
import Head from './DefaultHead'
import Header from './Header'

export default ({user, userProducts}) => <div>
	<Head/>
	<Header/>
	<Grid>
		<Grid.Row>
			<Grid.Column>
				<h3>{user.name}</h3>
			</Grid.Column>
		</Grid.Row>
		<Grid.Row>
			<Grid.Column>
				<h3>{user.email}</h3>
			</Grid.Column>
		</Grid.Row>
		<Grid.Row>
			<Grid.Column>
				SHOP IMAGE
			</Grid.Column>
			<Grid.Column>
				TODO: SHOP NAME
			</Grid.Column>
		</Grid.Row>
		<Grid.Row>
			<Grid.Column>
				TODO:LINE_ID
			</Grid.Column>
		</Grid.Row>
		<Grid.Row>
			<Grid.Column>
				TODO:ADDRESS
			</Grid.Column>
		</Grid.Row>
		<Grid.Row>
			<Grid.Column>
				TODO:YOUR_SHOP
			</Grid.Column>
		</Grid.Row>
		<Grid.Row>
			<Grid.Column>
			<h1>TODO:Search</h1>
			<h1>TODO:ITEM LIST </h1>
			</Grid.Column>
		</Grid.Row> 
		<Grid.Row>
			<Card.Group>
				{ userProducts ? 
					Object.keys(userProducts).map( userProductKey => {
						return (<ItemCard 
							userProductKey={userProductKey} 
							userUid={user.uid} 
							userProduct={userProducts[userProductKey]} 
							productKey={userProductKey}
							key={userProductKey}
						/>)
					}) : null
				}
			</Card.Group>
		</Grid.Row>
	</Grid>
</div>
