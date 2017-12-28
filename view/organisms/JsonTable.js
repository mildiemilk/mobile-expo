import Table from '../atoms/Table'

export default ({headerJson, bodyJsonArray, width, display, height}) => 
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
                    {Object.keys(headerJson).map( key => <td>{bodyJson[key]}</td>)}
                </tr>
                )
                :null
            }
        </tbody>
    </Table>
