import Table from '../atoms/Table'
import H3 from '../atoms/H3'
import Wrapper from '../atoms/Wrapper'

export default ({phone, address, email, shop}) => 
<Wrapper>
    <Table>
        <tbody>
            <tr>
                <td>Phone Number</td>
                <td>{phone}</td>
            </tr>
            <tr>
                <td>Address</td>
                <td>{address}</td>
            </tr>
                <td>E-mail</td>
                <td>{email}</td>
            <tr>
                <td>Shop Name</td>
                <td>{shop}</td>
            </tr>
        </tbody>
    </Table>
</Wrapper>