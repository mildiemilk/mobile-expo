import Header from './Header'
import Head from './DefaultHead'
import BankAccountsForTransfer from '../ecosystems/BankAccountsForTransfer'
import CreditCardExpandButton from '../ecosystems/CreditCardExpandButton'
import Multitab from '../molecules/Multitab'
import CreditCard from '../organisms/CreditCard'
import InternetBanking from '../organisms/InternetBanking'
import HeightDiv from '../atoms/HeightDiv'
import Button from '../atoms/Button';

export const Tabs = props =>  {
	let tabs = [
		{
			buttonLabel:'โอนผ่านธนาคาร',
			component:<BankAccountsForTransfer {...props}/>
		},
		{
			buttonLabel: 'จ่ายผ่านบัตรเครดิต/เดบิต',
			component: <CreditCard {...props}/>
		}
	]
	if(props.transaction.price >= 2000) 
		tabs.push({
			buttonLabel: 'Internet Banking',
			component: <InternetBanking {...props}/>
		})
	return tabs
}

export default props => 
<HeightDiv>
	<Head/>
	<Header content={<Multitab tabs={Tabs(props)} />} />
</HeightDiv>
