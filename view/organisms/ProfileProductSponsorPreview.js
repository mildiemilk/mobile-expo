
import ProfileProductPreview from '../molecules/ProfileProductPreview'
export default props => <ProfileProductPreview
	{...props}
	title="สินค้าที่คุณเป็นผู้แนะนำ"
	products = {props.sponsorProducts}
	isSponsor={false}
	page='second'
/>
