import React from 'react'
import JsonTable from '../organisms/JsonTable'
import Table from '../atoms/Table'


const headerJson = {
  productName: 'ชื่อสินค้า',
  Price: 'ราคา',
  Quantity: 'จำนวน',
  total: 'รวม'
}
class DetailTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  transactionJsonArray = () => {
    const transactionInfo = this.props.transactionInfo.Products
    var transactionJsonArray = transactionInfo ? transactionInfo.map( transaction => ({
      productName: transaction.productName,
      Price: transaction.Price,
      Quantity: transaction.Quantity,
      total: transaction.Quantity * transaction.Price
    })):null
    return transactionJsonArray
  }
  TotalPrice = () => {
    const total = []
    const transactionInfo = this.props.transactionInfo.Products
    transactionInfo ? transactionInfo.map( transaction => {
      total.push({
        totalPrice:transaction.Quantity * transaction.Price
      })
    }):null
    const totalTransaction = total.map(item => item.totalPrice).reduce((a, b) => a + b, 0)
    return totalTransaction
  }
  render() {
    return <div>
      <JsonTable headerJson={headerJson} bodyJsonArray={this.transactionJsonArray()}/>
      <Table>
        <td>ราคาสุทธิ</td>
        <td />
        <td />
        <td style={{textAlign:"center"}}>{this.TotalPrice()}</td>
      </Table>
      </div>
  }
}
export default DetailTable

