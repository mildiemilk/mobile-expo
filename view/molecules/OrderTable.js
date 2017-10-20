import Table from '../atoms/Table.js'
import TimeAgo from 'react-timeago'
import thaiStrings from 'react-timeago/lib/language-strings/th'
import buildFormatter from 'react-timeago/lib/formatters/buildFormatter'
import Wrapper from '../atoms/Wrapper.js'
import H3 from '../atoms/H3.js'

const formatter = buildFormatter(thaiStrings)

const TableBody = ({orders}) => 
	<tbody>
		{
			orders?
			orders.map( ({name, status, date}, key) => 
				<tr>
					<td>{key}</td>
					<td>{name}</td>
					<td>{status}</td>
					<td><TimeAgo date={date} formatter={formatter}/></td>
				</tr>
			)
			:null
		}
	</tbody>

export default ({orders}) =>
<Wrapper bigScreenWidth="260px">
	<H3>Orders</H3>
	<Table>
		<tr>
			<th>No.</th>
			<th>Name</th>
			<th>Status</th>
			<th>Days since order</th>
		</tr>
		<TableBody orders = {orders} />
	</Table>
</Wrapper>
