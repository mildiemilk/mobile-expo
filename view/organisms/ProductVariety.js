import H5 from '../atoms/H5'
import { Button } from 'semantic-ui-react'
import Flex from '../atoms/Flex'
import { FieldArray } from 'redux-form'
import TextField from '../atoms/TextField'

const renderVarieties =({ fields, input, meta: { error, submitFailed } })  =>
<ol>
        <Flex direction='row'>
            <H5 margin='5px 0 0 0 !important'>สี/แบบ/ไซส์ สินค้า</H5>
            <Button onClick={() => fields.push()} color='teal' size='mini' icon="add" circular/>
        </Flex>
    {fields.map((variety, index) => <div>
        <li key={index}>
            <Flex direction='row'>            
                <TextField placeholder='ไซส์ m' name={`${variety}`} {...input} />
                <Button onClick={() => fields.remove(index)} color='red' size='mini' icon="minus" circular style={{height:'fit-content', marginTop:'15px'}}/>                
            </Flex>
        </li>
    </div>)}
</ol>

export default props => <div>
    <p>ท่านสามารถใส่แบบ/สี/ไซส์ได้ที่นี่(ในกรณีต้องการให้เลือกทั้งสีและไซส์ ใส่แบบนี้ (M/สีแดง, L/สีแดง ) </p>

        <FieldArray name={'variety'} component={renderVarieties}/>
</div>