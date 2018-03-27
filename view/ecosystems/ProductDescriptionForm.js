import { Field, FieldArray, reduxForm } from 'redux-form'
import { Icon } from 'semantic-ui-react'
import DescriptionOption from '../molecules/DescriptionOption'
import Dropzone from '../atoms/Dropzone'
import Button from '../atoms/Button'
import Flex from '../atoms/Flex'
import H3 from '../atoms/H3'
import Wrapper from '../atoms/Wrapper'
import Select from '../molecules/Select'
import { saveProductDescriptionImage, saveProductDescriptionVideo } from '../../lib/handlers/product'

const renderField = ({ index, fields, input, type, meta: { touched, error } }) => {
	var returnComponent
		switch (type) {
			case 'image':
				returnComponent = 
					<div>
						<H3>รูปภาพ</H3>						
						<Dropzone onDrop={droppedImage=>
							saveProductDescriptionImage(droppedImage, fields, index)
						}>
							<Button>add image</Button>	
						</Dropzone>
						{fields.get(index).context ? 
						<span style={{color: 'green'}}>done!</span> : null}
					</div>
				break
			case 'header':
				returnComponent = 
				<div>
					<H3>หัวข้อ</H3>
					<div>
						<input style={{border:'1px solid #b0b2b4', width:'80%'}} {...input} type={type} placeholder='หัวข้อ' />
						{touched && error && <span>{error}</span>}
					</div>
				</div>
				break

			case 'video':
				returnComponent = 
					<div>
						<H3>วิดีโอ</H3>												
						<Dropzone onDrop={droppedVideo=>
							saveProductDescriptionVideo(droppedVideo, fields, index)
						}>
							<Button>add video</Button>
						</Dropzone>
						{fields.get(index).context ? 
						<span style={{color: 'green'}}>done!</span> : null}
					</div>
				break
			case 'youtube':
			returnComponent = 
			<div>
					<H3>ลิ้งค์วิดีโอจากyoutube</H3>																	
					<div>
						<input style={{border:'1px solid #b0b2b4', width:'80%'}} {...input} type={type} placeholder='link youtube' />
						{touched && error && <span>{error}</span>}
						{input.value && (!input.value.includes('www.youtube.com') && !input.value.includes('youtu.be')) ?
						<div style={{color: 'red'}}>error: please check youtube link format</div> : null}
					</div>
				</div>
			case 'paragraph':
			default:
						returnComponent = 
						<div>
							<H3>ข้อความ</H3>
							<div>
								<textarea style={{border:'1px solid #b0b2b4', width:'80%'}} {...input} type={type} placeholder='ข้อความดึงดูดลูกค้า' />
								{touched && error && <span>{error}</span>}
							</div>
						</div>
				break
		}
	return returnComponent
}

const items = {
	paragraph: 'ข้อความ',
	header:'หัวข้อ',
	bold: 'ตัวหนา',
	image: 'รูปภาพ',
	video: 'วิดีโอ',
	youtube: 'ลิงค์ youtube'
}

const renderMembers = props => <div style={{width:'100%', minWidth:'320px', display:'flex', flexDirection:'column', justifyContent:'flex-start'}}>
	<H3>ข้อความดึงดูดลูกค้า</H3>
	<p>เขียนข้อความโดนๆ เพื่อให้ลูกค้าตัดสินใจซื้อได้ง่ายขึ้น </p>
	<Wrapper boxShadow='0 !important' noMargin>
		<Flex direction='row'>
			<Select {...props} items={items} form='product' value='nextDescription' default='เพิ่มข้อมูลสินค้า'/>
			<Button 

				onClick={() => {
					props.fields.push({
					type:props.nextDescription,
					context: '',
				})}}
				width='100px'
				noFlexGrow
				margin='0 5px 0 0'
			> 
				Add
			</Button>
		</Flex>
	</Wrapper>
	{
		props.fields.map((member,index) => (
			<Wrapper key={index} style={{position:'relative'}} boxShadow='none' margin='5px 0' zIndex='0'>
				<div 
					style={{top:"0",right:"0",position:"absolute" }}
					onClick={()=>props.fields.remove(index)}>
                    <Icon link name='close' size='large' color='grey'/>					
					</div>
				<Field index={index} name={`${member}.context`} type="text" component={renderField} type={props.fields.getAll()[index].type} fields={props.fields}/>
			</Wrapper>
		))
	}
</div>

export default props =>{
	return <FieldArray {...props} name="productDescription" component={renderMembers}/>
} 
