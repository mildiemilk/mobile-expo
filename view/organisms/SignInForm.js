import { Button, Icon, Divider, Form } from 'semantic-ui-react'
import TextField from '../atoms/TextField'

export default ({onClickGoogle,onClickFacebook,onSubmitEmail, page, formValue}) =>
<form>
		<h2 style={{marginLeft:'10px'}}>{ page === 'login'? 'Login':'Registration'}</h2>
		<TextField
			type="email"
			name="email"
			label="email"
			placeholder="example@example.com"
			width="100%"
		/>

			<TextField
				type="password"
				name="password"
				label="password"
				placeholder="password"
				width="100%"
			/>
			
		{
			page !== 'login' ?
			<TextField
				type="password"
				name="passwordConfirm"
				label="password confirmation"
				placeholder="password confirmation"
				width="100%"
			/>
			:null
		}

			<Button style={{width:'100%', marginLeft:'10px'}} size='medium' primary onClick={()=>onSubmitEmail(formValue? formValue.email : null, formValue? formValue.password: null)}>
				<Icon name='user'></Icon> 
				{page === 'login' ? <span>Sign in</span> : <span>Register</span>}
			</Button>
	<Divider horizontal>Or</Divider>
			<Button 
				size='medium' 
				color='facebook' 
				style={{width:'100%', marginLeft:'10px'}}				
				onClick={()=>onClickFacebook()}>
				<Icon name='facebook' /> 
				Sign in with facebook
			</Button>
	<Divider horizontal>Or</Divider>					
			<Button 
				size='medium' 
				style={{width:'100%', marginLeft:'10px'}}
				color='google plus'  
				onClick={()=>onClickGoogle()}>
				<Icon name='google plus' /> 
				Sign in with google
			</Button>
</form>
