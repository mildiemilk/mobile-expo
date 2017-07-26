import { Button } from 'semantic-ui-react'


export const AddItem = ({onClickMinus, onClickAdd,productUid, productQuantity}) => 
<Button.Group>
	<Button labelPosition='left' icon='left chevron' onClick={()=>onClickMinus(productUid)} />
	<Button content={productQuantity} />
	<Button labelPosition='right' icon='right chevron' onClick={()=>onClickAdd(productUid)}/>
</Button.Group>