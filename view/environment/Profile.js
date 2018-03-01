import { Grid } from 'semantic-ui-react'
import Carousel from 'nuka-carousel'
// import styled from 'styled-components'
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
};
export default ({user, userProducts, setProductStock, table, userUid, setOrderStatus, profile, handleEdit, isEdit, detail, handleSave, handleImageChange, profileImage, sponsorEmail, setProductSponsor, getProductSponsor, sponsorProducts, setProductActive, isItemCard}) =>
<Flex direction="row" >
	<Grid>
		<Grid.Column mobile={12} tablet={12} computer={12}>
		{isItemCard
			?<ProfileTable
				table={table}
				userUid={user.uid}
				setOrderStatus={setOrderStatus}
			/>
			:<div>
				<Wrapper>
					<H3>สินค้าที่คุณเป็นเจ้าของ</H3>
					<Carousel slidesToShow={4}  slidesToScroll={3} cellSpacing={10}  speed={200} dragging={true}>
					{ userProducts ? 
						Object.keys(userProducts).map( userProductKey => {
							return (<ItemCard 
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
							/>)
						}) : null
						}
					</Carousel>
				</Wrapper>
				<Wrapper>
					<H3>สินค้าที่คุณเป็นผู้แนะนำ</H3>
					<Flex flexGrow="1" direction="row">
					{console.log('sponsorProduct==>', sponsorProducts)}
						{ sponsorProducts ? 
							Object.keys(sponsorProducts).map( sponsorProductKey => {
								return (<ItemCard 
									key={sponsorProductKey}
									isSponsor={true}
									userUid={user.uid}
									Product={sponsorProducts[sponsorProductKey]} 
									productKey={sponsorProductKey}
								/>)
							}) : null
							}
					</Flex>
				</Wrapper>
			</div>
			}
		</Grid.Column>
	</Grid>
</Flex>

