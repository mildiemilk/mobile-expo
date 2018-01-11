import { Field, FieldArray, reduxForm } from 'redux-form'
import DescriptionOption from '../molecules/DescriptionOption'

const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <div>
    <p>{label}</p>
    <div>
      <input {...input} type={type} placeholder={label} />
      {touched && error && <span>{error}</span>}
    </div>
  </div>
)


const renderMembers = props => <div>
	<button onClick={() => {props.fields.push({
		type:props.nextDescription,
		context: ''
	})}}> 
		add
	</button>
	<DescriptionOption {...props}/>
	{
		props.fields.map((member,index) => (
			<div>
				<div onClick={()=>props.fields.remove(index)}>delete</div>
				<p>add member{index}</p>
				<Field name={`${member}.context`} type="text" component={renderField} label={member.type}/>
				<Field name={`${member}.type`} type="hidden" value={member.type} component={()=><div></div>}/>
			</div>
		))
	}
</div>

export default props => <FieldArray {...props} name="productDecription" component={renderMembers}/>
