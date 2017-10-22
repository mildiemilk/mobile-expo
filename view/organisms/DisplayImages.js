import Wrapper from '../atoms/ImageAtoms/ImageSectionWrapper'
import ImageDisplay from '../molecules/ImageDisplay'
import SubImageWrapper from '../atoms/ImageAtoms/SubImageWrapper'
import DisplaySubImage from '../molecules/DisplaySubImage'

export default ()=> 
<Wrapper>
    <ImageDisplay />
    <SubImageWrapper>
        <DisplaySubImage size="100px" subimg />
        <DisplaySubImage size="100px" subimg />
        <DisplaySubImage size="100px" subimg />
        <DisplaySubImage size="100px" subimg />
    </SubImageWrapper>
</Wrapper>
