import Table from '../atoms/Table'

export default ({headerJson, bodyJsonArray, width, display, height, footer}) => 
    <Table>
        <thead>
            <tr>
            {
                headerJson?
                    Object.keys(headerJson).map( (headerKey, key) => 
                        <th key={key}>{headerJson[headerKey]}</th>
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
                    {Object.keys(headerJson).map( key => <td style={{overflow:'hidden'}}>{bodyJson[key]}</td>)}
                </tr>
                )
                :null
            }
            {
                footer? footer:null
            }
        </tbody>
    </Table>
