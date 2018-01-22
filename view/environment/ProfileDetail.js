import H3 from '../atoms/H3'
import Image from '../atoms/Image'
import H5 from '../atoms/H5'
import Button from '../atoms/Button'
import DivButton from '../atoms/TextAlign'
import Wrapper from '../atoms/Wrapper'
import InputText from '../atoms/TextField'
import DivImage from '../atoms/DivImage'
import Label from '../atoms/LabelImage'


export default ({profile, handleEdit, isEdit, detail, handleSave, handleImageChange, profileImage}) => <Wrapper  padding="20px" margin="25px">
  {isEdit ? null:<DivButton TextAlign="right"><Button onClick={handleEdit}>Edit</Button></DivButton>}
  <H5 center>{profile.name}</H5>
  {isEdit 
  ?<div><DivImage center>
    {profileImage ?<Image src={profileImage?profileImage:'/static/img/noimg.png'} />:<Button noFlexGlow>Upload</Button>}
    <Label for="buttonImg"><input style={{display:"none"}} name="image" onChange={e => handleImageChange(e)} id="buttonImg" type="file" /></Label>
    </DivImage>
    <H5>Wallet: {profile.wallet} บาท</H5>
    <H5>Address: <InputText name="address" maxWidth="300px" width="300px"/></H5>
    <H5>Email: <InputText name="email" maxWidth="300px" width="300px"/></H5>
    <H5>Phone: <InputText name="phone" maxWidth="300px" width="300px"/></H5>
    <DivButton TextAlign="right"><Button onClick={handleSave}>Save</Button></DivButton>
  </div>
  :<div>
    <Image block margin="auto" size="150px" maxHeight="150px" src={profileImage?profileImage:'https://openclipart.org/image/2400px/svg_to_png/211821/matt-icons_preferences-desktop-personal.png'} />
    <H5>Wallet: {profile.wallet} บาท</H5>
    <H5>Address: {profile.address}</H5>
    <H5>Email: {profile.email}</H5>
    <H5>Phone: {profile.phone}</H5>
  </div>
  }
</Wrapper>