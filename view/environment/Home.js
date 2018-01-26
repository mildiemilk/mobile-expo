import Head from './DefaultHead'
import Header from './Header'
import CompanyExplained from '../ecosystems/CompanyExplained'

export default ({changePage, user}) => 
<div>
  <Head title="Home" image="../../static/img/logo.png" description="แอพลิเคชั่นที่จะเปลี่ยนลูกค้าทุกคนของคุณเป็นตัวแทนจำหน่าย"/>
  <Header />
  <CompanyExplained/>
</div>
 