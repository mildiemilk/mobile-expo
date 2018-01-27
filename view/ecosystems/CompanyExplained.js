import Link from 'next/link'
import { Button } from 'semantic-ui-react'

export default () => 	
<div>
	<h1>Shop 'n Share</h1>
	<p>แอพลิเคชั่นที่จะเปลี่ยนลูกค้าทุกคนของคุณเป็นตัวแทนจำหนาย และ</p>
	<p>
		<Link href="/about">
		<Button color="blue">Learn more</Button>
		</Link>
		<iframe width="560" height="315" src="https://www.youtube.com/embed/PPf_OE-Nn14" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
	</p>
</div>
