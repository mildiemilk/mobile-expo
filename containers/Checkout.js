import Link from 'next/link'
import { Table, Button } from 'semantic-ui-react'
import Head from './DefaultHead'
import Header from './Header'

export default () => <div>
  <Head/>
  <Header/>
  <Table celled>
    <Table.Header>
      <tr>
        <th>#</th>
        <th>Table heading</th>
        <th>Table heading</th>
      </tr>
    </Table.Header>
    <Table.Body>
      <Table.Row>
        <Table.Cell>1</Table.Cell>
        <Table.Cell>Table cell</Table.Cell>
        <Table.Cell>Table cell</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>2</Table.Cell>
        <Table.Cell>Table cell</Table.Cell>
        <Table.Cell>Table cell</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>3</Table.Cell>
        <Table.Cell>Table cell</Table.Cell>
        <Table.Cell>Table cell</Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table>	
  <Link href='/payment'><Button>proceed to payment</Button></Link>
</div>