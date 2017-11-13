import Wrapper from '../atoms/ImageAtoms/ImageSectionWrapper'
import ImageDisplay from '../molecules/ImageDisplay'
import SubImageWrapper from '../atoms/ImageAtoms/SubImageWrapper'
import DisplaySubImage from '../molecules/DisplaySubImage'

export default ({images})=> 
<Wrapper>
    <ImageDisplay src={images[0]} />
    <SubImageWrapper>
        <DisplaySubImage src={images[1]} size="100px" subimg />
        <DisplaySubImage src={images[2]} size="100px" subimg />
        <DisplaySubImage src={images[3]} size="100px" subimg />
        <DisplaySubImage src={images[4]} size="100px" subimg />
    </SubImageWrapper>
</Wrapper>
