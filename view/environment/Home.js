import Head from './DefaultHead'
import Header from './Header'
import CompanyExplained from '../ecosystems/CompanyExplained'

export default ({changePage, user}) => 
<div>
  <Head title="Home" type="video" video="../../static/videos/video-1516960271.mp4" videoType="application/mp4" description="แอพลิเคชั่นที่จะเปลี่ยนลูกค้าทุกคนของคุณเป็นตัวแทนจำหน่าย"/>
  <Header />
  <CompanyExplained/>
</div>
 