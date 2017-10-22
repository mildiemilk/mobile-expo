import styled from 'styled-components'

export default styled.div`
    max-width: ${props => props.bigScreenWidth || '400px'};
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    @media (max-width: 600px) {
		 max-width: 100vw;
	}
`