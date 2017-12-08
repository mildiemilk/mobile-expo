import Header from './Header'
import Head from './DefaultHead'
import BankAccountsForTransfer from '../ecosystems/BankAccountsForTransfer'
import CreditCardExpandButton from '../ecosystems/CreditCardExpandButton'
import Wrapper from '../atoms/Wrapper'
import Flex from '../atoms/Flex'

export default ({onCheckOut, savePaymentImage})=> 
<div>
	<Head/>
	<Header />
	<Flex justifyContent="space" verticleCenter height="400px">
		<BankAccountsForTransfer savePaymentImage={savePaymentImage} onCheckOut={onCheckOut}/>
		<CreditCardExpandButton onCheckOut={onCheckOut}/>
	</Flex>
</div>
