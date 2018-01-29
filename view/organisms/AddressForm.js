import H3 from '../atoms/H3'
import InputText from '../atoms/TextField'
import Wrapper from '../atoms/Wrapper'
import Flex from '../atoms/Flex'

export default () => 
<Wrapper padding="25px 30px 10px 20px" margin="25px 15px">
    <H3>ที่อยู่จัดส่ง</H3>
    <Flex margin="10px 0px" direction="column">
    <InputText label="ชื่อ:" placeholder="steve jobs" name="name" maxWidth="300px" />
    <InputText label="อีเมล:" placeholder="อีเมล" name="email" maxWidth="120px" />    
    <InputText label="เบอร์:" placeholder="xxx-xxx-xxxx" name="phoneNumber"  maxWidth="300px" width="166px"/>
    <InputText label="ที่อยู่1:" placeholder="11/111" maxWidth="100px" name="address1"/>
    <InputText label="ที่อยู่2:" placeholder="เย็นอากาศ" maxWidth="100px" name="address2" value=" "/>
    <InputText label="จังหวัด:" placeholder="จังหวัด" name="province" maxWidth="300px" width="166px"/>    
    <InputText label="รหัสไปรษณีย์:"  placeholder="รหัสไปรษณีย์" name="postalCode" maxWidth="50px" width="166px"/>
    </Flex>
</Wrapper>
