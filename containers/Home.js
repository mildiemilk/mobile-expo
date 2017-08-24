import Link from 'next/link'
import Head from './DefaultHead'
import Header from './Header'
import { Button } from 'semantic-ui-react'

export default ({changePage, user}) => 
<div>
  <Head title="Home"/>
  <Header />
	<div>
    <h1>Shop 'n Share</h1>
    <p>แอพลิเคชั่นที่จะเปลี่ยนลูกค้าทุกคนของคุณเป็นตัวแทนจำหนาย และ</p>
    <p>
      <Link href="/about">
      <Button color="blue">Learn more</Button>
      </Link>
    </p>
  </div>
</div>
