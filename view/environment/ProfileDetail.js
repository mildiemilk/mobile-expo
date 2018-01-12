import H3 from '../atoms/H3'
import Image from '../atoms/Image'
import H5 from '../atoms/H5'
import Wrapper from '../atoms/Wrapper'

export default ({user}) => <Wrapper  padding="20px" margin="25px">
  <H5 center>{user.name}</H5>
  <Image block margin="auto" size="150px" maxHeight="150px" src="https://openclipart.org/image/2400px/svg_to_png/211821/matt-icons_preferences-desktop-personal.png" />
  <H5>Wallet: {user.wallet} บาท</H5>
  <H5>Address: {user.address}</H5>
  <H5>Email: {user.email}</H5>
  <H5>Phone: {user.phone}</H5>
</Wrapper>