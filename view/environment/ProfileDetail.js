import Link from 'next/link'
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


export default ({profile, handleEdit, isEdit, detail, handleSave, handleImageChange, profileImage, balance, userUid, sponsorEmail}) => <Wrapper padding="20px"
maxWidth="320px"
flexGrow="1"
height= "max-content"
>
  {isEdit ? null:<DivButton TextAlign="right"><Button onClick={handleEdit}>Edit</Button></DivButton>}
  <H5 margin="20px 0px" center>{profile.name}</H5>
  {isEdit?
    <ProfileDetailEdit profileImage={profileImage} wallet={propfile.wallet} handleImageChange={handleImageChange} handleSave={handleSave}/>:
    <ProfileDetailDisplay profile={profile} userUid={userUid} balance={balance} profileImage={profileImage} />
  }
  <Link href="/member">
    <Button>Member</Button>
  </Link>
</Wrapper>
