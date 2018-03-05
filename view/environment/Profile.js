import { Grid } from 'semantic-ui-react'
import Carousel from 'nuka-carousel'
// import styled from 'styled-components'
import Slider from 'react-slick'
import AddProduct from '../organisms/AddProduct'
import Flex from '../atoms/Flex'
import ItemCard from '../organisms/ItemCard'
import UserProfile from '../organisms/UserProfile'
import ProfileTable from '../environment/ProfileTable'
import ProfileDetail from '../environment/ProfileDetail'
import productimages from '../../lib/reducers/productimages';
import H3 from '../atoms/H3'
import Wrapper from '../atoms/Wrapper';

// const CarouselEdit = styled(Carousel)`
// 	&&&{
// 		height: 700px;
// 	}
// `
const settings = {
	dots: true,
	slidesToShow: 3,
	slidesToScroll: 1
};
export default ({user, userProducts, setProductStock, table, userUid, setOrderStatus, profile, handleEdit, isEdit, detail, handleSave, handleImageChange, profileImage, sponsorEmail, setProductSponsor, getProductSponsor, sponsorProducts, setProductActive, isItemCard}) =>
<Flex direction="row" margin="0px 7px">
	<Grid>
		<Grid.Column mobile={12} tablet={12} computer={12}>
		{isItemCard
			?<ProfileTable
				table={table}
				userUid={user.uid}
				setOrderStatus={setOrderStatus}
			/>
			:<div>
				<Wrapper maxWidth="1350px">
					<H3>สินค้าที่คุณเป็นเจ้าของ</H3>
					<Slider {...settings}>
						{ userProducts ? 
							Object.keys(userProducts).map( userProductKey => {
								return (
									<div>
										<ItemCard 
											key={userProductKey}
											userUid={user.uid} 
											Product={userProducts[userProductKey]} 
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
				</Wrapper>
				<Wrapper maxWidth="1350px">
					<H3>สินค้าที่คุณเป็นผู้แนะนำ</H3>
					<Slider {...settings}>
						{ sponsorProducts ? 
							Object.keys(sponsorProducts).map( sponsorProductKey => {
								return (<div><ItemCard 
									key={sponsorProductKey}
									isSponsor={true}
									userUid={user.uid}
									Product={sponsorProducts[sponsorProductKey]} 
									productKey={sponsorProductKey}
								/></div>)
							}) : null
							}
					</Slider>
				</Wrapper>
			</div>
			}
		</Grid.Column>
	</Grid>
</Flex>

