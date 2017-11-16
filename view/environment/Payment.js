import React from 'react'
import { Button, Grid, Card, Form } from 'semantic-ui-react'
import TextInput from '../molecules/TextInput'
import Header from './Header'
import Head from './DefaultHead'
import CreditCard from '../organisms/CreditCard'

export default ({onCheckOut})=> 
<div>
	<Head/>
	<Header />
	<Grid>
		<Grid.Row>
			<Grid.Column>
				<Card>
					<Card.Header> SCB </Card.Header>
					<Card.Content>
						<p>Account Number : 123-456-789</p>
						<p>Name: John Doe</p>
					</Card.Content>
				</Card>
			</Grid.Column>
		</Grid.Row>
		<Grid.Row>
			<Grid.Column>
				<CreditCard />
					<Grid.Row>
						<Grid.Column>
							<Button onClick={onCheckOut}>
								Pay Now
							</Button>
						</Grid.Column>
					</Grid.Row>
			</Grid.Column>
		</Grid.Row>
	</Grid>
</div>
