export default ({productName, brandName, price, shortDescription, productDescription, productImages}) => <div>
	<h1>{productName || 'Title'}</h1>
	<h3>{brandName || 'brand name'}</h3>
	<h4>{price || '00.00'} baht</h4>
	<p>{shortDescription || 'short description'}</p>
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
