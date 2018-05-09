import ProfilePic from '../atoms/Image'
import OrderTable from '../molecules/OrderTable'
import ContactInformation from '../molecules/ContactInformation'
import BalancePanel from '../molecules/BalancePanel'
import UserProfile from '../organisms/UserProfile'
import Flex from '../atoms/Flex'

export default ({profileImage, name, shop, rating, phone, address, email, balance, orders}) =>
<Flex>
    <div>
    <ProfilePic src={profileImage}/>
    <OrderTable orders={orders} />
    </div>
    <div>
        <UserProfile name={name} shop={shop} rating={rating} balance={balance}/>
        <ContactInformation phone={phone} address={address} email={email} shop={shop}  />
    </div>
</Flex>

