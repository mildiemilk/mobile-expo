import { Grid, Checkbox, Dropdown, Modal as SemanticModal, Icon, Header as SemanticHeader, Card } from 'semantic-ui-react'
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
import HeightDiv from '../atoms/HeightDiv'
import Head from './DefaultHead'
import Header from './Header'
import H3 from '../atoms/H3'
import Image from '../atoms/Image'

const memberHeader = {
	"name": "Name",
	"email":"Email",
	"shared":"Shared",
	"permission":"Admin",
}

const selectItem = {
	"admin":"admin",
	"member":"member",
	"freeze":"freeze"
}

const PasswordMatch = props =>	props.passwordconfirmationLength > 5  ?
	props.passwordLength === props.passwordconfirmationLength && props.passwordMatch ?
	null: <h3>Password do not match</h3> : null

const randomAnArray = array =>{
	let randomArray = []
	while(array.length > 0){
		let randomNumber = Math.floor(Math.random()*array.length)
		randomArray.push(array[randomNumber])
		array = [].concat(array.slice(0,randomNumber)).concat(array.slice(randomNumber+1,array.length))
	}
	return randomArray
}

const MemberRegisterForm = props => 
<div>
	<PasswordMatch {...props} />
	{
		props.member.error?
		<span>{props.member.error}</span>:null
	}
	<span style={{color:'red'}}>{props.member.keyIsValid ? '':'ชื่อต้องใช้ ตัวเลขหรือตัวอักษรภาษาอังกฤษเท่านั้น'}</span>
	<TextField labelFlexStart label="Member Name" name="name"/>
	<TextField labelFlexStart label="Member Password" name="password" type="password"/>
	<TextField labelFlexStart label="Password Confirmation" name="passwordconfirmation" type="password"/>
</div>

const MemberLoginForm = props => {
	const allMemberships = Object.keys(props.allMemberships).map( key => ({key:key, value:key, text:key}))
	return <div>
	{
		props.member.error?
		<span>{props.member.error}</span>:null
	}
	{
		props.signinMembershipSuccess?
		<H3>สมัครสมาชิกสำเร็จ</H3>:null
	}
	<H3>ชื่อสมาชิก</H3>
	<Dropdown onChange={e=>props.setChosenMembership(props.allMemberships[e.currentTarget.innerText])} placeholder='Membership' search selection options={allMemberships} />
	<H3>รหัสสมาชิก</H3>
	<TextField labelFlexStart name="password" type="password"/>
</div>}

const PermissionOption = props => 
<select value={props.member.permission} onChange={event=>props.setMemberPermission(props.member.userId, event.target.value)}>
	<option value="admin">Admin</option>
	<option value="member">Member</option>
	<option value="freeze">Freeze</option>
</select>

const addMember = props => <Wrapper>
	<H3>เพิ่มสมาชิก</H3>
	<TextField placeholder="user@email.com" name="newMemberEmail"/>
	<Button onClick={()=>props.addMemberByEmail(props.newMembershipEmail,props.user.membership)}>+เพิ่ม</Button>
	<ul>
	{
		props.member.addByEmail.map( email => <li>{email}</li> )
	}
	</ul>
</Wrapper>

const DeleteMembershipConfirm = props =>   <SemanticModal trigger={<a style={{padding:"3px 0 0 10px"}} href="#">ยกเลิกสมาชิก</a>} closeIcon>
<SemanticHeader icon='trash' content='ยกเลิกการเป็นสมาชิก' />
<SemanticModal.Content>
  <p>คุณยืนยันที่จะลบสถานะความเป็นสมาชิกของ{props.user.membership}</p>
</SemanticModal.Content>
<SemanticModal.Actions>
  <Button onClick={()=>props.removeUserMembership(props.user)} margin="0 0 5px 0">
	<Icon name='checkmark' /> ยืนยัน
  </Button>
</SemanticModal.Actions>
</SemanticModal>

const ChangeMembershipPassword = props => <SemanticModal trigger={<a style={{padding:"3px 0 0 10px"}} href="#">เปลี่ยนรหัสสมาชิก</a>} closeIcon>
<SemanticHeader icon='warning sign' content='เปลี่ยนพาสเวิด'/>
<SemanticModal.Content>
	<PasswordMatch {...props} />	
	<H3>ใส่รหัสใหม่ที่คุณต้องการเปลี่ยน(คนที่เป็นสมาชิกอยู่แล้วไม่ต้องใส่รหัสใหม่)</H3>
	<TextField labelFlexStart label="Member Password" name="password" type="password"/>
	<TextField labelFlexStart label="Password Confirmation" name="passwordconfirmation" type="password"/>
