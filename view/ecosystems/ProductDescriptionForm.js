import DropZoneInput from '../organisms/DropZoneInput'
import { Button, Form, Icon } from 'semantic-ui-react'
import { Field } from 'redux-form'
import	FloatRight from '../atoms/FloatRight'
import	SubSegment from '../atoms/SubSegment' 
import	FloatLeft from '../atoms/FloatLeft'
import styled from 'styled-components'


export default ({ fields, productDescription }) => 
<div> 
	<div>		
			<Field
			className="form-control"
			name='shortDescription'
			component="textarea"
			placeholder="short description here"
		/>
		{fields.map((member, index) => {
			let returnInput 
			const { tag } = productDescription[index]
			switch(tag) {
				case 'p':
				returnInput =	
				<Field
					className="form-control"
					name={`${member}.context`}
					component="textarea"
        />
				break
				case 'image':
				returnInput = 
				<Field 
					name={`${member}.context`}
					component={DropZoneInput}
				/>
				break
				case 'h1':
				returnInput =
				<Field
					className="form-control"
					name={`${member}.context`}
					component="input"
					type="text"
					placeholder="type your description here"
        />
				case 'h3':
				returnInput =
				<Field
					className="form-control"
					name={`${member}.context`}
					component="input"
					type="text"
					placeholder="type your description here"
        />
				break
				default: 				
				returnInput = 
				<Field
					className="form-control"
					name={`${member}.context`}
					component="input"
					type="text"
					placeholder="type your description here"
        />
				break
			}
			return (
      <SubSegment key={index}>
				<FloatLeft>
					<span>{index + 1}.</span>
				</FloatLeft>
				<FloatRight>
					<Button
						onClick={() => fields.remove(index)}
					>
					<Icon name="remove" aria-hidden="true" />
					</Button>
				</FloatRight>
 				<Field defaultValue='p' name={`${member}.tag`} component="select" className="form-control">
					<option key="p" value="p">text</option>
					<option key="h1" value="h1">big header</option>
					<option key="h3" value="h3">small header</option>
					<option key="image" value="image">image</option>
				</Field>
				{returnInput}
      </SubSegment>
    )}
	)}
	</div>
	<Button fluid onClick={()=> fields.push({})}><Icon name="plus"></Icon> Add Description </Button>
</div>
