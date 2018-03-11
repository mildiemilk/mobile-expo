import Head from './DefaultHead'
import Header from './Header'
import ProductRegisterMain from '../ecosystems/ProductRegisterMain'
import HeightDiv from '../atoms/HeightDiv'
const calcComissionCash = (value, previousValue, allValues) => 
(value > (0.75 - allValues['comissionPercent']/100) * allValues['price'] ? (0.75 - allValues['comissionPercent']/100) * allValues['price']: value )

const calcComissionPercent = value => value >= 75 ? 75 : value

export default props => 
<HeightDiv>
	<Head />
	<Header content={<ProductRegisterMain {...props} />}/>
</HeightDiv>
