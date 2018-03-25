import Image from '../atoms/Image'
import H5 from '../atoms/H5'
import BalanceModal from '../molecules/BalanceModal'

export default props => <div>
<Image block margin="auto" size="150px" maxHeight="150px" src={props.profileImage?props.profileImage:'https://openclipart.org/image/2400px/svg_to_png/211821/matt-icons_preferences-desktop-personal.png'} />
<BalanceModal balance={props.balance} userUid={props.userUid} />
<H5 lineHeight="32px">ที่อยู่: {props.profile.address}</H5>
<H5 lineHeight="32px">อีเมล: {props.profile.email}</H5>
<H5 lineHeight="32px">เบอร์โทรศัพท์: {props.profile.phone}</H5>
</div>
