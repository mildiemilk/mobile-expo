import AddImageSection from '../molecules/AddImageSection'
import SubImage from '../molecules/SubImage'
import Wrapper from '../atoms/ImageAtoms/ImageSectionWrapper'
import SubImageWrapper from '../atoms/ImageAtoms/SubImageWrapper'

export default ({productImages, setProductImage}) => <Wrapper>
    {console.log('productImages',productImages)}
    <AddImageSection src={productImages} number={0} setProductImage={setProductImage}/>
    <SubImageWrapper>
        {
			[1,2,3,4,5].map( number => 	<SubImage size="100px" subimg number={number} setProductImage={setProductImage} src={productImages[number]}/>	)
		}
    </SubImageWrapper>
</Wrapper>