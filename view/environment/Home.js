import Head from './DefaultHead'
import Header from './Header'
import CompanyExplained from '../ecosystems/CompanyExplained'

export default ({changePage, user}) => 
<div>
  <Head type="video" videoType="video/mp4" video="http://vjs.zencdn.net/v/oceans.mp4"/>
  <Header />
  <CompanyExplained/>
</div>
