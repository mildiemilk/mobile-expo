import Header from './Header'
import Head from './DefaultHead'
import BankAccountsForTransfer from '../ecosystems/BankAccountsForTransfer'
import CreditCardExpandButton from '../ecosystems/CreditCardExpandButton'
import Wrapper from '../atoms/Wrapper'
import Flex from '../atoms/Flex'

export default props => 
<div>
	<Head/>
	<Header />
	<Flex justifyContent="space" center verticleCenter width="-webkit-fill-available">
		<BankAccountsForTransfer {...props}/>
		<CreditCardExpandButton {...props}/>
	</Flex>
</div>
