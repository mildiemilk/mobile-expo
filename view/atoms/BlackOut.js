import styled from 'styled-components'

export default styled.div`
    position: absolute;
    width: 100%;
    ${props => props.height ? `height: ${props.height};` : 'height: 100vh'}
    @media (min-width: 1000px) {
        ${props => props.minHeight ? `min-height: ${props.minHeight};` : null}
}
    top: 0;
    left: 0;
    z-index: 10;
    transition: 1s;
    display: ${props => props.display!==false ? 'flex':'none'};
    justify-content: center;
    align-items: center;
    overflow-x: scroll;
    @media (max-width: 400px) {
        min-height: 40vh;
}
`