import { Icon, Checkbox } from 'semantic-ui-react'
import React from 'react'
import Link from 'next/link'
import copy from 'copy-to-clipboard'
import styled from 'styled-components'
import Image from '../atoms/Image'
import Header from '../atoms/H3'
import Wrapper from '../atoms/Wrapper'
import Flex from '../atoms/Flex'
import AddStock from '../molecules/AddStocksButton'
import AddSponsorModal from '../molecules/AddSponsorModal'
import { validateEmail } from '../../lib/helpers/formvalidation'
import ProductAction from '../molecules/ProductAction'

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
		const { userUid, product, productKey, setProductStock, sponsorEmail, setProductSponsor, getProductSponsor, sponsorProduct, isSponsor, setProductActive, isMembership, setProductMembership } = this.props
		const { brandName, comissionCash, comissionPercent, price, productDescription, productName, productImages, stock} = this.props.product
		const { sponsors, status } = this.state
		let validateEmailResult = validateEmail(sponsorEmail ? sponsorEmail : null)
		const isEmailExist = this.isExist(sponsorEmail, sponsors)
		return(
			<Wrapper width="21vw">
				<Flex center verticleCenter>
					<Link as={`/p/${productKey}/${userUid}`} href={`/product?productID=${productKey}&userID=${userUid}`}>
						<Image alt="242x200" src={productImages ? productImages[0]: '/static/img/noimg.png'} smallScreen="display:none;" maxHeight="200px" size="20vw" />
					</Link>
				</Flex>
				<Header>
					{productName}
				</Header>
				<div>
					<table>
						<tbody>
						{ 
							!isSponsor? 
							<tr>
								<td style={{textAlign:'right'}}>Active:</td>
								<td><Checkbox toggle name="active" checked={product.active} onClick={() => setProductActive(!product.active, productKey)}/>
								</td>
							</tr> : null 
						}
						{
							isMembership?
							<tr>
								<td style={{textAlign:'right'}}>Membership:</td>
								<td><Checkbox toggle name="isMembership" checked={product.isMembership} onClick={() => setProductMembership(!product.isMembership, productKey)}/>
								</td>
							</tr> : null 
						}
						<tr>
							<td style={{textAlign:'right'}}>Price:</td>
							<td>{price} baht</td>
							<td></td>
						</tr>
						<tr>
							<td style={{textAlign:'right'}}>Comission:</td>
							<td>{comissionPercent} % & {comissionCash || '0.00'} บาท </td>
						</tr>
						{!isSponsor? 
						<tr>
							<td style={{textAlign:'right'}}>Stock: </td>
							<td>{stock}</td>
							<td>{userUid === product.userUid ? <AddStock stock={stock} productKey={productKey} setProductStock={setProductStock} round/>: null }</td>
						</tr>
						: <tr>
							<td style={{textAlign:'right'}}>Stock: </td>
							{!product.active? <td style={{color:'red'}}>Out of stock</td>: <td>{stock}</td>}
						</tr>
						}
						
						{!isSponsor?<tr>
							<td style={{textAlign:'right'}}>Number of distributor: </td>
							<td>{Object.keys(sponsors).length}</td>
							<td>{userUid === product.userUid ? 
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
								: null }</td>
						</tr>:null}
						</tbody>
					</table>
					<ProductAction product={product} productId={productKey} userUid={userUid} isSponsor={isSponsor} />
				</div>
			</Wrapper>
		)
	}
}

export default ItemCard
