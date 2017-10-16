import styled from 'styled-components'

export default styled.div`
    border: 2px solid #94002a;
    padding: 10px;
    margin: 10px;
    border-radius: 10px;
    @media (min-width: 700px) {
        width: ${props => props.bigScreenWidth || 'unset'};
	}
`