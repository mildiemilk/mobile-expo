import { Grid } from 'semantic-ui-react'
import Head from './DefaultHead'
import Header from './Header'
import AddProduct from '../organisms/AddProduct'
import Flex from '../atoms/Flex'
import ItemCard from '../organisms/ItemCard'
import UserProfile from '../organisms/UserProfile'

export default ({user, userProducts, setProductStock}) => <div>
	<Head/>
	<Header/>
	<UserProfile name={user.name} tel={user.phone} shop={user.shop} email={user.email} balance={user.wallet} userUid={user.uid} />
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
</div>
