import AddImageSection from '../molecules/AddImageSection'
import SubImage from '../molecules/SubImage'
import Wrapper from '../atoms/Wrapper'
import Flex from '../atoms/Flex'

export default ({productImages, setProductImage}) => 
<Wrapper 
	maxWidth='600px' 
	minHeight='500px'
	minWidth='320px'
	height='fit-content'
>
	<AddImageSection 
		src={productImages} 
		number={0} 
		setProductImage={setProductImage}
	/>
	<Flex wrap='no-wrap' direction='row'>
		{
			[1,2,3,4,5].map( number => 	<SubImage 
				size="100px" 
				subimg number={number} setProductImage={setProductImage}src={productImages? productImages[number] : ''}/>	)
		}
	</Flex>
</Wrapper>
