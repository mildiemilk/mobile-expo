import Head from './DefaultHead'
import { Button, Grid, Form, Divider, Icon } from 'semantic-ui-react'
import Header from './Header'
import SignInForm from '../organisms/SignInForm'
import SignOut from '../organisms/SignOut'
import ErrorDisplay from '../organisms/ErrorDisplay'
import Wrapper from '../atoms/Wrapper'
import Flex from '../atoms/Flex'
import HeightDiv from '../atoms/HeightDiv'
import H3 from '../atoms/H3'
import Router from 'next/router'

export default ({
	onClickGoogle, 
	onClickFacebook,
	onSubmitEmail,
	signOut, 
	page,
	loggedIn,
	formValue,
	status ='',
	helperText,
	pending
}) => {
	loggedIn? Router.push('/profile'):null
	return (<HeightDiv>
		<Head />
		<Header content= {
		!loggedIn ?
			<Flex center width="100vw" direction="row"> 
				<Wrapper minWidth="" padding="25px 40px 25px 50px" maxWidth="400px">
					{pending?<Wrapper><H3>Loading...</H3><Icon loading name='spinner' size="big" /></Wrapper>:null}
					<SignInForm 	
						onClickGoogle={onClickGoogle}
						onClickFacebook = {onClickFacebook}
						onSubmitEmail = {onSubmitEmail}
						page = {page}
						formValue = {formValue}
					/>
				</Wrapper>
				<ErrorDisplay status={status} displayText={helperText} />	
			</Flex>:<H3>Log in เรียบร้อยแล้ว รอสักครู่เพื่อไปยังโปรไฟล์ :)</H3>
		}/>
	</HeightDiv>
	)
}
