import Head from 'next/head'
export default ({children, title, url, image, type, title, description}) =>   
<Head>
	<title>{title || 'shareit'}</title>
	<link rel='stylesheet' href='//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.2/semantic.min.css' />
	<link href="https://fonts.googleapis.com/css?family=Kanit|Prompt" rel="stylesheet" />
	<link rel="stylesheet" href="path/to/font-awesome/css/font-awesome.min.css"/>
	{
		url?
		<meta property="og:url" content={url} /> : null
	}
	{
		image?
		<meta property="og:image" content={image} /> : null
	}
	{
		type?
		<meta property="og:type" content={type} /> : null
	}
	{
		title?
		<meta property="og:title" content={title} /> : null
	}
	{children}
</Head>
