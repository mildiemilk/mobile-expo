import React from 'react'
import { Button, Grid, Card, Form } from 'semantic-ui-react'
import { TextInput } from '../ecosystems/Form'
import Header from './Header'
import Head from './DefaultHead'

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
			<Card>
				<Form>
					<Grid.Row>
						<Grid.Column>
						<TextInput
							name="creditCard"
							label="credit card number"
							type="text"
							validateState="success"
							controlId="credit-card"
							value="12345678910111213"
							placeholder="xxxx xxxx xxxx xxxx"
							onChange={()=>{}}
							helptext="16card number"
						>
							card number
						</TextInput>
						</Grid.Column>	
					</Grid.Row>		
					<Grid.Row>
						<Grid.Column>
							<TextInput
								name="name"
								label="name"
								type="text"
								validateState="success"
								controlId="name-card"
								value="steve jobs"
								placeholder="steve jobs"
								onChange={()=>{}}
								helptext="name on card"
							>
								Name on Card
							</TextInput>
						</Grid.Column>
					</Grid.Row>
					<Grid.Row>
						<Grid.Column>
							<h5>Expiry Date</h5>
						</Grid.Column>
					</Grid.Row>
					<Grid.Row>
						<Grid.Column>
							<TextInput
								name="month"
								label="month"
								type="text"
								validateState="success"
								controlId="month"
								value="12"
								placeholder="01"
								onChange={()=>{}}
								helptext="month"
							>
								month
							</TextInput>
						</Grid.Column>
						<Grid.Column>
							<TextInput
								name="year"
								label="year"
								type="text"
								validateState="success"
								controlId="year"
								value="18"
								placeholder="18"
								onChange={()=>{}}
								helptext="year"
							>
								Year
							</TextInput>
						</Grid.Column>
					</Grid.Row>
					<Grid.Row>
						<Grid.Column>
							<TextInput
								name="cvv"
								label="cvv"
								type="text"
								validateState="cvv"
								controlId="cvv"
								value="123"
								placeholder="123"
								onChange={()=>{}}
								helptext="cvv"
							>
								Cvv
							</TextInput>
						</Grid.Column>
					</Grid.Row>
				</Form>
			</Card>
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
