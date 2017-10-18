import styled from 'styled-components'

export default styled.div`
padding: 10px;
margin: 10px;
border-radius: 10px;
border: 2px solid #94002a;
@media (min-width: 700px) {
        width: ${props => props.bigScreenWidth || 'unset'};
}
`
