import { Grid } from 'semantic-ui-react'
import ItemCard from '../components/ItemCard'
import Link from 'next/link'
import Head from './DefaultHead'
import Header from './Header'
import { H3 } from '../components/Styled'
import styled from 'styled-components'
import color from '../asset/const/color.json'

const Container = styled.div`
	display: flex;
	flex-flow: row wrap;
	justify-content: space-around;
	align-content: flex-start;
`

const Card = styled.div`
margin: 10pt;
width: 360px;
background-color: #f9f9f9; /* color behind the dashicon */
border: 2px solid #ccc; /* circle border width */
border-radius: 15px;
padding: 15px;
font-size: 20vw;	
text-align: center;
span {
	display: inline-block;
	vertical-align: middle;
	line-height: normal;
	color: #ccc;
	}
&:hover {
	font-size: 20pt;
	z-index:10;
	font-weight: bold !important;
	display: inline-block;	
	vertical-align: middle;
	line-height: normal;
	color: #ccc;
	cursor: pointer;
		:after{
		content: 'add a new product';
	}
}
`

export default ({user, userProducts}) => <div>
	<Head/>
	<Header/>
	{user.name}
	<div>
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
				<Link href="/productRegister"><Card><span>+</span></Card></Link>
		</Container>
	</div>
</div>
