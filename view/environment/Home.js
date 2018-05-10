import Head from './DefaultHead'
import Header from './Header'
import HeightDiv from '../atoms/HeightDiv'
import MainBanner from '../molecules/MainBanner'


export default props => 
<HeightDiv>
  <Head title="Home" type="blog" image="../../static/img/logo.png" description="แอพลิเคชั่นที่จะเปลี่ยนลูกค้าทุกคนของคุณเป็นตัวแทนจำหน่าย"/> 
  <Header content={<MainBanner {...props}/>}/>
</HeightDiv>
