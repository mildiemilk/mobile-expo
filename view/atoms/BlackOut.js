import styled from 'styled-components'

export default styled.div`
    position: absolute;
    width: 100vw;
    ${props => props.height ? `height: ${props.height};` : 'height: 100vh'}
    ${props => props.minHeight ? `min-height: ${props.minHeight};` : null}
    background-color: rgba(0,0,0,0.7);
    top: 0;
    left: 0;
    z-index: 10;
    transition: 1s;
    display: ${props => props.display!==false ? 'flex':'none'};
    justify-content: center;
    align-items: center;
    overflow-x: scroll;
`