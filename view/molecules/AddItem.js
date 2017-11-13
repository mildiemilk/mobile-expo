import Button, {ButtonGroup} from '../atoms/Button'

export default ({onClickMinus, onClickAdd,productUid, productQuantity}) => 
<ButtonGroup>
	<Button color='teal' onClick={()=>onClickMinus(productUid)}>- </Button>
	<Button color='teal' onClick={()=>onClickAdd(productUid)}>{productQuantity}</Button>
	<Button color='teal' onClick={()=>onClickAdd(productUid)}>+</Button>
</ButtonGroup>
