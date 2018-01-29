import styled from 'styled-components'

export default styled.div`
${props => props.TextAlign? `text-align:${props.TextAlign};` : null}
${props => props.MarginTop? `margin-top:${props.MarginTop};` : null}
`