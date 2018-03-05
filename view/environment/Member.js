import { Grid, Checkbox } from 'semantic-ui-react'
import Wrapper from '../atoms/Wrapper'
import Field from '../atoms/TextField'
import Button from '../atoms/Button'
import UserProfile from '../organisms/UserProfile'
import ProfileTable from '../environment/ProfileTable'
import ProfileDetailDisplay from '../organisms/ProfileDetailDisplay'
import JsonTable from '../organisms/JsonTable'
import Modal from '../molecules/Modal'
import Flex from '../atoms/Flex'
import TextField from '../atoms/TextField'
import ProductAction from '../molecules/ProductAction'
import Select from '../molecules/Select'

const memberHeader = {
	"name": "Name",
	"email":"Email",
	"shared":"Shared",
	"permission":"Admin",
}

const productHeader = {
	"productName": "Name",
	"shared": "Shared",
	"action": "Action"
}

const selectItem = {
	"admin":"admin",
	"member":"member",
	"freeze":"freeze"
}

const MemberRegisterForm = props => 
<div>
	{props.passwordconfirmationLength > 5  ?
		props.passwordLength === props.passwordconfirmationLength && props.passwordMatch ?
		null: <h3>Password do not match</h3> : null
	}
	{
		props.member.error?
		<span>{props.member.error}</span>:null
	}
	<span style={{color:'red'}}>{props.member.keyIsValid ? '':'ชื่อต้องใช้ ตัวเลขหรือตัวอักษรภาษาอังกฤษเท่านั้น'}</span>
	<TextField labelFlexStart label="Member Name" name="name"/>
	<TextField labelFlexStart label="Member Password" name="password" type="password"/>
	<TextField labelFlexStart label="Password Confirmation" name="passwordconfirmation" type="password"/>
	<Button fullWidth onClick={()=>props.saveMembership(props.name, props.password, props.user.uid)}>สร้างสมาชิก</Button>
</div>

const MemberLoginForm = props => 
<div>
	{
		props.member.error?
		<span>{props.member.error}</span>:null
	}
	<TextField labelFlexStart label="Member Name" name="name"/>
	<TextField labelFlexStart label="Member Password" name="password" type="password"/>
	<Button fullWidth onClick={()=>props.loginMembership(props.name, props.password, props.user)}>สมัครสมาชิก</Button>	
</div>

const PermissionOption = props => 
<select value={props.member.permission} onChange={event=>props.setMemberPermission(props.member.userId, event.target.value)}>
	<option value="admin">Admin</option>
	<option value="member">Member</option>
	<option value="freeze">Freeze</option>
</select>

const constructMemberArray = (members, isAdmin, setMemberPermission) => convertObjectToArray(members).map(member=>isAdmin?addActionToMember(member, setMemberPermission):null)
const addActionToMember = (member, setMemberPermission) =>({...member, permission:<PermissionOption member={member} setMemberPermission={setMemberPermission}/>})
const constructProductArray = (userId,products) => convertObjectToArray(products).map(product=>addActionToProduct(userId,product))
const addActionToProduct = (userId,product) => ({...product, action:<ProductAction product={product} productId={product.key} userUid={userId} isSponsor={true}/>})
const convertObjectToArray = object => Object.keys(object).map(key => ({...object[key], key}))

export default props => 
	<Grid>
		<Grid.Row>
				<Grid.Column mobile={16} tablet={16} computer={4}>
					<Wrapper>
						<ProfileDetailDisplay
							profileImage={props.profile.profileImage}
							detail={props.detail}
							profile={props.profile}
							balance={props.user.wallet}
							userUid={props.user.uid}
							/>
					</Wrapper>
				</Grid.Column>
				<Grid.Column mobile={16} tablet={16} computer={12}>
					<Wrapper>
						<Flex direction="row">
						<h3>Your Membership:{props.user.membership|| 'คุณยังไม่เป็นสมาชิก'}</h3>
							{!props.user.membership?
								<Flex direction="row">
									<Modal context={<MemberLoginForm {...props}/>}>
										<Button margin="10px 0 0 0">สมัครสมาชิก</Button>
									</Modal>
									<Modal context={<MemberRegisterForm {...props} />}>
										<Button margin="10px 0 0 10px" onClick={()=>props.saveMembership(props.member.name,props.password,props.user.uid)}>สร้างสมาชิก</Button>
									</Modal>
								</Flex>
								:null
							}
						</Flex>
						{props.user.membership?
							<h3>Role:{props.member.members[props.user.uid]? props.member.members[props.user.uid].permission: null}</h3>:null
						}
					</Wrapper>
					<Wrapper>
					<h2>Member</h2>
					<JsonTable headerJson={memberHeader} bodyJsonArray={constructMemberArray(props.member.members, props.isAdmin, props.setMemberPermission)} footer={props.isAdmin?<tr><td style={{margin:"0", padding:"0"}} colSpan={Object.keys(memberHeader).length}><Button margin="0" fullWidth height="100%">+ add member</Button></td></tr>:null}/>
					</Wrapper>
					<Wrapper>
					<h2>Products</h2>
					<JsonTable headerJson={productHeader} bodyJsonArray={constructProductArray(props.user.uid,props.member.products)}/>
					</Wrapper>
				</Grid.Column>
		</Grid.Row>
	</Grid>
