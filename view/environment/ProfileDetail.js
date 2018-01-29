import H3 from '../atoms/H3'
import Image from '../atoms/Image'
import H5 from '../atoms/H5'
import Button from '../atoms/Button'
import DivButton from '../atoms/TextAlign'
import Wrapper from '../atoms/Wrapper'
import InputText from '../atoms/TextField'
import DivImage from '../atoms/DivImage'
import Label from '../atoms/LabelImage'
import BalanceModal from '../molecules/BalanceModal'
import AddSponsorModal from '../molecules/AddSponsorModal'


export default ({profile, handleEdit, isEdit, detail, handleSave, handleImageChange, profileImage, balance, userUid, sponsorEmail}) => <Wrapper padding="20px"
maxWidth="320px"
flexGrow="1"
height= "max-content"
>
  {isEdit ? null:<DivButton TextAlign="right"><Button onClick={handleEdit}>Edit</Button></DivButton>}
  <H5 margin="20px 0px" center>{profile.name}</H5>
  {isEdit 
  ?<div><DivImage center>
    {profileImage ?<Image src={profileImage?profileImage:'/static/img/noimg.png'} />:<Button noFlexGlow>Upload</Button>}
    <Label for="buttonImg"><input style={{display:"none"}} name="image" onChange={e => handleImageChange(e)} id="buttonImg" type="file" /></Label>
    </DivImage>
    <H5 margin="15px 0px 0px 0px" lineHeight="20px">Balance: {profile.wallet} บาท</H5> 
    <H5 lineHeight="37px" margin="5px 0px">Address: <InputText noGrid name="address" maxWidth="300px" width="100%"/></H5>
    <H5 lineHeight="37px" margin="5px 0px">Email: <InputText noGrid name="email" maxWidth="300px" width="100%"/></H5>
    <H5 lineHeight="37px" margin="5px 0px">Phone: <InputText noGrid name="phone" maxWidth="300px" width="100%"/></H5>
    <DivButton TextAlign="right" MarginTop="20px"><Button onClick={handleSave}>Save</Button></DivButton>
  </div>
  :<div>
    <Image block margin="auto" size="150px" maxHeight="150px" src={profileImage?profileImage:'https://openclipart.org/image/2400px/svg_to_png/211821/matt-icons_preferences-desktop-personal.png'} />
    <BalanceModal balance={balance} userUid={userUid} />
    <H5 lineHeight="32px">Address: {profile.address}</H5>
    <H5 lineHeight="32px">Email: {profile.email}</H5>
    <H5 lineHeight="32px">Phone: {profile.phone}</H5>
    <AddSponsorModal sponsorEmail={sponsorEmail}/>
  </div>
  }
</Wrapper>
