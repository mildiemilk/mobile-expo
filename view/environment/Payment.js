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
	const { price, quantity } = props.transaction
	let tabs = [
		{
			buttonLabel:'โอนผ่านธนาคาร',
			component:<BankAccountsForTransfer {...props}/>
		}
	]
	if(props.transaction.price >= 20)
		tabs.push(
			{
				buttonLabel: 'จ่ายผ่านบัตรเครดิต/เดบิต',
				component: <CreditCard {...props}/>
			},
			{
				buttonLabel: 'Internet Banking',
				component: <InternetBanking {...props}/>
			}
		)
	return tabs
}

export default props => 
<HeightDiv>
	<Head/>
	<Header content={<Multitab tabs={Tabs(props)} />} />
</HeightDiv>
