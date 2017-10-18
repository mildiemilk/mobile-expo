import Head from 'next/head'
export default ({children, title}) =>   
<Head>
	<title>{title || 'shareit'}</title>
	<link rel='stylesheet' href='//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.2/semantic.min.css' />
	<link href="https://fonts.googleapis.com/css?family=Kanit|Prompt" rel="stylesheet" />
	<link rel="stylesheet" href="path/to/font-awesome/css/font-awesome.min.css"/>
	{children}
</Head>
