import React from 'react'
import DropZoneInput from './DropZoneInput'
import { Button, Form, Icon } from 'semantic-ui-react'
import { Field } from 'redux-form'
import { SemanticInput } from './Form'

export default ({ fields, productDescription }) => <div> 
	<li>		
		<Button onClick={()=> fields.push({})}><i className="fa fa-plus" aria-hidden="true"></i> Add Description </Button>
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
      <li key={index}>
        <Button
				 	color="red"
          onClick={() => fields.remove(index)}
        >
				<Icon name="remove" aria-hidden="true" />
				</Button>
        <h4>{index + 1}.</h4>
 				<Field defaultValue='p' name={`${member}.tag`} component="select" className="form-control">
					<option key="p" value="p">text</option>
					<option key="h1" value="h1">big header</option>
					<option key="h3" value="h3">small header</option>
					<option key="image" value="image">image</option>
				</Field>
				{returnInput}
      </li>
    )}
	)}
	</li>
</div>
