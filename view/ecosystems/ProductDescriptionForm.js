import {Field, reduxForm, formValueSelector} from 'redux-form'

export default({}) => <div>
		<Field name="favoriteColor" component="select">
				<option value="#ff0000">Header</option>
				<option value="#00ff00">Paragraph</option>
				<option value="#0000ff">	</option>
		</Field>
</div>
