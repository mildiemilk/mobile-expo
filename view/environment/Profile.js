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
	<MediaQuery  minDeviceWidth={1224}>
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
				{!props.isView || (props.showView === 'first')?
					<ProfileProductOwnerPreview {...props}/>
					:null
				}
				{!props.isView || (props.showView === 'second')?
					<Wrapper maxWidth="94vw" bigScreenWidth="70vw">
						<H3>สินค้าที่คุณเป็นผู้แนะนำ{!props.isView? <a style={{ cursor: 'pointer', float: 'right', fontSize: '14px', fontWeight: 'normal' }} onClick={() => props.handleClickView('second')}>View all</a> : null}</H3>
						{Object.keys(props.sponsorProducts).length >0
						?Object.keys(props.sponsorProducts).length <= 3 || props.isView?	
						props.sponsorProducts&&
									Object.keys(props.sponsorProducts).reverse().map( 
										sponsorProductKey => 
											<div style={{display:'inline-block'}}><ItemCard 
												{...props}
												key={sponsorProductKey}
												isSponsor={true}
												product={props.sponsorProducts[sponsorProductKey]} 
												productKey={sponsorProductKey}
											/></div>
									) 
							: <Slider {...settings}>
							{ props.sponsorProducts &&
									Object.keys(props.sponsorProducts).reverse().map( sponsorProductKey => 
									<div><ItemCard 
											{...props}
											key={sponsorProductKey}
											isSponsor={true}
											product={props.sponsorProducts[sponsorProductKey]} 
										/></div>)
								}
							</Slider>
						: <DivNoContent>ยังไม่มีข้อมูลสินค้า</DivNoContent>}
					</Wrapper>
					:null
				}
			</div>
			}
	</MediaQuery>
	<MediaQuery maxDeviceWidth={1224}>
		{props.isView && <Button onClick={() => props.handleClickView('')}>Back</Button>}
		{props.isItemMobile && <div>
				{!props.isView || (showView === 'first')&&
				<Wrapper widthSmall="90vw" paddingRight="30px" minWidthMobile="90vw">
					<H3>สินค้าที่คุณเป็นเจ้าของ{!props.isView&& <a style={{ cursor: 'pointer', float: 'right', fontSize: '14px', fontWeight: 'normal' }} onClick={() => props.handleClickView('first')}>View all</a>}</H3>
						{Object.keys(props.userProducts).length >0?	
						props.isView?
						props.userProducts && 
								Object.keys(props.userProducts).reverse().map( userProductKey => 
										<div>
											<ItemCard 
												{...props}
												key={userProductKey} 
												product={props.userProducts[userProductKey]} 
												isSponsor={false}
											/>
										</div>
									) 
							:props.userProducts && Object.keys(props.userProducts).reverse().slice(0,5).map( userProductKey => 
									<div>
										<ItemCard 
											{...props}
											key={userProductKey} 
											product={props.userProducts[userProductKey]} 
											productKey={userProductKey}
											isSponsor={false}
										/>
									</div>)
						:<DivNoContent>ยังไม่มีข้อมูลสินค้า</DivNoContent>}
				</Wrapper>
				}
				{!props.isView || (props.showView === 'second')&&
				<Wrapper widthSmall="90vw" paddingRight="30px" minWidthMobile="90vw">
					<H3>สินค้าที่คุณเป็นผู้แนะนำ{!props.isView&& <a style={{ cursor: 'pointer', float: 'right', fontSize: '14px', fontWeight: 'normal' }} onClick={() => props.handleClickView('second')}>View all</a>}</H3>
						{Object.keys(props.sponsorProducts).length >0
						?props.isView
						?props.sponsorProducts && Object.keys(props.sponsorProducts).reverse().map( sponsorProductKey => <div><ItemCard 
									key={sponsorProductKey}
									isSponsor={true}
									product={props.sponsorProducts[sponsorProductKey]}
									productKey={sponsorProductKey}
									setProductMembership={setProductMembership}
									setProductActive={setProductActive}
								/></div>)
						:props.sponsorProducts && Object.keys(props.sponsorProducts).reverse().slice(0,5).map( 
							sponsorProductKey => <div><ItemCard 
									{...props}
									key={sponsorProductKey}
									isSponsor={true}
									product={props.sponsorProducts[sponsorProductKey]} 
									productKey={sponsorProductKey}
								/></div>) 
						:<DivNoContent>ยังไม่มีข้อมูลสินค้า</DivNoContent>}
				</Wrapper>}
				{!props.isView &&	<Button onClick={props.handleItemCard} margin="10px 0px">Back</Button>}
		</div>
		}
		{props.isTableMobile&&
			<div>
				<ProfileTable
					{...props}
					table={table !== undefined ?!isView? table.slice(0,3) : table: undefined}
				/>
				{!props.isView&&<Button onClick={handleTableMobile} margin="10px 0px">Back</Button>}
			</div>
		}
	</MediaQuery>
</Flex>

