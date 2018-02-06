import Table from '../atoms/Table'
import Button from '../atoms/Button'
import Head from './DefaultHead'
import Header from './Header'
import AddressForm from '../organisms/AddressForm'

let total = 0
export default ({cart = {}, products={}, total=0, saveAddress, addDeliveryDetail}) => <div>
  <Head/>
  <Header/>
  <div style={{margin:'15px'}}>
    <Table celled>
      <thead>
        <tr>
          <th>#</th>
          <th>Product Name</th>
          <th>Quantity</th>
          <th>Price</th>
          <th>SubTotal</th>
        </tr>
      </thead>
      <tbody>
        {cart.addedIds.map( (key, count) =>
          <tr key={key}>
            <td>{count+1}</td>
            <td>{products[key].productName}</td>
            <td>{cart.quantityById[key]}</td>
            <td>{products[key].price}</td>
            <td>{cart.quantityById[key] * products[key].price}</td>
          </tr>
        )}
        <tr>
          <td/>
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
    <Button margin="0px 0px"onClick={addDeliveryDetail}>proceed to payment</Button>
  </div>
</div>
