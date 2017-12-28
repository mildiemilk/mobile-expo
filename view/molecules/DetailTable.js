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
  <tbody>
    <tr>
      <td><b>ราคาสุทธิ</b></td>
      <td />
      <td />
      <td >{totalPrice(transactionInfo.Products)}</td> 
  </tr>
  </tbody>
  
</Table>
</div>

