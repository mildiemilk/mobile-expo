import { Field } from 'redux-form'

export default props => <Field name="nextDescription" component="select">
	<option value="header">หัวข้อ</option>
	<option value="paragraph">ข้อความ</option>
	<option value="bold">ตัวหนา</option>
	<option value="image">รูปภาพ</option>
	<option value="video">วิดีโด</option>
	<option value="youtube">YouTube url</option>
</Field>
