import Header from './Header'
import Head from './DefaultHead'
import BankAccountsForTransfer from '../ecosystems/BankAccountsForTransfer'
import CreditCardExpandButton from '../ecosystems/CreditCardExpandButton'
import Multitab from '../molecules/Multitab'
import CreditCard from '../organisms/CreditCard'

export const Tabs = props =>  [
	{
		buttonLabal:'โอนผ่านธนาคาร',
		component:<BankAccountsForTransfer {...props}/>
	},
	{
		buttonLabal: 'จ่ายผ่านบัตรเครดิต/เดบิต',
		component: <CreditCard {...props}/>
	}
]

export default props => 
<div>
	<Head/>
	<Header />
	<Multitab tabs={Tabs(props)} />
</div>
