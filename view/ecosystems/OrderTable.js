import OrderStatusButton from '../organisms/OrderStatusButton'
import JsonTable from '../organisms/JsonTable'

export default ({orders, setOrderStatus}) => {
	var orderJsonArray = orders? orders.map( (order, key )=> ({
		buyerName: order.name,
		productName: order.productName,
		total: order.quantity * order.price,
		variety: order.variety,
		status: <OrderStatusButton status={order.status} setOrderStatus={setOrderStatus} transactionInfo={order}/>,
		key: key
	})):null
	const headerJson = {
		buyerName: 'ชื่อผู้ซื้อ',
		productName: 'สินค้า',
		variety: 'แบบ',
		total: 'Total',
		status: 'Status'
	}

	return <JsonTable headerJson={headerJson} bodyJsonArray={orderJsonArray}/>
}
