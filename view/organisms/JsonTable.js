import Table from '../atoms/Table'

export default ({headerJson, bodyJsonArray, footer}) => 
	<Table>
		<thead>
			<tr>
				{
					headerJson&&
						Object.keys(headerJson).map( (headerKey, key) => 
							<th key={key}>{headerJson[headerKey]}</th>
						)
				}
			</tr>
		</thead>
		<tbody>
			{
				bodyJsonArray &&
					bodyJsonArray.map( (bodyJson, key) => 
						<tr key={key}>
							{Object.keys(headerJson).map( key => <td style={{overflow:'hidden'}}>{bodyJson[key]}</td>)}
						</tr>
					)
			}
			{footer&& footer}
		</tbody>
	</Table>
