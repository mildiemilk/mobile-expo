import Button from '../atoms/Button'
import Wrapper from '../atoms/Wrapper'
import FacebookSDK from '../atoms/FacebookSDK'

export default ({url}) => <Wrapper>
  <div class="fb-share-button" 
	data-href="http://www.your-domain.com/your-page.html" 
	data-layout="button_count">
</div>
	<FacebookSDK />
	<Button> Share on facebook</Button>
	<Button> Share on instagram</Button>
</Wrapper>
