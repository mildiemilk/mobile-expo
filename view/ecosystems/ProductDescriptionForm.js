import { Field, FieldArray, reduxForm } from 'redux-form'
import DescriptionOption from '../molecules/DescriptionOption'
import Dropzone from '../atoms/Dropzone'
import { saveProductDescriptionImage } from '../../lib/handlers/product'

const renderField = ({ index, fields, input, type, meta: { touched, error } }) => {
	var returnComponent
		switch (type) {
			case 'image':
				returnComponent = 
					<div>
						<Dropzone onDrop={droppedImage=>
							saveProductDescriptionImage(droppedImage, fields, index)
						}>
							<button>add image</button>	
						</Dropzone>
					</div>
				break
			case 'header':
				returnComponent = 
				<div>
					<div>
						<input {...input} type={type} placeholder='หัวข้อ' />
						{touched && error && <span>{error}</span>}
					</div>
				</div>
				break
			case 'paragraph':
				returnComponent = 
				<div>
					<div>
						<input {...input} type={type} placeholder='ข้อความดึงดูดลูกค้า' />
						{touched && error && <span>{error}</span>}
					</div>
				</div>
				break
			default:
				returnComponent=
					<div>
						<div>
							<input {...input} type={type} placeholder='ข้อความดึงดูดลูกค้า' />
							{touched && error && <span>{error}</span>}
						</div>
					</div>
				break
		}
	return returnComponent
}


const renderMembers = props => <div>
	<button onClick={() => {
		console.log('next Desc', props.nextDescription)
		props.fields.push({
		type:props.nextDescription,
		context: ''
	})}}> 
		add
	</button>
	<DescriptionOption {...props}/>
	{
		props.fields.map((member,index) => (
			<div key={index}>
				<div onClick={()=>props.fields.remove(index)}>delete</div>
				<p>add member{index}</p>
				<Field index={index} name={`${member}.context`} type="text" component={renderField} type={props.fields.getAll()[index].type} fields={props.fields}/>
			</div>
		))
	}
</div>

export default props =>{
	return <FieldArray {...props} name="productDecription" component={renderMembers}/>
} 
