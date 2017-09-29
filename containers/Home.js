import Link from 'next/link'
import Head from './DefaultHead'
import Header from './Header'
import { Button } from 'semantic-ui-react'
import styled from 'styled-components'

const Content = styled.div`
background: papayawhip;
height: 3em;
width: 3em;

@media (max-width: 700px) {
	background: black;
	position: fixed;
	bottom: 0px;
}
`;


export default ({changePage, user}) => 
<div>
  <Head title="Home"/>
  <Header />
	<div>
    <Content/>
    <h1>Shop 'n Share</h1>
    <p>แอพลิเคชั่นที่จะเปลี่ยนลูกค้าทุกคนของคุณเป็นตัวแทนจำหนาย และ</p>
    <p>
      <Link href="/about">
      <Button color="blue">Learn more</Button>
      </Link>
    </p>
  </div>
</div>
