import styled from 'styled-components'

export default styled.div`
    position: absolute;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0,0,0,0.7);
    top: 0;
    left: 0;
    z-index: 10;
    transition: 1s;
    display: ${props => props.display ? 'flex':'none'};
    justify-content: center;
    align-items: center;
`