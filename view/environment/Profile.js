import { Grid } from 'semantic-ui-react'
import ItemCard from '../organisms/ItemCard'
import Link from 'next/link'
import Head from './DefaultHead'
import Header from './Header'
import H3 from '../atoms/H3'
import styled from 'styled-components'
import color from '../../static/json/color.json'
import Wrapper from '../atoms/Wrapper'

export default ({user, userProducts}) => <div>
	<Head/>
	<Header/>
	{user.name}
	<div>
		<h2>{user.email}</h2>
		<Wrapper>
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
				<Link href="/productRegister"><Card><span>+</span></Card></Link>
		</Wrapper>
	</div>
</div>
