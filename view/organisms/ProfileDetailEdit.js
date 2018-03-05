import DivImage from '../atoms/DivImage'
import DivButton from '../atoms/TextAlign'
import Image from '../atoms/Image'
import Button from '../atoms/Button'
import H5 from '../atoms/H5'
import InputText from '../atoms/TextField'

export default props =>
<div>
	<DivImage center>
    {props.profileImage ?<Image src={props.profileImage ? props.profileImage:'/static/img/noimg.png'} />:<Button noFlexGrow>Upload</Button>}
    <Label for="buttonImg"><input style={{display:"none"}} name="image" onChange={e => props.handleImageChange(e)} id="buttonImg" type="file" /></Label>
    </DivImage>
    <H5 margin="15px 0px 0px 0px" lineHeight="20px">Balance: {profile.wallet} บาท</H5> 
    <H5 lineHeight="37px" margin="5px 0px">Address: <InputText noGrid name="address" maxWidth="300px" width="100%"/></H5>
    <H5 lineHeight="37px" margin="5px 0px">Email: <InputText noGrid name="email" maxWidth="300px" width="100%"/></H5>
    <H5 lineHeight="37px" margin="5px 0px">Phone: <InputText noGrid name="phone" maxWidth="300px" width="100%"/></H5>
    <DivButton TextAlign="right" MarginTop="20px"><Button onClick={handleSave}>Save</Button></DivButton>
  </div>
