import { Grid } from 'semantic-ui-react'
import Slider from 'react-slick'
import MediaQuery from 'react-responsive'
import styled from 'styled-components'
import AddProduct from '../organisms/AddProduct'
import Flex from '../atoms/Flex'
import ItemCard from '../organisms/ItemCard'
import UserProfile from '../organisms/UserProfile'
import ProfileTable from '../environment/ProfileTable'
import ProfileDetail from '../environment/ProfileDetail'
import productimages from '../../lib/reducers/productimages'
import H3 from '../atoms/H3'
import Wrapper from '../atoms/Wrapper'
import Button from '../atoms/Button'
import member from '../../lib/reducers/member';
import ProfileProductOwnerPreview from '../organisms/ProfileProductOwnerPreview'
import ProfileProductSponsorPreview from '../organisms/ProfileProductSponsorPreview';
import ProfileMobileView from '../organisms/ProfileMobileView';

const DivNoContent = styled.div`
	background-color: #f2f2f2;
	padding: 30px;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 8px;
	font-size: 15px;
`

const SampleNextArrow = ({className, style, onClick} ) =>
    <div
      className={className}
      style={{...style, display: 'block', background: 'gray', color:'gray', borderRadius:'10px'}}
      onClick={onClick}
    ></div>

const SamplePrevArrow = ({className, style, onClick}) => 
    <div
      className={className}
      style={{...style, display: 'block', background: 'gray', color:'gray', borderRadius:'10px'}}
      onClick={onClick}
    ></div>

const settings = {
	dots: true,
	slidesToShow: 4,
	slidesToScroll: 3,
	nextArrow: <SampleNextArrow />,
	prevArrow: <SamplePrevArrow />
};

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
			{props.isItemCard
			?<ProfileTable
			{...props}
			table={props.table !== undefined ?!props.isView? props.table.slice(0,3) : props.table: undefined}
			/>
			:<div style={{flexGrow:"2"}}>
				{(!props.isView || (props.showView === 'first'))&&<ProfileProductOwnerPreview {...props}/>}
				{(!props.isView || (props.showView === 'second'))&&<ProfileProductSponsorPreview {...props} />}
			</div>
			}
</Flex>

