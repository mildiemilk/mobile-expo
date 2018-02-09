import styled from 'styled-components'
import color from '../../static/json/color.json'

export default styled.div`
  background: ${color.primary};
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  @media (max-width: 700px){
    display:none;
  }
`