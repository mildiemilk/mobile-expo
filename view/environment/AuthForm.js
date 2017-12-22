import Head from './DefaultHead'
import { Button, Icon, Grid, Form, Divider } from 'semantic-ui-react'
import Header from './Header'
import Segment from '../atoms/Segment'
import SignInForm from '../organisms/SignInForm'
import SignOut from '../organisms/SignOut'
import ErrorDisplay from '../organisms/ErrorDisplay'

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
				<Grid divided>
					{ !loggedIn ?
						<SignInForm 	
							onClickGoogle={onClickGoogle}
							onClickFacebook = {onClickFacebook}
							onSubmitEmail = {onSubmitEmail}
							page = {page}
							formValue = {formValue}
						/>
						:
						<SignOut
							signOut={signOut}
						/>
					}
				</Grid>
		</Segment>
		<ErrorDisplay status={status} displayText={displayText} />				
	</div>
	)
}
