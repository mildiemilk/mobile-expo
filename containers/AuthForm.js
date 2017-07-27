import Head from './DefaultHead'
import { Button, Icon, Grid, Form, Segment, Divider } from 'semantic-ui-react'
import { renderEmail, renderPassword, renderPasswordConfirm } from '../components/Form'
import Header from './Header'

export default ({onSubmit, error, clearError, formValue, onClickGoogle, onClickFacebook, page}) => 
<div>
	<Head />
	<Header/>
	<Segment padded>
		<Form>
			<Grid divided>
				<Grid.Row>
					<Grid.Column>
						{ page === 'login'? <h2>Login</h2>:<h2>Registration</h2>}
					</Grid.Column>
				</Grid.Row>
				<Grid.Row>
					<Grid.Column>
						{renderEmail(formValue && formValue.values ? formValue.values.email : null)}
					</Grid.Column>
				</Grid.Row>
				<Grid.Row>
					<Grid.Column>
						{renderPassword(formValue && formValue.values ? formValue.values.password : null)}
					</Grid.Column>
				</Grid.Row>
				<Grid.Row>
					{
						page !== 'login' ?
							renderPasswordConfirm(formValue && formValue.values ? formValue.values.password : null, formValue && formValue.values ? formValue.values.passwordConfirm : null)
						:null
					}
				</Grid.Row>
				<Grid.Row>
				<Button size='medium' primary onClick={()=>onSubmit()}>
					<Icon name='user'></Icon> {page === 'login' ? <span>Sign in</span> : <span>Register</span>}
				</Button>
				</Grid.Row>
				<Divider horizontal>Or</Divider>
				<Grid.Row>
					<Grid.Column>
						<Button size='medium' color='facebook' onClick={()=>onClickFacebook()}><Icon name='facebook' /> Sign in with facebook</Button>
				<Divider horizontal>Or</Divider>					
						<Button size='medium' color='google plus'  onClick={()=>onClickGoogle()}><Icon name='google plus' /> Sign in with google</Button>
					</Grid.Column>
				</Grid.Row>
			</Grid>
		</Form>
	</Segment>
</div>