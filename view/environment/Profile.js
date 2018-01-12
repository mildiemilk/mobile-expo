import { Grid } from 'semantic-ui-react'
import AddProduct from '../organisms/AddProduct'
import Flex from '../atoms/Flex'
import ItemCard from '../organisms/ItemCard'
import UserProfile from '../organisms/UserProfile'

export default ({user, userProducts, setProductStock}) => <div>

	<Flex>
		{ userProducts ? 
			Object.keys(userProducts).map( userProductKey => {
				return (<ItemCard 
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
</div>
