import Button, {ButtonGroup} from '../atoms/Button'
import color from "../../static/json/color.json"

const buttonJson = status => [
	{
		name:'Pending',
		background: status==='pending'? color.warning : color.disabled,
		value: 'pending'
	},
	{
		name:'Sent',
		background: status==='sent'? color.success : color.disabled,
		value: 'sent'
	},
	{
		name:'Delivered',
		background: status==='delivered'? color.primary : color.disabled,
		value: 'delivered'
	},
	{
		name:'View',
		background: color.primary1,
		value:'view'
	}
]

export default ({status, setOrderStatus, orderId}) =>
<ButtonGroup>
	{buttonJson(status).map(button=><Button small background={button.background} onClick={()=>setOrderStatus?setOrderStatus(orderId, button.value):console.log(button.value)}>{button.name}</Button>)}
</ButtonGroup> 
