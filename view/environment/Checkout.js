import { Grid } from 'semantic-ui-react'
import Table from '../atoms/Table'
import Button from '../atoms/Button'
import Head from './DefaultHead'
import Header from './Header'
import AddressForm from '../organisms/AddressForm'
import Link from 'next/link'

let total = 0
export default ({transaction,products={}, total=0, saveAddress}) => <div>
  <Head/>
  <Header/>
  <Grid>
	  <Grid.Column mobile={16} tablet={16} computer={12}>
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
    </Grid.Column>
  </Grid>
</div>
