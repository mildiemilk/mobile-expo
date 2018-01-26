import Head from 'next/head'

export default ({children, title, url, image, type, description}) =>   
<Head>
	<title>{title || 'redsnappy'}</title>
	<link rel='stylesheet' href='//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.2/semantic.min.css' />
	<link href="https://fonts.googleapis.com/css?family=Kanit|Prompt" rel="stylesheet" />
	<link rel="icon" type="image/png" sizes="512x512" href="../../static/img/logo.png" />
	<link rel="stylesheet" href="path/to/font-awesome/css/font-awesome.min.css"/>
	<meta property="og:image" content="https://photo1.lensculture.com/large/f7cae4af-f442-44fe-a162-0d2a0293dbdc.jpg" />
<meta property="og:image" content="https://photo2.lensculture.com/large/b678eb67-da99-40a4-86df-6dde6d9d9aef.jpg" />
<meta property="og:image" content="https://photo0.lensculture.com/large/9492a534-9ac7-423a-8ff7-776a72fbce31.jpg" />
	{
		url?
		<meta property="og:url" content={url} /> : null
	}
	{/* {
		image?
		<meta property="og:image" content={image} /> : null
	} */}
	{
		type?
		<meta property="og:type" content={type} /> : null
	}
	{
		title?
		<meta property="og:title" content={title} /> : null
	}
		{
		description?
		<meta property="og:description" content={description} /> : null
	}
	{children}
</Head>
