import AddImageSection from '../molecules/AddImageSection'
import SubImage from '../molecules/SubImage'
import Wrapper from '../atoms/ImageAtoms/ImageSectionWrapper'
import SubImageWrapper from '../atoms/ImageAtoms/SubImageWrapper'

export default ({images}) => <Wrapper>
    <AddImageSection/>
    <SubImageWrapper>
        <SubImage size="100px" subimg/>
        <SubImage size="100px" subimg/>
        <SubImage size="100px" subimg/>
        <SubImage size="100px" subimg/>
    </SubImageWrapper>
</Wrapper>