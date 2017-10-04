import { Button } from 'semantic-ui-react'


export const AddItem = ({onClickMinus, onClickAdd,productUid, productQuantity}) => 
<Button.Group>
	<Button color='teal' labelPosition='left' icon='left chevron' onClick={()=>onClickMinus(productUid)} />
	<Button color='teal'  content={productQuantity} onClick={()=>onClickAdd(productUid)}/>
	<Button color='teal'  labelPosition='right' icon='right chevron' onClick={()=>onClickAdd(productUid)}/>
</Button.Group>
