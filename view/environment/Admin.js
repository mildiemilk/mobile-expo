import Table from '../atoms/Table';
import transaction from '../../lib/reducers/transaction';
import { updateStatusTransactions, getAllPendingTransactions } from '../../lib/handlers/transaction'
import {updateStatusDisputes,getAllDisputes} from '../../lib/handlers/dispute'
import Button, { ButtonGroup } from '../atoms/Button'
const clearLoading = (res) => {
    if (res === 'success') {
        getAllPendingTransactions();
        alert(res);
    } else {
        alert('try again');
    }
}
export default (props) => {
    const transactions_arrs = Object.keys(props.transactions).map(function (key) { return props.transactions[key]; });
    const disputes_arrs = Object.keys(props.disputes).map(function (key) { return props.disputes[key]; });
    //let transactions_maps = transactions_arrs[0];
    if ((transactions_arrs.length == 0) || (disputes_arrs.length == 0)) {
        return (
            <div>Loading...</div>
        )
    }
    return (
        <div>
            <div> Admin Page </div>
            <h1>Transaction Table </h1>
            <Table className="admin-transaction" maxWidth={'900px'}>
                <thead>
                    <tr>
                        <th>Name </th>
                        <th>Product</th>
                        <th>Total</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {Object.keys(transactions_arrs).map((key) => {
                        const tts = transactions_arrs[key];
                        console.log('TTS = ', tts);
                        return (
                            <tr key={key}>
                                <td>{tts.name}</td>
                                <td>{tts.productName}</td>
                                <td>{tts.price * tts.quantity}</td>
                                <td>
                                    <ButtonGroup>
                                        <Button background={tts.status === 'pending' ? '#F0A505' : '#BCB3AE'} onClick={() => updateStatusTransactions(tts.key, 'pending', (success) => clearLoading(success))} >Pending</Button>
                                        <Button background={tts.status === 'sent' ? '#F0A505' : '#BCB3AE'} onClick={() => updateStatusTransactions(tts.key, 'sent', (success) => clearLoading(success))}>Send</Button></ButtonGroup>
                                    <ButtonGroup>
                                        <Button background={tts.status === 'delivered' ? '#F0A505' : '#BCB3AE'} onClick={() => updateStatusTransactions(tts.key, 'delivered', (success) => clearLoading(success))}>Delivered</Button>
                                        <Button background="#41D4DA">View</Button>
                                    </ButtonGroup>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
            <h1>Dispute Transactions</h1>
            <Table className="admin-dispute" maxWidth={'1200px'}>
                <thead>
                    <tr>
                        <th>UserUid </th>
                        <th style={{
                                    textAlign:'center'
                                }}>Amount</th>
                        <th>status</th>
                        <th>Bank</th>
                        <th>Account Number</th>
                        <th>Account Name</th>
                    </tr>
                </thead>
                <tbody>
                    {Object.keys(disputes_arrs).map((key) => {
                        const dps = disputes_arrs[key];
                        console.log('DPS = ', dps);
                        return (
                            <tr key={key}>
                                <td style={{
                                    overflow:'auto'
                                }} >{dps.userUid}</td>
                                <td style={{
                                    textAlign:'center'
                                }} >{dps.amount}</td>
                                <td>
                                    <select value={dps.status} onChange={(e)=>{
                                        if(confirm('Are you change status?')){
                                            updateStatusDisputes(dps.key,e.target.value,(res)=>{
                                                getAllDisputes();
                                                alert(res);
                                            })
                                        }
                                    }} >
                                        <option value="pending" >Pending</option>
                                        <option value="send">Send</option>
                                    </select>
                                </td>
                                <td>{dps.bankName}</td>
                                <td>{dps.bankAccountNumber}</td>
                                <td>{dps.bankAccountName}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
        </div>
    );
}