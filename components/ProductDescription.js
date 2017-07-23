export default ({productDescription}) => <div>
	{productDescription ? productDescription.map((eachDescription, key) =>{ 
		const { tag, context} = eachDescription
		switch(tag) {
			case 'h1': 
			return <h1 key={key}>{context}</h1>
			case 'h3':
			return <h3 key={key}>{context}</h3>
			case 'p':
			return <p key={key}>{context}</p>
			case 'image':
			return context ? context.map( eachImage => <img alt={eachImage.preview} src={eachImage.preview} />) : null
			default: 
			return <p key={key}>{context}</p>
		}
	}): null}
</div>