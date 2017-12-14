import Table from '../atoms/Table'
import Wrapper from '../atoms/Wrapper'

export default ({headerJson, bodyJsonArray}) => 
    <Table>
        <thead>
            <tr>
            {
                headerJson?
                    Object.keys(headerJson).map( (headerKey, key) => 
                        <th>{headerJson[headerKey]}</th>
                    )
                :null
            }
            </tr>
        </thead>
        <tbody>
            {
                bodyJsonArray ? 
                bodyJsonArray.map( bodyJson => 
                <tr>
                    {Object.keys(headerJson).map(
                        key => {
                            switch(key){
                                case 'total':
                                return <td>{bodyJson.price * bodyJson.quantity}</td>
                                default:
                                return <td>{bodyJson[key]}</td>
                            }
                        }
                    )}
                </tr>
                )
                :null
            }
        </tbody>
    </Table>