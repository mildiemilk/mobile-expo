import { Button, Icon, Divider, Form } from 'semantic-ui-react'
import TextField from '../atoms/TextField'
import styled from 'styled-components'

const Header = styled.h1`
font-family: 'Athiti',sans-serif;
font-weight:300;
font-size:300%;
color:${props=>props.color?props.color:'black'};
`

export default ({onClickGoogle,onClickFacebook,onSubmitEmail, page, formValue, color}) =>
<div>
		<Header color={color}>{ page === 'login'? 'ล๊อกอิน':'สมัครเลย!'}</Header>
		<TextField
			color={color}
			type="email"
			name="email"
			label="อีเมล"
			placeholder="example@example.com"
			width="100%"
		/>

			<TextField
				color={color}
				type="password"
				name="password"
				label="รหัสผ่าน"
				placeholder="password"
				width="100%"
			/>
			
		{
			page !== 'login' ?
			<TextField
				color={color}
				type="password"
				name="passwordConfirm"
				label="ยืนยันรหัสผ่าน"
				placeholder="password confirmation"
				width="100%"
			/>
			:null
		}

			<Button id='loginButton' style={{width:'100%'}} size='medium' primary onClick={()=>onSubmitEmail(formValue? formValue.email : null, formValue? formValue.password: null)}>
				<Icon name='user'></Icon> 
				{page === 'login' ? <span>ล๊อกอิน</span> : <span>สมัครบริการ</span>}
			</Button>
	<Divider horizontal>Or</Divider>
			<Button 
				size='medium' 
				color='facebook' 
				style={{width:'100%'}}				
				onClick={()=>onClickFacebook()}>
				<Icon name='facebook' /> 
				{page === 'login' ?'ล๊อกอินด้วย facebook':'สมัครด้วย with facebook'}
			</Button>
	<Divider horizontal>Or</Divider>					
			<Button 
				size='medium' 
				style={{width:'100%'}}
				color='google plus'  
				onClick={()=>onClickGoogle()}>
				<Icon name='google plus' /> 
				{page === 'login' ?'ล๊อกอินด้วย google':'สมัครด้วย google'}
			</Button>
</div>
