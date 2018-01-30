import Wrapper from '../atoms/ImageAtoms/ImageSectionWrapper'
import ImageDisplay from '../molecules/ImageDisplay'
import SubImageWrapper from '../atoms/ImageAtoms/SubImageWrapper'
import DisplaySubImage from '../molecules/DisplaySubImage'
import Flex from '../atoms/Flex'

export default ({images = []}) => {
    return (<Wrapper>
        <ImageDisplay src={images[0]} />
        <SubImageWrapper>
        <Flex width="100%" justContent="center" direction="row" margin="25px 0px">
            {images.slice(1).map(image => <DisplaySubImage src={image} size="100px" subimg />)}
        </Flex>
        </SubImageWrapper>
    </Wrapper>)
}


