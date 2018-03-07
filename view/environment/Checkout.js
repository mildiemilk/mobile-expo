import Table from '../atoms/Table'
import Button from '../atoms/Button'
import Head from './DefaultHead'
import Header from './Header'
import AddressForm from '../organisms/AddressForm'

let total = 0
export default ({transaction,products={}, total=0, saveAddress, addDeliveryDetail}) => <div>
  <Head/>
  <Header/>
  <div style={{margin:'15px'}}>
    <Table celled>
      <thead>
        <tr>
          <th>Product Name</th>
          <th>Quantity</th>
          <th>Price</th>
          <th>SubTotal</th>
        </tr>
      </thead>
      <tbody>
          <tr>
            <td>{transaction.productName}</td>
            <td>{transaction.quantity}</td>
            <td>{transaction.price}</td>
            <td>{transaction.quantity * transaction.price}</td>
          </tr>
        <tr>
          <td/>
          <td/>
          <td>
            <h3>Total</h3>
          </td>
          <td>
            <h3>{total}</h3>
          </td>
        </tr>
      </tbody>
    </Table>	
    <AddressForm/>
    <Button margin="0px 0px" onClick={addDeliveryDetail}>proceed to payment</Button>
  </div>
</div>