</SemanticModal.Content>
<SemanticModal.Actions>
	<Button onClick={()=>props.setNewMembershipPassword(props.user.membership, props.password)}>ยืนยัน</Button>
</SemanticModal.Actions>
</SemanticModal>

const ProductCard = props =>   <Card>
<Image src={props.productImages[0]} height="300px"/>
<Card.Content>
  <Card.Header>
	{props.productName}
  </Card.Header>
  <Card.Meta>
	<span>
	  {props.brandName}
	</span>
  </Card.Meta>
  <Card.Description>
	<p>ราคา:{props.price}</p>
  </Card.Description>
</Card.Content>
<Card.Content extra>
<ProductAction product={props} productId={props.productId} userUid={props.userUid} isSponsor={true}/>
</Card.Content>
</Card>

const constructMemberArray = (members, isAdmin, setMemberPermission) => convertObjectToArray(members).map(member=>isAdmin?addActionToMember(member, setMemberPermission):addPermissionToMember(member))
const addActionToMember = (member, setMemberPermission) =>({...member, permission:<PermissionOption member={member} setMemberPermission={setMemberPermission}/>})
const addPermissionToMember = (member) =>({...member, permission:<p>{member.permission}</p>})
const convertObjectToArray = object => Object.keys(object).map(key => ({...object[key], key}))

export default props => 
	<HeightDiv>
		<Head/>
		<Header 
			content={
				<Grid>
					<Grid.Row>
						<Grid.Column mobile={16} tablet={16} computer={4}>
							<Wrapper>
								{ !props.user.pending?
								<ProfileDetailDisplay
									profileImage={props.profile.profileImage}
									detail={props.detail}
									profile={props.profile}
									balance={props.user.wallet}
									userUid={props.user.uid}
									/>:
									<Icon loading name='spinner' size='massive'/>
								}
							</Wrapper>
						</Grid.Column>
						<Grid.Column mobile={16} tablet={16} computer={12}>
							<Wrapper>
								{ !props.user.pending?
								<Flex direction="row">
									{props.signinMembershipSuccess? <h3>สมัครสมาชิกสำเร็จ</h3>:null}
									<H3>คุณเป็น{props.allMemberships[props.user.membership] ? props.allMemberships[props.user.membership].creatorUid=== props.user.uid?'เจ้าของสมาชิก':'สมาชิกของ':null}:{props.user.membership|| 'คุณยังไม่เป็นสมาชิก'}</H3>
										{!props.user.membership?
											<Flex direction="row">
												<Modal context={<MemberLoginForm {...props} /> }
												action={<Button onClick={()=>props.loginMembership(props.chosenMembership, props.password, props.user)}>สมัครสมาชิก</Button>}
												>
													<Button margin="0px 0 0 10px">สมัครสมาชิก</Button>												
												</Modal>
												<Modal 
													context={<MemberRegisterForm {...props} />}
													action={<Button onClick={()=>props.saveMembership(props.name, props.password, props.user.uid)}>สมัครสมาชิก</Button>}
												>
													<Button margin="0px 0 0 10px" secondary>สร้างสมาชิก</Button>
												</Modal>
											</Flex>
											:<DeleteMembershipConfirm {...props}/>
										}
										{
											props.allMemberships[props.user.membership] && props.allMemberships[props.user.membership].creatorUid=== props.user.uid?
											<ChangeMembershipPassword {...props}/>:null
										}
									</Flex>:
									<Icon loading name='spinner' size='large'/>
									}
									{props.user.membership&& 
									<h3>Role:{props.member.members[props.user.uid]? props.member.members[props.user.uid].permission: null}</h3>
									}
								</Wrapper>
								<Wrapper>
								<h2>สมาชิก</h2>
								<JsonTable headerJson={memberHeader} bodyJsonArray={constructMemberArray(props.member.members, props.isAdmin, props.setMemberPermission)} footer={props.isAdmin?<tr><td style={{margin:"0", padding:"0"}} colSpan={Object.keys(memberHeader).length}><Modal context={addMember(props)}><Button margin="0" fullWidth height="100%">+ add member</Button></Modal></td></tr>:null}/>
								</Wrapper>
								<Wrapper>
								<h2>สินค้าของสมาชิก</h2>
								<Grid stackable stretched columns={3}>
								{
									randomAnArray(Object.keys(props.member.products)).map(key => <Grid.Column><ProductCard {...props.member.products[key]} key={key} userUid={props.user.uid} productId={key}/></Grid.Column>)
								}
								</Grid>
								</Wrapper>
						</Grid.Column>
				</Grid.Row>
			</Grid>
			}
			/>	
	</HeightDiv>

