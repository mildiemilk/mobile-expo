import AddImageSection from '../molecules/AddImageSection'
import Flex from '../atoms/Flex'

export default ({productImages, setProductImage, removeProductImage,productImagePending}) => 
<div style={{background:'white'}}>
	<AddImageSection 
		src={productImages[0]} 
		number={0} 
		setProductImage={setProductImage}
		imagePending={productImagePending[0] || false}
		removeProductImage={()=>removeProductImage(0)}
	/>
	<Flex wrap='no-wrap' direction='row'>
		{
			[1,2,3,4].map( number => 	<AddImageSection 
				number={number}
				src={productImages[number]}
				imagePending={productImagePending[number] || false}
				size="100px" 
				subimg 
				number={number} 
				setProductImage={setProductImage}
				removeProductImage={()=>removeProductImage(number)}
				/>	)

		}
	</Flex> 
</div>
