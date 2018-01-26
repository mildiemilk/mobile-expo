import AddProduct from '../organisms/AddProduct'
import Flex from '../atoms/Flex'
import ItemCard from '../organisms/ItemCard'
import UserProfile from '../organisms/UserProfile'
import ProfileTable from '../environment/ProfileTable'
import ProfileDetail from '../environment/ProfileDetail'
import productimages from '../../lib/reducers/productimages';

export default ({user, userProducts, setProductStock, table, userUid, setOrderStatus, profile, handleEdit, isEdit, detail, handleSave, handleImageChange, profileImage}) =>
<Flex direction="row" >
	<ProfileDetail
		profileImage={profileImage}
		handleImageChange={handleImageChange}
		handleSave={handleSave}
		detail={detail}
		isEdit={isEdit}
		profile={profile}
		handleEdit={handleEdit}
		balance={user.wallet}
		userUid={user.uid}
	/>
	<ProfileTable
		table={table}
		userUid={user.uid}
		setOrderStatus={setOrderStatus}
	/>
	<Flex>
		{ userProducts ? 
			Object.keys(userProducts).map( userProductKey => {
				return (<ItemCard 
					key={userProductKey}
					userProductKey={userProductKey} 
					userUid={user.uid} 
					userProduct={userProducts[userProductKey]} 
					productKey={userProductKey}
					setProductStock={setProductStock}
				/>)
			}) : null
			}
			<AddProduct/>
	</Flex>
</Flex>

