import React from 'react'
import { Image } from 'react-bootstrap'
import { Icon, Grid, Form, Divider } from 'semantic-ui-react'
import Head from './DefaultHead'
import Header from './Header'
import { TextInput, NumberInput } from '../components/Form'
import { FieldArray } from 'redux-form'
import { Button, H1 } from '../components/Styled'
import ProductDescriptionPreview from '../components/ProductDescription'
import ProductDescriptionForm from '../components/ProductDescriptionForm'
import styled from 'styled-components'

const MainImage = styled.img`
	display: inline-block;
	min-width:400px;
	min-height:400px;
`

const SubImage = styled.img`
	display: inline-block;
	min-width:76px;
	min-height:76px;
	margin: 0px 2px 0px 2px;
`

const ImageWrap = styled.div`
	display: flex;
	flex-direction: column;
`

const Segment = styled.div`
	width: 100%;
	padding: 2px 0px 2px 2px;
`

const InfoWrap = styled.div`
	border: 1px solid #ccc; 
	min-height: 320px; 
	min-width: 320px;
	width: 100%;
	max-width: 800px;
	flex: 1 1 auto;
	margin: 0px 4px 0px 2px;
`
const ImportantInfoWrap = styled.div`
	display: flex;
	flex-flow: row wrap;
`

const PriceWrap = styled.div`
	padding-left:7px;
`

export default ({addProductDescription, productDescription, handleSubmit}) => 
<div>
	<Head/>
	<Header/>
	<Segment>
		<ImportantInfoWrap>
			<ImageWrap>
				<div>
					<MainImage />
				</div>
				<div>
					<SubImage/>
					<SubImage/>
					<SubImage/>
					<SubImage/>
					<SubImage/>									
				</div>
			</ImageWrap>
			<InfoWrap>
				<Form>
					<TextInput
						name="productName"
						type="text"
						placeholder="product name"
					/>
					<TextInput
							name="brandName"
							type="text"
							placeholder="brand name"
						/>
						<PriceWrap>
							<Form.Group  widths='equal'>
								<TextInput
									name="price"
									type="number"
									placeholder="price = 00.00 baht"
									width="2"
								/>
								<TextInput
									name="comissionPercent"
									type="number"
									placeholder="comission 00%"
									normalizer={value => value >= 75 ? 75 : value}
									width="1"
								/>
								<TextInput
									name="comissionCash"
									type="number"
									placeholder="comission 00 baht"
									normalizer={
										(value, previousValue, allValues) => 
										(value > (0.75 - allValues['comissionPercent']/100) * allValues['price'] ? (0.75 - allValues['comissionPercent']/100) * allValues['price']: value )
										}
									width="1"
								/>
							</Form.Group>
						</PriceWrap>
						<FieldArray name="productDescription" component={ProductDescriptionForm} productDescription={productDescription}/>
						<Button fluid size='big' onClick={()=>handleSubmit(productDescription)}>Submit</Button>
				</Form>
			</InfoWrap>
		</ImportantInfoWrap>
	</Segment>
	<ProductDescriptionPreview productDescription={productDescription} />
</div>
