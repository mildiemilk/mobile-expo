import styled from 'styled-components'

export default styled.div`
${props => props.TextAlign? `text-align:${props.TextAlign};` : null}
`