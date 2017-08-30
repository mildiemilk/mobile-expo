import React from 'react'
import { Image } from 'react-bootstrap'
import { Icon, Grid, Form, Divider } from 'semantic-ui-react'
import Head from './DefaultHead'
import Header from './Header'
import { TextInput, NumberInput } from '../components/Form'
import { FieldArray } from 'redux-form'
import { Segment, Button, H1 } from '../components/Styled'
import ProductDescriptionPreview from '../components/ProductDescription'
import ProductDescriptionForm from '../components/ProductDescriptionForm'

export default ({addProductDescription, productDescription, handleSubmit}) => 
<div>
	<Head/>
	<Header/>
	<Segment>
		<Form>
			<Grid>
				<Grid.Row>
					<Grid.Column>
						<H1>Register Product</H1>
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
								width="2"
							/>
							<TextInput
								name="comissionPercent"
								type="number"
								placeholder="00%"
								label="seller get %"
								normalizer={value => value >= 75 ? 75 : value}
								width="2"
							/>
							<TextInput
								name="comissionCash"
								type="number"
								placeholder="00 baht"
								label="seller get cash"
								normalizer={
									(value, previousValue, allValues) => 
									(value > (0.75 - allValues['comissionPercent']/100) * allValues['price'] ? (0.75 - allValues['comissionPercent']/100) * allValues['price']: value )
									}
								width="2"
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
				<Segment>
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
				</Segment>
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
	</Segment>
</div>
