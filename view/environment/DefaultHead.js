import Head from 'next/head'

export default ({children, title, url, image, type, description, video, videoType}) =>   
<Head>
	<title>{title || 'Sharemai แชร์ไหม'}</title>
	<meta name="viewport" content="width=device-width,height=device-height,initial-scale=1.0" />
	<script defer src="https://use.fontawesome.com/releases/v5.0.6/js/all.js"></script>
	<link rel='stylesheet' href='//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.2/semantic.min.css' />
	<link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
	<link href="https://fonts.googleapis.com/css?family=Roboto:400,500|Athiti:300,400,600&amp;subset=thai" rel="stylesheet"/>
	<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
	<link href="https://fonts.googleapis.com/css?family=Kanit|Prompt" rel="stylesheet" />
	<link rel="icon" type="image/png" sizes="512x512" href="../../static/img/logo.png" />
	<link rel="alternate" href="https://sharemai.com" hreflang="th"/>
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
