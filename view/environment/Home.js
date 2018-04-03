import Head from './DefaultHead'
import Header from './Header'
import CompanyExplained from '../ecosystems/CompanyExplained'
import HeightDiv from '../atoms/HeightDiv'
import Jumbotron from '../molecules/Jumbotron'


export default ({changePage, user}) => 
<HeightDiv>
  <Head title="Home" type="blog" image="../../static/img/logo.png" description="แอพลิเคชั่นที่จะเปลี่ยนลูกค้าทุกคนของคุณเป็นตัวแทนจำหน่าย"/> 
  <Header content={<Jumbotron/>}/>
</HeightDiv>
