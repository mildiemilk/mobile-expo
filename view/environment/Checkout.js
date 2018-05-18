import Table from '../atoms/Table'
import Button from '../atoms/Button'
import Head from './DefaultHead'
import Header from './Header'
import AddressForm from '../organisms/AddressForm'
import HeightDiv from '../atoms/HeightDiv'
import Link from 'next/link'
import Wrapper from '../atoms/Wrapper'

export default ({transaction = {}, total=0}) => <HeightDiv>
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
						<td>{transaction.productName}</td>
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
							<h3>{transaction.quantity * transaction.price}</h3>
						</td>
					</tr>
				</tbody>
			</Table>	
			<Wrapper padding="25px 30px 10px 20px" margin="25px 0px">
				<AddressForm/>
				<Link prefetch href='/payment'>
					<Button margin="0px 0px">จ่ายเงิน</Button>
				</Link>
			</Wrapper>
	 </div>
	}/>   

</HeightDiv>
