import React from 'react'
import { Image } from 'react-bootstrap'
import { Button, Icon, Grid, Form, Segment, Divider } from 'semantic-ui-react'
import Head from './DefaultHead'
import Header from './Header'
import { TextInput, NumberInput } from '../components/Form'
import { FieldArray } from 'redux-form'
import ProductDescriptionPreview from '../components/ProductDescription'
import ProductDescriptionForm from '../components/ProductDescriptionForm'

export default ({addProductDescription, productDescription, handleSubmit}) => 
<div>
	<Head/>
	<Header/>
	<Form>
		<Grid>
			<Grid.Row>
				<Grid.Column>
					<h1>Register Product</h1>
				</Grid.Column>
			</Grid.Row>
			<Grid.Row>
				<Grid.Column>
					<TextInput
						name="productName"
						type="text"
						placeholder="product name"
						label="product name"
					/>
				</Grid.Column>
			</Grid.Row>
			<Grid.Row>
				<Grid.Column>			
					<TextInput
						name="brandName"
						label="brand name"
						type="text"
						placeholder="brand name"
					/>
				</Grid.Column>
			</Grid.Row>
			<Grid.Row>
				<Grid.Column>
					<Form.Group>
						<TextInput
							name="price"
							type="number"
							placeholder="00.00 baht"
							label="price"
						/>
						<TextInput
							name="comissionPercent"
							type="number"
							placeholder="00%"
							label="comission % (max 75%)"
							normalizer={value => value >= 75 ? 75 : value}
						/>
						<TextInput
							name="comissionCash"
							type="number"
							placeholder="00 baht"
							label="comissionCash"
							normalizer={
								(value, previousValue, allValues) => 
								(value > (0.75 - allValues['comissionPercent']/100) * allValues['price'] ? (0.75 - allValues['comissionPercent']/100) * allValues['price']: value )
								}
						/>
					</Form.Group>
				</Grid.Column>
			</Grid.Row>
			<Grid.Row>
				<Grid.Column>
					<FieldArray name="productDescription" component={ProductDescriptionForm} productDescription={productDescription}/>
				</Grid.Column>
			</Grid.Row>
			<Grid.Row>
				<Grid.Column>
					<Button onClick={()=>handleSubmit(productDescription)}>Submit</Button>
				</Grid.Column>
			</Grid.Row>
			<Grid.Row>
				<Grid.Column>
					<h4>Preview</h4>
				</Grid.Column>
			</Grid.Row>
			<Grid.Row>
				<Grid.Column>
				<ProductDescriptionPreview productDescription={productDescription} />
				</Grid.Column>
			</Grid.Row>
			<Grid.Row>
				<Grid.Column>
				<h3>image</h3>
				</Grid.Column>
			</Grid.Row>
			<Grid.Row>
				<Grid.Column>
					<div className="image-wrapper">
						<i className="overlay-image fa fa-pencil" />
						<image alt="template" />
					</div>
					<image alt="template"/>
					<image alt="template"/>
					<image alt="template"/>
					<image alt="template"/>
					<image alt="plus" />
				</Grid.Column>
			</Grid.Row>
		</Grid>
	</Form>
</div>
