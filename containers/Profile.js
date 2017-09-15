import { Grid, Card } from 'semantic-ui-react'
import ItemCard from '../components/ItemCard'
import Head from './DefaultHead'
import Header from './Header'
import { H3 } from '../components/Styled'

export default ({user, userProducts}) => <div>
	<Head/>
	<Header/>
	{user.name}
	<h2>{user.email}</h2>
	<div>
		<div>
			<div>
					{ userProducts ? 
						Object.keys(userProducts).map( userProductKey => {
							return (<ItemCard 
								userProductKey={userProductKey} 
								userUid={user.uid} 
								userProduct={userProducts[userProductKey]} 
								productKey={userProductKey}
								key={userProductKey}
							/>)
						}) : null
					}
			</div>
		</div>
	</div>
</div>
