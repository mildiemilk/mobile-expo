import styled from 'styled-components'

export default styled.div`
    position: fixed;
    width: 100%;
    height: 100%;

    @media (min-width: 1000px) {
        ${props => props.minHeight ? `min-height: ${props.minHeight};` : null}
        ${props => props.widthDesktop? `width: ${props.widthDesktop};`: null}
        ${props => props.maxWidthDesktop? `max-width: ${props.maxWidthDesktop};`: null}
    }

    top: 0;
    left: 0;
    z-index: 1000;
    transition: 1s;
    background-color: rgba(0,0,0,0.7);

    display: ${props => props.display? 'flex':'none'};
    justify-content: center;
    align-items: center;
    overflow-x: scroll;
    @media (max-width: 400px) {
        min-height: 40vh;
}
`
