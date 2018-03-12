import AddImageSection from '../molecules/AddImageSection'
import SubImage from '../molecules/SubImage'
import Wrapper from '../atoms/Wrapper'
import Flex from '../atoms/Flex'

export default ({productImages, setProductImage}) => 
<div style={{background:'white', maxWidth:'450px'}}>
	<AddImageSection 
		src={productImages} 
		number={0} 
		setProductImage={setProductImage}
	/>
	<Flex wrap='no-wrap' direction='row'>
		{
			[1,2,3,4].map( number => 	<SubImage 
				size="100px" 
				subimg number={number} setProductImage={setProductImage}src={productImages? productImages[number] : ''}/>	)
		}
	</Flex>
</div>
