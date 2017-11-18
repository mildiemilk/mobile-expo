import React from 'react'
import { Button, Grid, Card, Form } from 'semantic-ui-react'
import TextInput from '../molecules/TextInput'
import Header from './Header'
import Head from './DefaultHead'
import CreditCard from '../organisms/CreditCard'
import Wrapper from '../atoms/Wrapper'

export default ({onCheckOut})=> 
<div>
	<Head/>
	<Header />
	<Card>
		<Card.Header> SCB </Card.Header>
		<Card.Content>
			<p>Account Number : 123-456-789</p>
			<p>Name: John Doe</p>
		</Card.Content>
	</Card>
	<Wrapper>
		<CreditCard />
	</Wrapper>
	<Button onClick={onCheckOut}>
		Pay Now
	</Button>
</div>
