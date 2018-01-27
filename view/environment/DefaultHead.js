import Head from 'next/head'

export default ({children, title, url, image, type, description, video, videoType}) =>   
<Head>
	<title>{title || 'redsnappy'}</title>
	<link rel='stylesheet' href='//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.2/semantic.min.css' />
	<link href="https://fonts.googleapis.com/css?family=Kanit|Prompt" rel="stylesheet" />
	<link rel="icon" type="image/png" sizes="512x512" href="../../static/img/logo.png" />
	<link rel="stylesheet" href="path/to/font-awesome/css/font-awesome.min.css"/>
	<meta property="og:video:width" content="400" />
	<meta property="og:video:height" content="300" />
	<meta property="fb:app_id" content="1896997733708019" />
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
		video?
		<meta property="og:video" content={video} /> :null
	}
		{
		videoType?
		<meta property="og:video:type" content={videoType} /> :null
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
