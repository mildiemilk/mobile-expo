import JsonTable from '../organisms/JsonTable'
import Table from '../atoms/Table'

const headerJson = {
  productName: 'ชื่อสินค้า',
  Price: 'ราคา',
  Quantity: 'จำนวน',
  total: 'รวม'
}

const transactionJsonArray = products => products ? products.map( product => ({
  ...product,
  total: product.Quantity * product.Price
})):null

const totalPrice = products => transactionJsonArray(products).map(item => item.total).reduce((a, b) => a + b, 0)

export default ({transactionInfo}) => <div>
<JsonTable headerJson={headerJson} bodyJsonArray={transactionJsonArray(transactionInfo.Products)}/>
<Table>
  <td>ราคาสุทธิ</td>
  <td />
  <td />
  <td style={{textAlign:"center"}}>{totalPrice(transactionInfo.Products)}</td>
</Table>
</div>

