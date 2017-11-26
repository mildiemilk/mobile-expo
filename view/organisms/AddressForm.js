import H3 from '../atoms/H3'
import InputText from '../atoms/TextField'
import Wrapper from '../atoms/Wrapper'
import Flex from '../atoms/Flex'

export default () => 
<Wrapper>
    <H3>ที่อยู่จัดส่ง</H3>
    <Flex direction="row">
    <InputText label="ชื่อ" placeholder="steve jobs" name="name" maxWidth="300px"/>
    <InputText label="เบอร์" placeholder="xxx-xxx-xxxx" name="phoneNumber" maxWidth="120px" />
    <InputText label="บ้านเลขที่" placeholder="11/111" maxWidth="100px" name="house-number"/>
    <InputText label="อาคาร" placeholder="คอนโด/หมู่บ้าน" name="building-name" maxWidth="300px"/>
    <InputText label="ซอย" placeholder="ซอย" name="soi" maxWidth="300px"/>
    <InputText label="ถนน" placeholder="ถนน" name="street" maxWidth="300px"/>
    <InputText label="อำเภอ" placeholder="อำเภอ" name="ampur" maxWidth="200px"/>
    <InputText label="เขต" placeholder="เขต" name="khet" maxWidth="200px"/>    
    <InputText label="จังหวัด" placeholder="จังหวัด" name="province" maxWidth="300px"/>    
    <InputText label="รหัสไปรษณีย์"  placeholder="รหัสไปรษณีย์" name="postalCode" maxWidth="100px"/>
    </Flex>
</Wrapper>
