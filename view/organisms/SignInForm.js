import { Button, Icon, Divider, Form } from 'semantic-ui-react'
import TextField from '../atoms/TextField'

export default ({onClickGoogle,onClickFacebook,onSubmitEmail, page, formValue}) =>
<div>
		<h2 style={{marginLeft:'10px'}}>{ page === 'login'? 'Login':'Registration'}</h2>
		<TextField
			type="email"
			name="email"
			label="อีเมล"
			placeholder="example@example.com"
			width="100%"
		/>

			<TextField
				type="password"
				name="password"
				label="รหัสผ่าน"
				placeholder="password"
				width="100%"
			/>
			
		{
			page !== 'login' ?
			<TextField
				type="password"
				name="passwordConfirm"
				label="ยืนยันรหัสผ่าน"
				placeholder="password confirmation"
				width="100%"
			/>
			:null
		}

			<Button style={{width:'100%', marginLeft:'10px'}} size='medium' primary onClick={()=>onSubmitEmail(formValue? formValue.email : null, formValue? formValue.password: null)}>
				<Icon name='user'></Icon> 
				{page === 'login' ? <span>ล๊อกอิน</span> : <span>สมัครบริการ</span>}
			</Button>
	<Divider horizontal>Or</Divider>
			<Button 
				size='medium' 
				color='facebook' 
				style={{width:'100%', marginLeft:'10px'}}				
				onClick={()=>onClickFacebook()}>
				<Icon name='facebook' /> 
				{page === 'login' ?'ล๊อกอินด้วย facebook':'สมัครด้วย with facebook'}
			</Button>
	<Divider horizontal>Or</Divider>					
			<Button 
				size='medium' 
				style={{width:'100%', marginLeft:'10px'}}
				color='google plus'  
				onClick={()=>onClickGoogle()}>
				<Icon name='google plus' /> 
				{page === 'login' ?'ล๊อกอินด้วย google':'สมัครด้วย google'}
			</Button>
</div>
