import Button, {ButtonGroup} from '../atoms/Button'

export default ({onClickMinus, onClickAdd,productUid, productQuantity}) => 
<ButtonGroup>
	<Button onClick={()=>onClickMinus(productUid)}>- </Button>
	<Button onClick={()=>onClickAdd(productUid)}>{productQuantity}</Button>
	<Button onClick={()=>onClickAdd(productUid)}>+</Button>
</ButtonGroup>
