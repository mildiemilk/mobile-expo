import H3 from '../atoms/H3'
import Image from '../atoms/Image'
import H5 from '../atoms/H5'
import Wrapper from '../atoms/Wrapper'

export default ({profile}) => <Wrapper  padding="20px" margin="25px">
  <H5 center>{profile.name}</H5>
  <Image block margin="auto" size="150px" maxHeight="150px" src="https://openclipart.org/image/2400px/svg_to_png/211821/matt-icons_preferences-desktop-personal.png" />
  <H5>Wallet: {profile.wallet} บาท</H5>
  <H5>Address: {profile.address}</H5>
  <H5>Email: {profile.email}</H5>
  <H5>Phone: {profile.phone}</H5>
</Wrapper>