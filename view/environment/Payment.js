import Header from './Header'
import Button from '../atoms/Button'
import Head from './DefaultHead'
import CreditCard from '../organisms/CreditCard'
import BankAccountsForTransfer from '../ecosystems/BankAccountsForTransfer'
import Wrapper from '../atoms/Wrapper'

export default ({onCheckOut})=> 
<div>
	<Head/>
	<Header />
	<BankAccountsForTransfer/>
	<Wrapper maxWidth="516px" width="100%">
		<CreditCard />
	</Wrapper>
	<Button onClick={onCheckOut}>
		Pay Now
	</Button>
</div>
