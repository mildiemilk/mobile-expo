import Link from 'next/link'
import { Table, Button } from 'semantic-ui-react'
import Head from './DefaultHead'
import Header from './Header'
let total = 0
export default ({cart = {}, products={}}) => <div>
  <Head/>
  <Header/>
  <Table celled>
    <Table.Header>
      <tr>
        <th>#</th>
        <th>Product Name</th>
        <th>Quantity</th>
        <th>Price</th>
        <th>SubTotal</th>
      </tr>
    </Table.Header>
    <Table.Body>
      {cart.addedIds.map( (key, count) =>{
      total += cart.quantityById[key] * products[key].price
      return (
        <Table.Row>
          <Table.Cell>{count+1}</Table.Cell>
          <Table.Cell>{products[key].productName}</Table.Cell>
          <Table.Cell>{cart.quantityById[key]}</Table.Cell>
          <Table.Cell>{products[key].price}</Table.Cell>
          <Table.Cell>{cart.quantityById[key] * products[key].price}</Table.Cell>
        </Table.Row>)}
      )}
      <Table.Row>
        <Table.Cell/>
        <Table.Cell/>
        <Table.Cell/>
        <Table.Cell>
          <h3>Total</h3>
        </Table.Cell>
        <Table.Cell>
          <h3>{total}</h3>
        </Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table>	
  <Link href='/payment'><Button>proceed to payment</Button></Link>
</div>