import CreditCardBg from '../atoms/CreditCardBg'
import CardNumberInput from '../molecules/CardNumberInput'
import CreditCardMonth from '../molecules/CreditCardMonth'
import CreditCardYear from '../molecules/CreditCardYear'
import Cvv from '../molecules/CvvInput'
import TextField from '../atoms/TextField'
import Flex from '../atoms/Flex'
import styled from 'styled-components'
import Button from '../atoms/Button'

const CardLabel = styled.span`
font-family: Avenir;
font-size: 12px;
font-weight: 300;
text-align: center;
color: #ffffff;
`

export default props =>
<CreditCardBg>
	<table>
		<tbody>
			<tr>
				<td align="right"><CardLabel>Card Number </CardLabel></td>
				<td><CardNumberInput name="cardNumber"/></td>
			</tr>
			<tr>
				<td align="right"><CardLabel>Name</CardLabel></td>
				<td><TextField name="name"  width="100%" maxWidth="200px" fontSize="1.2em"/></td>
			</tr>
			<tr>
				<td align="right"><CardLabel>Expiry Date</CardLabel></td>
				<td><Flex direction="row"><CreditCardMonth name="month"/> <CreditCardYear name="year"/></Flex></td>
			</tr>
			<tr>
				<td align="right"><CardLabel>CVV</CardLabel></td>
				<td><Cvv name="cvv"/></td>
			</tr>
			<tr>
				<td><Button>จ่ายเลย</Button></td>
			</tr>
		</tbody>
	</table>
</CreditCardBg>