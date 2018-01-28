import { Field } from 'redux-form'

export default props => <Field name="nextDescription" component="select">
	<option />
	<option value="header">Header</option>
	<option value="paragraph">Paragraph</option>
	<option value="bold">Bold</option>
	<option value="image">Image</option>
	<option value="video">Video</option>
	<option value="youtube">YouTube Link </option>
</Field>
