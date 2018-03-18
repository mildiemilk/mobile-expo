import { Grid } from 'semantic-ui-react'
import Table from '../atoms/Table'
import Button from '../atoms/Button'
import Head from './DefaultHead'
import Header from './Header'
import AddressForm from '../organisms/AddressForm'
import HeightDiv from '../atoms/HeightDiv'
import Link from 'next/link'
let total = 0
export default ({transaction = {}, products={}, total=0, saveAddress}) => <HeightDiv>
  <Head/>
  <Header content={
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
          <tr>
            <td>1</td>
            <td>{products.productName}</td>
            <td>{transaction.quantity}</td>
            <td>{transaction.price}</td>
            <td>{transaction.quantity * transaction.price}</td>
          </tr>
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
     <Link prefetch href='/payment'>
        <Button margin="0px 0px">proceed to payment</Button>
     </Link>
   </div>
  }/>

</HeightDiv>
