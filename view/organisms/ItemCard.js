import { Icon } from 'semantic-ui-react'
import React from 'react'
import Link from 'next/link'
import copy from 'copy-to-clipboard'
import styled from 'styled-components'
import Image from '../atoms/Image'
import Header from '../atoms/H3'
import Wrapper from '../atoms/Wrapper'
import AddStock from '../molecules/AddStocksButton'
import Button, { ButtonGroup } from '../atoms/Button'
import color from '../../static/json/color.json'
import FacebookProvider, { Share } from 'react-facebook'
import AddSponsorModal from '../molecules/AddSponsorModal'
import { validateEmail } from '../../lib/helpers/formvalidation'

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

	link = (productKey, userUid) => `http://${window.location.hostname}${window.location.port?`:${window.location.port}`:''}/p/${productKey}/${userUid}`
	
	copyLink = (productKey, userUid) => {
		copy(this.link(productKey,userUid))
		alert('the link has been copied')
	}

	isExist = (sponsorEmail, sponsors) => {
		const result = Object.keys(sponsors).map( sponsorKey => {
			return sponsors[sponsorKey].email === sponsorEmail
		})
		return result.indexOf(true) !== -1
	}

	render() {
		const { userUid, Product, productKey, setProductStock, sponsorEmail, setProductSponsor, getProductSponsor, sponsorProduct, isSponsor } = this.props
		const { brandName, comissionCash, comissionPercent, price, productDescription, productName, productImages, stock} = Product
		const { sponsors, status } = this.state
		let validateEmailResult = validateEmail(sponsorEmail ? sponsorEmail : null)
		const isEmailExist = this.isExist(sponsorEmail, sponsors)
		console.log('PROPS', this.props)
		{console.log('UserID==>',userUid, Product.userUid)}
		console.log('sponItem', sponsorProduct)
		return(
			<Wrapper bigScreenWidth="max-content">
				<Link as={`/p/${productKey}/${userUid}`} href={`/product?productID=${productKey}&userID=${userUid}`}>
					<Image alt="242x200" src={productImages ? productImages[0]: '/static/img/noimg.png'} smallScreen="display:none;" maxHeight="200px"/>
				</Link>
				<Header>
					{productName}
				</Header>
				<div>
					<table>
						<tbody>
						<tr>
							<td style={{textAlign:'right'}}>Price:</td>
							<td>{price} baht</td>
							<td></td>
						</tr>
						<tr>
							<td style={{textAlign:'right'}}>Comission:</td>
							<td>{comissionPercent} % & {comissionCash || '0.00'} บาท </td>
						</tr>
						<tr>
							<td style={{textAlign:'right'}}>Stock: </td>
							<td>{stock}</td>
							{!isSponsor?<td>{userUid === Product.userUid ? <AddStock stock={stock} productKey={productKey} setProductStock={setProductStock} round/>: null }</td>:null}
						</tr>
						{!isSponsor?<tr>
							<td style={{textAlign:'right'}}>Number of distributor: </td>
							<td>{Object.keys(sponsors).length}</td>
							<td>{userUid === Product.userUid ? 
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
					<ButtonGroup>
						{!isSponsor?
							userUid === Product.userUid ?
						<Link as={`/p/edit/${productKey}/${userUid}`} href={`/productRegister?productID=${productKey}&userID=${userUid}`}><Button background="none" textColor={color.darkText} basic color='#52BE80'>Edit</Button></Link>
						:null:null}
						<Link as={`/p/${productKey}/${userUid}`} href={`/product?productID=${productKey}&userID=${userUid}`}><Button background="none" textColor={color.darkText} basic color='#45B39D'>Preview</Button></Link>
						<Button background="none" basic color='teal' onClick={()=>this.copyLink(productKey, userUid)}  textColor={color.darkText} >GetLink</Button>	
						<FacebookProvider appId="139659809933718"> {/* TODO: change appId to your appId */}
							{/* <Share href={`${window.location.hostname}${window.location.port?`:${window.location.port}`:null}/p/${productKey}/${userUid}`}> */}
							<Share href={this.link(productKey, userUid)}>
								<Button background="none" basic color='#3f87a6'  textColor={color.darkText} >Share <i className="fa fa-share" aria-hidden="true"  textColor={color.darkText} ></i></Button>
							</Share>
						</FacebookProvider>
					</ButtonGroup>
				</div>
			</Wrapper>
		)
	}
}

export default ItemCard
