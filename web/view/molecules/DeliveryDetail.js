import Wrapper from '../atoms/Wrapper'
import H3 from '../atoms/H3'
import H5 from '../atoms/H5'
import Table from '../atoms/Table'
import buildFormatter from 'react-timeago/lib/formatters/buildFormatter'
import thaiStrings from 'react-timeago/lib/language-strings/th'
import TimeAgo from 'react-timeago'
const formatter = buildFormatter(thaiStrings)

export default ({order}) => 
<Wrapper>
    <Wrapper>
        <H3>Delivery Detail</H3>
        <H5>Name: {order.name}</H5>
        <H5>address: {order.address}</H5>
    </Wrapper>
    <Wrapper>
        <H3>Order Detail</H3>
        <Table>
            <thead>
                <tr>
                    <th>Product Name</th>
                    <th>Quantity</th>
                    <th>Date</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{order.productName}</td>
                    <td>{order.quantity}</td>
                    <td><TimeAgo date={order.date} formatter={formatter}/></td>
                </tr>
            </tbody>
        </Table>
    </Wrapper>
</Wrapper>