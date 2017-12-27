import { Grid } from 'semantic-ui-react'
import DetailTable from '../molecules/DetailTable'
import Button, {ButtonGroup} from '../atoms/Button'
import Table from '../atoms/Table'
import Modal from '../molecules/Modal'
import H1 from '../atoms/H1'
import H3 from '../atoms/H3'
import H5 from '../atoms/H5'
import Flex from '../atoms/Flex'
import Label from '../atoms/Label'
import Wrapper from '../atoms/Wrapper'
import color from "../../static/json/color.json"
import { transactionInfo } from '../../src/stories/transactionInfo'

const buttonJson = status => [
	{
		name:'Pending',
		background: status==='pending'? color.warning : color.disabled,
		value: 'pending'
	},
	{
		name:'Sent',
		background: status==='sent'? color.success : color.disabled,
		value: 'sent'
	},
	{
		name:'Delivered',
		background: status==='delivered'? color.primary : color.disabled,
		value: 'delivered'
	},
	{
		name:'View',
		background: color.primary1,
		value:'view'
	}
]
const colorStatus = (status, current) => {
	if(status === current) {
		if(current ==='pending'){
			return color.warning
		}
		else if (current ==='sent'){
			return color.success
		}
		else if (current ==='delivered'){
			return color.primary
		}
	}
	else return color.disabled
}
export default ({status, setOrderStatus, orderId}) => (
	<div>
		{buttonJson(status).map(button=>
			<Button small background={button.background} 
				onClick={()=>setOrderStatus
				?setOrderStatus(orderId, button.value)
				:console.log(button.value)}
			>
			{button.name === 'View'
			?<Modal
				context={
					<Grid divided='vertically'>
					<Grid.Row columns={2}>
						<Grid.Column>
							<Wrapper width="100%" color="black">
							<H3 color="black" left>รายละเอียดการสั่งซื้อ</H3>
								{<DetailTable transactionInfo={transactionInfo} />}
						</Wrapper>
						</Grid.Column>
						<Grid.Column>
							<Wrapper paddingLeft="5vh">
								<H1 color="black" left>ที่อยู่การจัดส่ง</H1>
								<H5 color="black" left>{transactionInfo.Name}</H5>
								<H5 color="black" left>{transactionInfo.PhoneNumber}</H5>
								<H5 color="black" left>{transactionInfo.Address1}</H5>
								<H5 color="black" left>{transactionInfo.Address2}</H5>
								<H5 color="black" left>{transactionInfo.Province} {transactionInfo.PostalCode} </H5>
								<Button color="orange"><H1 color="white">พิมพ์</H1></Button>
								<Flex direction="inherit" wrap="nowrap">
									<H1 color="black" left>สถานะ:</H1>
									{status==='pending'
									? console.log('status', status, button.background)
									:console.log('status', status, button.background)
									}
									<Table textAlign="center" marginTop="10px">
										<tr>
											<Button minWidth="200px" background={colorStatus(status,'pending')} >รอดำเนินการ</Button>
										</tr>
										<tr>
											<Button minWidth="200px" background={colorStatus(status,'sent')} >จัดส่งแล้ว</Button>
										</tr>
										<tr>
											<Button  minWidth="200px" background={colorStatus(status,'delivered')} >ยกเลิก</Button>
										</tr>
									</Table>
								</Flex>
							</Wrapper>
						</Grid.Column>
					</Grid.Row>
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
