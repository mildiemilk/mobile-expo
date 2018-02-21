import Wrapper from '../atoms/Wrapper'
import Field from '../atoms/TextField'
import Button from '../atoms/Button'

export default props => <Wrapper>
	<h3>Membership Program</h3>
	<h4>member register ? {props.member.register? 'true': 'false'}</h4>
	<Field label="Membership" labelFlexStart />
	<Field label="Membership Password" labelFlexStart />
	{props.member.register?
	<div>
		<Field label="Password Confirmation" labelFlexStart />
		<Button>Register Membership</Button>
		<br/>
		<a onClick={()=>props.signinMember()} href="#">Sign in</a>	
	</div>:
	<div>
		<Button>Signin Membership</Button>
		<br/>
		<a onClick={()=>props.registerMember()} href="#">Register Membership</a>
	</div>
	}
</Wrapper>
