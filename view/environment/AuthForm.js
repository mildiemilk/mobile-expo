import Head from './DefaultHead'
import { Button, Icon, Grid, Form, Divider } from 'semantic-ui-react'
import Header from './Header'
import SignInForm from '../organisms/SignInForm'
import SignOut from '../organisms/SignOut'
import ErrorDisplay from '../organisms/ErrorDisplay'
import Wrapper from '../atoms/Wrapper'
import Flex from '../atoms/Flex'

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
		<Flex center width="100vw" direction="row"> 
		<Wrapper minWidth="" padding="25px 40px 25px 50px" maxWidth="400px">
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
		</Wrapper>
		<ErrorDisplay status={status} displayText={displayText} />				
		</Flex>
	</div>
	)
}
