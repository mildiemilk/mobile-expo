import Header from './Header'
import Head from './DefaultHead'
import BankAccountsForTransfer from '../ecosystems/BankAccountsForTransfer'
import CreditCardExpandButton from '../ecosystems/CreditCardExpandButton'
import Multitab from '../molecules/Multitab'
import CreditCard from '../organisms/CreditCard'
import InternetBanking from '../organisms/InternetBanking'
import HeightDiv from '../atoms/HeightDiv'
import Button from '../atoms/Button';

export default props => 
<HeightDiv>
	<Head/>
	<Header content={<BankAccountsForTransfer {...props}/>} />
</HeightDiv>
