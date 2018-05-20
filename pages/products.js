import { Component, Fragment } from 'react'
import withRedux from "next-redux-wrapper"
import { reduxForm, formValueSelector } from 'redux-form'
import { getUserProducts,getProductToSponsorTable  } from '../lib/handlers/product'
import loadFirebase from '../lib/database'
import store from '../lib/store'
import ItemCardMobile from '../view/organisms/ItemCardMobile'
import Header from '../view/environment/Header'
import Head from '../view/environment/DefaultHead'
import styled from 'styled-components'
import Flex from '../view/atoms/Flex'

class Products extends Component {
	
	async componentDidMount() {
		const auth = await loadFirebase('auth')
		await auth.onAuthStateChanged(async (user) => {
			await getUserProducts(user.uid)
			await getProductToSponsorTable(user.uid, user.email)
		})
	}

	render() {
		const {props} = this
		return <div>
			<Head/>
			<Header
				content={
					<Flex flexFlow='row wrap'>
						{
							Object.keys(props.userProducts).map( key => 
								<ItemCardMobile
									product = {props.userProducts[key]}
									productKey = {key}
									key={key}
									userUid={props.user.uid}
								/>
							)
						}
						{
							Object.keys(props.sponsorProducts).map( key => 
								<ItemCardMobile
									product = {props.sponsorProducts[key]}
									productKey = {key}
									key={key}
									userUid={props.user.uid}
								/>
							)

						}
					</Flex>
				}
			/>
		</div>
	}
}

Products = reduxForm({
	form:'profile',
	enableReinitialize:true,
	keepDirtyOnReinitialize:true
})(Products)

const selector = formValueSelector('profile')

const mapStateToProps = state => ({
	user: state.user,
	userProducts: state.userProducts,
	sponsorProducts: state.sponsorProducts,
	profile: state.profile,
	sponsorEmail: selector(state, 'sponsorEmail'),
	table: state.profile.transactionIds,
})


export default withRedux(() => store, mapStateToProps)(Products)
