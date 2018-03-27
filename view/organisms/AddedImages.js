import AddImageSection from '../molecules/AddImageSection'
import SubImage from '../molecules/SubImage'
import Wrapper from '../atoms/Wrapper'
import Flex from '../atoms/Flex'
import store from '../../lib/store'

export default ({productImages, setProductImage, removeProductImage}) => 
<div style={{background:'white'}}>
	<AddImageSection 
		src={productImages} 
		number={0} 
		setProductImage={setProductImage}
		removeProductImage={()=>removeProductImage(0)}
	/>
	<Flex wrap='no-wrap' direction='row'>
		{
			[1,2,3,4].map( number => 	<SubImage 
				size="100px" 
				subimg number={number} setProductImage={setProductImage}src={productImages? productImages[number] : ''}
				removeProductImage={()=>removeProductImage(number)}
				/>	)

		}
	</Flex> 
</div>
