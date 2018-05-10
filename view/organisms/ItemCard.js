import { Checkbox, Card, Button, Icon } from 'semantic-ui-react'
import Modal from '../molecules/Modal'
import React, {Fragment} from 'react'
import Image from '../atoms/Image'
import AddStock from '../molecules/AddStocksButton'
import AddSponsorModal from '../molecules/AddSponsorModal'
import { validateEmail } from '../../lib/helpers/formvalidation'
import ProductAction from '../molecules/ProductAction'
import H3 from '../atoms/H3';

const ConfirmDeleteProduct = () => <div>
	<H3>ลบสินค้า</H3>
	<p>การที่คุณลบสินค้าแบบนี้คือการลบสินค้าถาวร คุณต้องการลบหรือไม่?</p>
</div>

class ItemCard extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			sponsors : {},
			status : false
		}
	}

	handleChangeStatus = () => this.setState({ status: true })

	async componentWillReceiveProps(nextProps){
		const { productKey, getProductSponsor } = nextProps
		{getProductSponsor ?
			await getProductSponsor(productKey).then(res => res? this.setState({sponsors: res}):null)
			:null}
		this.setState({ status: false })
	}

	isExist = (sponsorEmail, sponsors) => {
		const result = Object.keys(sponsors).map( sponsorKey => {
			return sponsors[sponsorKey].email === sponsorEmail
		})
		return result.indexOf(true) !== -1
	}

	render() {
		const { userUid, product, productKey, setProductStock, sponsorEmail, setProductSponsor, isSponsor, setProductActive, setProductMembership, isUserMembership, membershipProductsNumber, deleteProduct, isMember, isAdmin } = this.props
		if(!product){
			return null
		}
		const { sponsors, status } = this.state
		let validateEmailResult = validateEmail(sponsorEmail ? sponsorEmail : null)
		const isEmailExist = this.isExist(sponsorEmail, sponsors)
		const isProductOwner = product.userUid === userUid
		return(
			<Card style={{margin:'5px'}}>
				{(isProductOwner || isAdmin )&&
				<Modal 
					context={<ConfirmDeleteProduct/>} 
					action={<Button color='red' onClick={()=>deleteProduct(productKey)}>
						<Icon name='trash'/>ลบสินค้าถาวร</Button>}
				>
					<Card.Content>
						<Button basic Icon size='tiny' style={{position:'absolute',right:'0',top:'0'}} icon='trash'/>
					</Card.Content>
				</Modal>
				}
				<Image alt="242x200" src={product.productImages ? product.productImages[0]: '/static/img/noimg.png'} maxHeight="200px" />
				<Card.Content>
					<Card.Header>
						{product.productName}
					</Card.Header>
					<Card.Description>
						<table>
							<tbody>
								{!isMember&&
								<tr>
									{ 
										isProductOwner&& <Fragment>
											<td colSpan={2} style={{textAlign:'right'}}>เปิดขาย:</td>
											<td><Checkbox toggle name="active" checked={product.active} onClick={() => setProductActive(!product.active, productKey)}/>
											</td>
										</Fragment>
									}
									{
										(isProductOwner && isUserMembership  && !(membershipProductsNumber >= 5 && !product.isMembership)) &&
							<Fragment>
								<td style={{textAlign:'right'}}>สมาชิก:</td>
								<td><Checkbox toggle name="isMembership" checked={product.isMembership} onClick={() => setProductMembership(!product.isMembership, productKey)}/>
								</td>
							</Fragment>
									}
								</tr> 
								}
								<tr>
									<td colSpan={2} style={{textAlign:'right'}}>ราคา:</td>
									<td colSpan={2}>{product.price} บาท</td>
									<td></td>
								</tr>
								<tr>
									<td colSpan={2} style={{textAlign:'right'}}>ค่าคอม:</td>
									<td colSpan={2}>{product.comissionCash || '0.00'} บาท </td>
								</tr>
								{!isMember&&<Fragment>
									{isProductOwner? 
										<tr>
											<td colSpan={2} style={{textAlign:'right'}}>สต๊อก: </td>
											<td>{product.stock}</td>
											<td>{userUid === product.userUid && <AddStock stock={product.stock} productKey={productKey} setProductStock={setProductStock} round/> }</td>
										</tr>
										: <tr>
											<td colSpan={2} style={{textAlign:'right'}}>สต๊อก: </td>
											{!product.active? <td  colSpan={2} style={{color:'red'}}>สินค้าหมด</td>: <td>{product.stock}</td>}
										</tr>
									}

									{isProductOwner&&<tr>
										<td colSpan={2} style={{textAlign:'right'}}>ผู้ขาย: </td>
										<td>{Object.keys(sponsors).length}</td>
										<td>{userUid === product.userUid &&
									<AddSponsorModal 
										productKey={productKey} 
										sponsors={sponsors} 
										sponsorEmail={sponsorEmail} 
										setProductSponsor={setProductSponsor}
										handleChangeStatus={this.handleChangeStatus}
										status={status}
										statusEmail={validateEmailResult.status}
										displayText={validateEmailResult.errorText}
										isEmailExist={isEmailExist}
										round />
										}</td>
									</tr>}
								</Fragment>
								}
							</tbody>
						</table>
					</Card.Description>
				</Card.Content>
				<Card.Content extra>
					<ProductAction product={product} productId={productKey} userUid={userUid} isSponsor={isSponsor} />
				</Card.Content>
			</Card>
		)
	}
}

export default ItemCard
