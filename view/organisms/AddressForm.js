import H3 from '../atoms/H3'
import InputText from '../atoms/TextField'
import { Fragment } from 'react'

export default () => <Fragment>
	<H3>ที่อยู่จัดส่ง</H3>
	<InputText label="ชื่อ:" placeholder="steve jobs" name="name" maxWidth="300px" />
	<InputText label="อีเมล:" placeholder="อีเมล" name="email" maxWidth="300px" />    
	<InputText label="เบอร์:" placeholder="xxx-xxx-xxxx" name="phoneNumber"  maxWidth="150px" width="166px"/>
	<InputText label="ที่อยู่1:" placeholder="11/111" maxWidth="300px" name="address1"/>
	<InputText label="ที่อยู่2:" placeholder="เย็นอากาศ" maxWidth="300px" name="address2" value=" "/>
	<InputText label="จังหวัด:" placeholder="จังหวัด" name="province" maxWidth="200px" width="166px"/>    
	<InputText label="รหัสไปรษณีย์:"  placeholder="รหัสไปรษณีย์" name="postalCode" maxWidth="80px" width="166px"/>
</Fragment>
