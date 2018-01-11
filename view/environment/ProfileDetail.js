import H3 from '../atoms/H3'
import Image from '../atoms/Image'
import H5 from '../atoms/H5'
import Wrapper from '../atoms/Wrapper'

export default ({user}) => <Wrapper noBorder padding="0px 20px">
  <H3>User Profile</H3>
  <H5>Name: {user.name}</H5>
  <Image size="150px" maxHeight="150px" src="https://openclipart.org/image/2400px/svg_to_png/211821/matt-icons_preferences-desktop-personal.png" />
  <H5>Wallet: {user.wallet}</H5>
  <H5>Address: {user.address}</H5>
  <H5>Email: {user.email}</H5>
  <H5>Phone: {user.phone}</H5>
</Wrapper>