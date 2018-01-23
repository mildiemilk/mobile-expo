import styled from 'styled-components'

export default styled.div`
    
    ${props => props.minWidth? `min-width: ${props.minWidth};`: null}
    ${props => props.padding? `padding: ${props.padding};`: null}
    background-color: white;
    z-index:100;
    @media (max-width: 700px) {
        min-width: 320px;
}
`
