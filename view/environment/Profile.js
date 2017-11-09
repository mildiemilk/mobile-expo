import { Grid } from 'semantic-ui-react'
import ItemCard from '../organisms/ItemCard'
import Head from './DefaultHead'
import Header from './Header'
import H3 from '../atoms/H3'
import styled from 'styled-components'
import color from '../../static/json/color.json'
import Wrapper from '../atoms/Wrapper'
import Button from '../atoms/Button'
import AddProduct from '../organisms/AddProduct'
import Flex from '../atoms/Flex'

export default ({user, userProducts, setProductStock}) => <div>
	<Head/>
	<Header/>
	{user.name}
	<div>
		<h2>{user.email}</h2>
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
</div>
