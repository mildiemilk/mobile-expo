import CreditCardBg from '../atoms/CreditCardBg'
import CardNumberInput from '../molecules/CardNumberInput'
import CreditCardMonth from '../molecules/CreditCardMonth'
import CreditCardYear from '../molecules/CreditCardYear'
import Cvv from '../molecules/CvvInput'
import TextField from '../atoms/TextField'
import Flex from '../atoms/Flex'
import styled from 'styled-components'
import Button from '../atoms/Button'
import Modal from '../molecules/Modal'
import Wrapper from '../atoms/Wrapper'
import H3 from '../atoms/H3'
import WebExplain from '../organisms/WebExplain'

const CardLabel = styled.span`
font-family: Avenir;
font-size: 12px;
font-weight: 300;
text-align: center;
`

const ModalContext = (pending) => 
<Wrapper>
	{pending? <H3>กำลังทำรายการ</H3>:<H3>ทำรายการเรียบร้อย</H3>}
	<WebExplain/>
</Wrapper>

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
		</tbody>
	</table>
	<Modal context={ModalContext(props.pending)} redirectUrl='/'>
		<Button fullWidth disabled={!props.validateCreditCard} buttonDisabled={!props.validateCreditCard} onClick={props.onCheckOut}>จ่ายเลย</Button>
	</Modal>
</CreditCardBg>