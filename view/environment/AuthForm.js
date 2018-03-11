import Head from './DefaultHead'
import { Button, Icon, Grid, Form, Divider } from 'semantic-ui-react'
import Header from './Header'
import SignInForm from '../organisms/SignInForm'
import SignOut from '../organisms/SignOut'
import ErrorDisplay from '../organisms/ErrorDisplay'
import Wrapper from '../atoms/Wrapper'
import Flex from '../atoms/Flex'
import HeightDiv from '../atoms/HeightDiv'
export default ({
	onClickGoogle, 
	onClickFacebook,
	onSubmitEmail,
	signOut, 
	page,
	loggedIn,
	formValue,
	status ='',
	helperText
}) => {
	return (<HeightDiv>
		<Head />
		<Header content= {
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
			<ErrorDisplay status={status} displayText={helperText} />				
			</Flex>
		}/>
	</HeightDiv>
	)
}
