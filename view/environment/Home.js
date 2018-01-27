import Head from './DefaultHead'
import Header from './Header'
import CompanyExplained from '../ecosystems/CompanyExplained'

export default ({changePage, user}) => 
<div>
  <Head title="Home" type="video" videoType="video/mp4" image="http://vjs.zencdn.net/v/oceans.png" video="http://vjs.zencdn.net/v/oceans.mp4" description="แอพลิเคชั่นที่จะเปลี่ยนลูกค้าทุกคนของคุณเป็นตัวแทนจำหน่าย"/>
  <Header />
  <CompanyExplained/>
</div>
