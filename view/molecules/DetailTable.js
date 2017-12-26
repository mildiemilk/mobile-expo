import React from 'react'
import JsonTable from '../organisms/JsonTable'


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
  render() {
    return <JsonTable headerJson={headerJson} bodyJsonArray={this.transactionJsonArray()}/>
  }
}
export default DetailTable

