import Flex from '../atoms/Flex'
import Wrapper from '../atoms/Wrapper'
import Button from '../atoms/Button'
import ProfileProductOwnerPreview from '../organisms/ProfileProductOwnerPreview'
import ProfileProductSponsorPreview from '../organisms/ProfileProductSponsorPreview';
import ProfileTable from '../environment/ProfileTable'

const requestedMembershipView = (members, saveRequestedByEmailUserMembership, user) => <Wrapper>
	<H3>มีคนขอร้องให้คุณเป็นสมาชิก!</H3>
	<h4>คลิกที่สมาชิกเพื่อทำการเข้าร่วมการเป็นสมาชิก</h4>
	{
		members.map(member => <Button onClick={()=>saveRequestedByEmailUserMembership(user, member)}>{member}</Button>)
	}
</Wrapper>

export default props =>
<Flex direction="column" margin="0px 7px">
		{!props.isUserMembership&&
			<div>
				{
				props.requestMembership && props.requestMembership.length > 0 &&
					requestedMembershipView(props.requestMembership, props.saveRequestedByEmailUserMembership, props.user)
				}
			</div>}

		{props.isView? <Button secondary width="70px" onClick={() => props.handleClickView('')}>Back</Button> : null}
		{props.isItemCard?
			<ProfileTable
				{...props}
				table={props.table !== undefined ?!props.isView? props.table.slice(0,3) : props.table: undefined}
			/>
			:<div style={{flexGrow:"2"}}>
				{(!props.isView || (props.showView === 'first'))&&<ProfileProductOwnerPreview {...props}/>}
				{(!props.isView || (props.showView === 'second'))&&<ProfileProductSponsorPreview {...props} />}
				<Button secondary width="70px" onClick={() => handleProfileMobile}>Back</Button>					
			</div>
			}
</Flex>

