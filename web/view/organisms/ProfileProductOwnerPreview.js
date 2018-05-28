
import ProfileProductPreview from '../molecules/ProfileProductPreview'
export default props => <ProfileProductPreview
	{...props}
	title="สินค้าที่คุณเป็นเจ้าของ"
	products = {props.userProducts}
	isSponsor={false}
	page='first'
/>
