import Head from './DefaultHead'
import { Button, Icon, Grid, Form, Segment, Divider, Message } from 'semantic-ui-react'
import { TextInput } from '../components/Form'
import Header from './Header'

export default ({
	onClickGoogle, 
	onClickFacebook,
	onSubmitEmail,
	signOut, 
	page,
	loggedIn,
	formValue,
	status,
	helperText
}) => {
	let displayText
	helperText.map( text =>{ displayText += text + " <br/> "})
	return (<div>
		<Head />
		<Header/>
		<Segment padded>
			{status === 'error' ?
				<Message
					error
					header="test"
					content={displayText}
				/>: 
				status === 'warning' ?
				<Message
					warning 
					header="test"
					content={displayText}					
				/>: 
				status === 'success' ? 
				<Message
					success 
					header="test"
					content={displayText}					
				/> : null
			}
			<Form>
				<Grid divided>
					{ !loggedIn ?
					<div>
						<Grid.Row>
							<Grid.Column>
								{ page === 'login'? <h2>Login</h2>:<h2>Registration</h2>}
							</Grid.Column>
						</Grid.Row>
						<Grid.Row>
							<Grid.Column>
							<TextInput
								type="email"
								name="email"
								label="email"
								placeholder="example@example.com"
							/>
							</Grid.Column>
						</Grid.Row>
						<Grid.Row>
							<Grid.Column>
								<TextInput
									type="password"
									name="password"
									label="password"
									placeholder="password"
								/>
							</Grid.Column>
						</Grid.Row>
						<Grid.Row>
							<Grid.Column>					
							{
								page !== 'login' ?
								<TextInput
									type="password"
									name="passwordConfirm"
									label="Password Confirmation"
									placeholder="password confirmation"
								/>
								:null
							}
							</Grid.Column>
						</Grid.Row>
						<Grid.Row>
							<Grid.Column><br/></Grid.Column>
						</Grid.Row>
						<Grid.Row>
							<Grid.Column>
								<Button size='medium' primary onClick={()=>onSubmitEmail(formValue? formValue.email : null, formValue? formValue.password: null)}>
									<Icon name='user'></Icon> 
									{page === 'login' ? <span>Sign in</span> : <span>Register</span>}
								</Button>
							</Grid.Column>
						</Grid.Row>
						<Divider horizontal>Or</Divider>
						<Grid.Row>
							<Grid.Column>
								<Button 
									size='medium' 
									color='facebook' 
									onClick={()=>onClickFacebook()}>
									<Icon name='facebook' /> 
									Sign in with facebook
								</Button>
						<Divider horizontal>Or</Divider>					
								<Button 
									size='medium' 
									color='google plus'  
									onClick={()=>onClickGoogle()}>
									<Icon name='google plus' /> 
									Sign in with google
								</Button>
							</Grid.Column>
						</Grid.Row>
						</div>
						:
					<div>
						<h3>Do you want to Signout?</h3>
						<Grid.Row>
							<Grid.Column>
								<Button 
									size='medium' 
									color='red' 
									onClick={()=>signOut()}>
									<Icon name='user' /> 
									Sign out
								</Button>
							</Grid.Column>
						</Grid.Row>
					</div>}
				</Grid>
			</Form>
		</Segment>
	</div>
	)
}
