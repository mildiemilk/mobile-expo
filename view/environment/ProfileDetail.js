import { Grid, Icon } from 'semantic-ui-react'
import styled from 'styled-components'
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
import ProfileDetailDisplay from '../organisms/ProfileDetailDisplay'
import ProfileDetailEdit from '../organisms/ProfileDetailEdit'
import Flex from '../atoms/Flex'

const EditGrid = styled(Grid.Column)`
  padding-right: 0px !important;
`

  
export default({profile, handleEdit, isEdit, detail, handleSave, handleImageChange, profileImage, balance, userUid, sponsorEmail, isProfileMobile, handleProfileMobile, isUserMembership, membershipProductsNumber, userPending,user, cancelEdit,initialProps}) => <Grid>
  <EditGrid mobile={16} tablet={16} computer={16}>
    {userPending?<Wrapper><H3>Loading...</H3></Wrapper>:null}
    <Wrapper height="100%" widthSmall="100vw" noMargin noBorder noBorderRadius style={{border:'none'}}>
      {isEdit ? null:<DivButton TextAlign="right"><Button secondary margin="0px 10px" onClick={handleEdit}>Edit</Button></DivButton>}
      <H5 margin="20px 0px" center>{profile.name}</H5>
      {isEdit 
      ?<div><DivImage center>
        {profileImage ?<Image src={profileImage?profileImage:'/static/img/noimg.png'} />:<Button noFlexGrow>Upload</Button>}
        <Label for="buttonImg"><input style={{display:"none"}} name="image" onChange={e => handleImageChange(e)} id="buttonImg" type="file" /></Label>
        </DivImage>
        <H5 margin="15px 0px 0px 0px" lineHeight="20px">จำนวนเงิน: {profile.wallet||0} บาท</H5> 
        <H5 lineHeight="37px" margin="5px 0px">ชื่อ: <InputText placeholder={profile.name} noGrid name="name" maxWidth="300px" width="100%"/></H5>
        <H5 lineHeight="37px" margin="5px 0px">ที่อยู่: <InputText placeholder={profile.address} noGrid name="address" maxWidth="300px" width="100%"/></H5>
        <H5 lineHeight="37px" margin="5px 0px">อีเมล: <InputText placeholder={profile.email} noGrid name="email" maxWidth="300px" width="100%"/></H5>
        <H5 lineHeight="37px" margin="5px 0px">เบอร์โทรศัพท์: <InputText placeholder={profile.phone} noGrid name="phone" maxWidth="300px" width="100%"/></H5>
        <Flex direction="row" >
          <Button margin="0 5px 0 0" onClick={()=>cancelEdit()} secondary>cancel</Button>
          <Button margin="0 0 0 5px" onClick={handleSave} secondary>Save</Button>
        </Flex>
      </div>
      :<div>
        <Image block margin="auto" size="150px" maxHeight="150px" src={profileImage?profileImage:'https://openclipart.org/image/2400px/svg_to_png/211821/matt-icons_preferences-desktop-personal.png'} />
        <BalanceModal balance={balance} userUid={userUid} user={user}/>
        <H5 lineHeight="32px">ที่อยู่: {profile.address}</H5>
        <H5 lineHeight="32px">อีเมล: {profile.email}</H5>
        <H5 lineHeight="32px">เบอร์โทรศัพท์: {profile.phone}</H5>
        {
          isUserMembership? <H5 lineHeight="32px">สินค้าสมาชิก: {membershipProductsNumber} รายการ</H5>: null
        }
        {
          isUserMembership && membershipProductsNumber >= 5 ? <H5 color="red"> ลงสินค้าแบบสมาชิกครบ5รายการแล้ว</H5>:null
        }
      </div>
      }
      {isProfileMobile&&
        <Button onClick={handleProfileMobile} margin="10px 0px" secondary>Back</Button>
      }
    </Wrapper>

  </EditGrid>
</Grid>
