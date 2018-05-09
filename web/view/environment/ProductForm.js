import Head from './DefaultHead'
import Header from './Header'
import ProductRegisterMain from '../ecosystems/ProductRegisterMain'
import HeightDiv from '../atoms/HeightDiv'

export default props => 
<HeightDiv>
	<Head />
	<Header content={
	<ProductRegisterMain {...props} />
	}/>
</HeightDiv>
