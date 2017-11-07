import Wrapper from '../atoms/Wrapper'
import styled from 'styled-components'

const PlusSign = styled.div`
	min-width: 300px;
	min-height: 300px;
	display: flex;
	justify-content: center;
	align-items: center;
`

export default () => <Wrapper  bigScreenWidth="max-content"> 
	<PlusSign><h1>+add-item</h1></PlusSign>
</Wrapper> 
