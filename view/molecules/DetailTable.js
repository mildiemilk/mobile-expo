import JsonTable from '../organisms/JsonTable'
import Table from '../atoms/Table'

const headerJson = {
  productName: 'ชื่อสินค้า',
  price: 'ราคา',
  variety: 'แบบ',
  quantity: 'จำนวน',
  total: 'รวม'
}

const transactionJsonArray = products => products ? products.map( product => {
  return ({
    productName: product.productName,
    price: product.price,
    quantity: product.quantity,
    total: product.quantity * product.price,
    variety: product.variety
  })
}):null

const totalPrice = products => transactionJsonArray(products).map(item => item.total).reduce((a, b) => a + b, 0)

export default ({transactionInfo}) => <div>

<JsonTable headerJson={headerJson} 
bodyJsonArray={
  [ ...transactionJsonArray(transactionInfo), 
    {
      productName: 'ราคารวม',
      total: totalPrice(transactionInfo)
    }
  ]}/>
</div>

