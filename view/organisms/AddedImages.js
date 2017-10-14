import styled from 'styled-components'
import AddImageSection from '../molecules/AddImageSection'

const Wrapper = styled.div`
    max-width: 400px;
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    @media (max-width: 600px) {
		 max-width: 100vw;
	}
`
const SubImageWrapper = styled.div`
    display: flex;
    max-width: 100vw;
    flex-direction: row;
`

const SubImage = styled(AddImageSection)`
    flex-grow: 1;
    flex-shrink: 2;
`


export default () => <Wrapper>
    <AddImageSection/>
    <SubImageWrapper>
        <SubImage size="100px" subimg/>
        <SubImage size="100px" subimg/>
        <SubImage size="100px" subimg/>
        <SubImage size="100px" subimg/>
    </SubImageWrapper>
</Wrapper>