import { Field } from 'redux-form'
import Input from '../atoms/Input'


export default props => <div>
    <span>{props.label}</span>
    <Field
        {...props} component={Input}
        width="100%"
        fontSize="1.2em" 
        placeholder={props.placeholder}
        format={props.format}
    />
</div>

