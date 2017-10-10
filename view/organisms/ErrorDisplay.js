import { Message } from 'semantic-ui-react'

export default ({status, displayText}) =>
status === 'error' ?
<Message
	error
	header="test"
	content={displayText}
/>: 
status === 'warning' ?
<Message
	warning 
	header="test"
	content={displayText}					
/>: null
