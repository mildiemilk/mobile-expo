import AddImageSection from '../molecules/AddImageSection'
import SubImage from '../molecules/SubImage'
import Wrapper from '../atoms/ImageAtoms/ImageSectionWrapper'
import SubImageWrapper from '../atoms/ImageAtoms/SubImageWrapper'

export default ({productImages, setProductImage}) => <Wrapper>
    <AddImageSection src={productImages} number={0} setProductImage={setProductImage}/>
    <SubImageWrapper>
        {
            productImages?
            [1,2,3,4,5].map( number => 	<SubImage size="100px" subimg number={number} setProductImage={setProductImage} src={productImages[number]}/>	)
            : null
		}
    </SubImageWrapper>
</Wrapper>
