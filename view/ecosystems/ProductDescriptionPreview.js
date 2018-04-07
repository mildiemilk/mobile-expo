const getId = (url) => {
    var regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    var match = url.match(regExp);

    if (match && match[2].length == 11) {
        return match[2];
    } else {
        return 'error';
    }
}

const renderContent= ({type, context}) => {
	var returnComponent
		switch (type) {
			case 'header' :
				returnComponent=
					<div>
						<h2>
							{context}
						</h2>
					</div>
				break
			case 'paragraph' :
				returnComponent=
					<div>
						<p>
							{context}
						</p>
					</div>
				break
			case 'bold' :
				returnComponent=
					<div>
						<b>
							{context}
						</b>
					</div>
				break
			case 'image' :
				returnComponent=
					<div>
						<img width="320"
							src={context}
						/>
					</div>
				break
			case 'video' :
				returnComponent=
					<div>
						<video width="320" controls src={context}/>
					</div>
				break
			case 'youtube' :
				returnComponent= 
					<div>
						<iframe width="320" height="240" src={`https://www.youtube.com/embed/` + getId(context)} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
					</div>
				break
			default:
				returnComponent=
					<div>
						<h2>
							{context}
						</h2>
					</div>
				break
		}
	return returnComponent
}

export default props =>{
	return <div style={{display:'block',width:'100%', minWidth:'320px'}}>
		{
			props.productDescription?
			props.productDescription.map((member,index) => (
				<div key={index}>
					{member.context ?
					renderContent(member) : null}
				</div>
			))
			:null
		}
	</div>
} 
