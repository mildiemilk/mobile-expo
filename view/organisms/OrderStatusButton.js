import { Grid } from 'semantic-ui-react'
import DetailTable from '../molecules/DetailTable'
import Button  from '../atoms/Button'
import Table from '../atoms/Table'
import Modal from '../molecules/Modal'
import H1 from '../atoms/H1'
import H3 from '../atoms/H3'
import H5 from '../atoms/H5'
import Flex from '../atoms/Flex'
import Label from '../atoms/Label'
import Wrapper from '../atoms/Wrapper'
import color from "../../static/json/color.json"

const buttonJson = status => [
	{
		name:'รอส่ง',
		background: status==='pending'? color.warning : color.disabled,
		value: 'pending'
	},
	{
		name:'ส่งแล้ว',
		background: status==='sent'? color.primary : color.disabled,
		value: 'sent'
	},
	{
		name:'รับแล้ว',
		background: status==='received'? color.success : color.disabled,
		value: 'received'
	},
	{
		name:'ดู',
		background: color.darkText,
		value:'view'
	}
]
const colorStatus = (status, current) => {
	if(status === current) {
		if(current ==='pending'){
			return color.warning
		}
		else if (current ==='sent'){
			return color.primary
		}
		else if (current ==='received'){
			return color.success
		}
	}
	else return color.disabled
}
export default ({status, setOrderStatus, orderId, transactionInfo}) => (
	<div>
		{buttonJson(status).map(button=>
			<Button fixedSize small background={button.background}
				minWidth="93px" 
				
				onClick={()=>setOrderStatus
				?setOrderStatus(orderId, button.value)
				:null}
			>
			{button.value === 'view'
			?<Modal
			height='null'
			minHeight='100vh'
			padding="0px"
				context={
					<Grid reversed='mobile' columns='equal' stackable>
						<Grid.Column>
							<Wrapper color="black">
							<H3 color="black" left>รายละเอียดการสั่งซื้อ</H3>
								{<DetailTable transactionInfo={transactionInfo} />}
						</Wrapper>
						</Grid.Column>
						<Grid.Column>
							<Wrapper padding="10px 5vh">
								<H1 color="black" left>ที่อยู่การจัดส่ง</H1>
								<H5 color="black" left>{transactionInfo.Name}</H5>
								<H5 color="black" left>{transactionInfo.PhoneNumber}</H5>
								<H5 color="black" left>{transactionInfo.Address1}</H5>
								<H5 color="black" left>{transactionInfo.Address2}</H5>
								<H5 color="black" left>{transactionInfo.Province} {transactionInfo.PostalCode} </H5>
								<Button color="orange"><H1 color="white">พิมพ์</H1></Button>
								<H1 color="black" left padding="0" margin="0">สถานะ:</H1>
								<Flex direction="inherit" wrap="nowrap">
									<Table textAlign="center" marginTop="10px">
										<tbody>
											<tr>
												<Button minWidth="110px" background={colorStatus(status,'pending')} >รอดำเนินการ</Button>
											</tr>
											<tr>
												<Button minWidth="110px" background={colorStatus(status,'sent')} >จัดส่งแล้ว</Button>
											</tr>
											<tr>
												<Button  minWidth="110px" background={colorStatus(status,'received')} >ได้รับแล้ว</Button>
											</tr>
										</tbody>
									</Table>
								</Flex>
							</Wrapper>
						</Grid.Column>
				</Grid> 
				}
				children={button.name}
			>
			</Modal>
			: button.name
			}
		</Button>
		)}
		
	</div> 
)
