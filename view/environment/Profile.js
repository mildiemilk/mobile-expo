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

const DivNoContent = styled.div`
	background-color: #f2f2f2;
	padding: 30px;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 8px;
	font-size: 15px;
`
const settings = {
	dots: true,
	slidesToShow: 3,
	slidesToScroll: 1
};
export default ({user, userProducts, setProductStock, table, userUid, setOrderStatus, profile, handleEdit, isEdit, detail, handleSave, handleImageChange, profileImage, sponsorEmail, setProductSponsor, getProductSponsor, sponsorProducts, setProductActive, isItemCard, isItemMobile, isTableMobile,  handleClickView, isView, showView, handleItemCard, handleTableMobile, isUserMembership, setProductMembership}) =>
<Flex direction="column" margin="0px 7px">
	<MediaQuery  minDeviceWidth={1224}>
		{isView? <Button width="70px" onClick={() => handleClickView('')}>Back</Button> : null}
			{isItemCard
			?<ProfileTable
				table={table !== undefined ?!isView? table.slice(0,3) : table: undefined}
				userUid={user.uid}
				setOrderStatus={setOrderStatus}
				isView={isView}
				showView={showView}
				handleClickView={handleClickView}
			/>
			:<div style={{flexGrow:"2"}}>
				{!isView || (showView === 'first')?
					<Wrapper maxWidth="94vw" bigScreenWidth="70vw">
						<H3>สินค้าที่คุณเป็นเจ้าของ{!isView? <a style={{ cursor: 'pointer', float: 'right', fontSize: '14px', fontWeight: 'normal' }} onClick={() => handleClickView('first')}>View all</a> : null}</H3>
						{Object.keys(userProducts).length >0
						?Object.keys(userProducts).length <= 3 || isView
							?	userProducts ? 
								Object.keys(userProducts).reverse().map( userProductKey => {
								return (
									<div style={{display:'inline-block'}}>
										<ItemCard 
											key={userProductKey}
											userUid={user.uid} 
											product={userProducts[userProductKey]} 
											productKey={userProductKey}
											setProductStock={setProductStock}
											sponsorEmail={sponsorEmail}
											setProductSponsor={setProductSponsor}
											getProductSponsor={getProductSponsor}
											isSponsor={false}
											setProductActive={setProductActive}
											isUserMembership={isUserMembership}
											setProductMembership={setProductMembership}
										/>
									</div>)
								}) : null
							: <Slider {...settings}>
							{ userProducts ? 
									Object.keys(userProducts).reverse().map( userProductKey => {
										return (
											<div>
												<ItemCard 
													key={userProductKey}
													userUid={user.uid} 
													product={userProducts[userProductKey]} 
													productKey={userProductKey}
													setProductStock={setProductStock}
													sponsorEmail={sponsorEmail}
													setProductSponsor={setProductSponsor}
													getProductSponsor={getProductSponsor}
													isSponsor={false}
													setProductActive={setProductActive}
												/>
											</div>)
										}) : null
									}
							</Slider>
					: <DivNoContent>ยังไม่มีข้อมูลสินค้า</DivNoContent>}		
					</Wrapper>
					:null
				}
				{!isView || (showView === 'second')?
					<Wrapper maxWidth="94vw" bigScreenWidth="70vw">
						<H3>สินค้าที่คุณเป็นผู้แนะนำ{!isView? <a style={{ cursor: 'pointer', float: 'right', fontSize: '14px', fontWeight: 'normal' }} onClick={() => handleClickView('second')}>View all</a> : null}</H3>
						{Object.keys(sponsorProducts).length >0
						?Object.keys(sponsorProducts).length <= 3 || isView
							?	sponsorProducts 
								?
									Object.keys(sponsorProducts).reverse().map( sponsorProductKey => {
										return (<div style={{display:'inline-block'}}><ItemCard 
											key={sponsorProductKey}
											isSponsor={true}
											userUid={user.uid}
											product={sponsorProducts[sponsorProductKey]} 
											productKey={sponsorProductKey}
										/></div>)
									}) 
								: null
							: <Slider {...settings}>
							{ sponsorProducts 
								?
									Object.keys(sponsorProducts).reverse().map( sponsorProductKey => {
										return (<div><ItemCard 
											key={sponsorProductKey}
											isSponsor={true}
											userUid={user.uid}
											product={sponsorProducts[sponsorProductKey]} 
											productKey={sponsorProductKey}
										/></div>)
									}) 
								: null
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
		{isView? <Button onClick={() => handleClickView('')}>Back</Button> : null}
		{isItemMobile 
			? <div>
				{!isView || (showView === 'first')?
				<Wrapper widthSmall="90vw" paddingRight="30px" minWidthMobile="90vw">
					<H3>สินค้าที่คุณเป็นเจ้าของ{!isView? <a style={{ cursor: 'pointer', float: 'right', fontSize: '14px', fontWeight: 'normal' }} onClick={() => handleClickView('first')}>View all</a> : null}</H3>
						{Object.keys(userProducts).length >0
						?	isView
							?userProducts 
								? Object.keys(userProducts).reverse().map( userProductKey => {
									return (
										<div>
											<ItemCard 
												key={userProductKey}
												userUid={user.uid} 
												product={userProducts[userProductKey]} 
												productKey={userProductKey}
												setProductStock={setProductStock}
												sponsorEmail={sponsorEmail}
												setProductSponsor={setProductSponsor}
												getProductSponsor={getProductSponsor}
												isSponsor={false}
												setProductActive={setProductActive}
											/>
										</div>)
									}) 
								: null
							:userProducts 
						? Object.keys(userProducts).reverse().slice(0,5).map( userProductKey => {
								return (
									<div>
										<ItemCard 
											key={userProductKey}
											userUid={user.uid} 
											product={userProducts[userProductKey]} 
											productKey={userProductKey}
											setProductStock={setProductStock}
											sponsorEmail={sponsorEmail}
											setProductSponsor={setProductSponsor}
											getProductSponsor={getProductSponsor}
											isSponsor={false}
											setProductActive={setProductActive}
										/>
									</div>)
								}) : null
						:<DivNoContent>ยังไม่มีข้อมูลสินค้า</DivNoContent>}
				</Wrapper>
				: null
				}
				{!isView || (showView === 'second')?
				<Wrapper widthSmall="90vw" paddingRight="30px" minWidthMobile="90vw">
					<H3>สินค้าที่คุณเป็นผู้แนะนำ{!isView? <a style={{ cursor: 'pointer', float: 'right', fontSize: '14px', fontWeight: 'normal' }} onClick={() => handleClickView('second')}>View all</a> : null}</H3>
						{Object.keys(sponsorProducts).length >0
						?isView
						?sponsorProducts 
							? Object.keys(sponsorProducts).reverse().map( sponsorProductKey => {
								return (<div><ItemCard 
									key={sponsorProductKey}
									isSponsor={true}
									userUid={user.uid}
									product={sponsorProducts[sponsorProductKey]} 
									productKey={sponsorProductKey}
								/></div>)
							}) 
						: null
						:sponsorProducts 
						? Object.keys(sponsorProducts).reverse().slice(0,5).map( sponsorProductKey => {
								return (<div><ItemCard 
									key={sponsorProductKey}
									isSponsor={true}
									userUid={user.uid}
									product={sponsorProducts[sponsorProductKey]} 
									productKey={sponsorProductKey}
								/></div>)
							}) 
						: null
						:<DivNoContent>ยังไม่มีข้อมูลสินค้า</DivNoContent>}
				</Wrapper>
				: null}
				{!isView
				?	<Button onClick={handleItemCard} margin="10px 0px">Back</Button>
				: null
				}	
		</div> : null
		}
		{isTableMobile&&
			<div>
				<ProfileTable
					isView={isView}
					showView={showView}
					handleClickView={handleClickView}
					table={table !== undefined ?!isView? table.slice(0,3) : table: undefined}
					table={table}
					userUid={user.uid}
					setOrderStatus={setOrderStatus}
				/>
				{!isView
				?<Button onClick={handleTableMobile} margin="10px 0px">Back</Button>
				:null
				}
			</div>
		}
	</MediaQuery>
</Flex>

