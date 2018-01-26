import Head from './DefaultHead'
import Header from './Header'
import CompanyExplained from '../ecosystems/CompanyExplained'

export default ({changePage, user}) => 
<div>
  <Head title="Home" type="video" videoType="application/x-shockwave-flash" video="http://www.youtube.com/v/GFLGRidF04?version=3&autohide=1" description="แอพลิเคชั่นที่จะเปลี่ยนลูกค้าทุกคนของคุณเป็นตัวแทนจำหน่าย"/>
  <Header />
  <CompanyExplained/>
</div>
