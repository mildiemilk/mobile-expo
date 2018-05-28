import { Message } from 'semantic-ui-react'

export default ({status, displayText}) =>
status === 'error' ?
<Message
	error
	header="Error"
	list={displayText}
/>: 
status === 'warning' ?
<Message
	warning 
	header="Warning"
	list={displayText}					
/>: null
