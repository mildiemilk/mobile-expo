import { Grid, Card } from 'semantic-ui-react'
import ItemCard from '../components/ItemCard'
import Head from './DefaultHead'
import Header from './Header'
import { H3 } from '../components/Styled'
import styled from 'styled-components'

const Container = styled.div`
	display: flex;
	flex-flow: row wrap;
	justify-content: space-around;
	align-content: flex-start;
`

const Page = styled.div`
`

export default ({user, userProducts}) => <div>
	<Head/>
	<Header/>
	{user.name}
	<Page>
		<h2>{user.email}</h2>
		<Container>
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
		</Container>
	</Page>
</div>
