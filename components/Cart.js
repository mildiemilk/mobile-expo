import { Button } from 'semantic-ui-react'


export const AddItem = ({quantity=0}) => 
<Button.Group>
	<Button labelPosition='left' icon='left chevron' />
	<Button content={quantity} />
	<Button labelPosition='right' icon='right chevron'/>
</Button.Group>