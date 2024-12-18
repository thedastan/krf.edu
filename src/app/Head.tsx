import {
	SEO_DESCRIPTION,
	SEO_KEY_WORDS,
	SITE_NAME,
} from "@/constants/seo/seo.constants";


const Head = () => {
	return (
		<head>
			<meta
				name="google-site-verification"
				content="fQ0IqJz2eTDIDxVnU7cEV8OYPUrHscc9wXzSRQaozgY"
			/>
			<link rel="manifest" href="/manifest.json" />

			<link rel="icon" href="/favicon.ico" type="image/x-icon" />
			<link
				rel="apple-touch-icon"
				sizes="180x180"
				href="/icons/icon-192x192.png"
			/>

			<meta name="description" content={SEO_DESCRIPTION} />
			<meta property="og:title" content={SITE_NAME} />
			<meta property="og:description" content={SEO_KEY_WORDS} />

			<meta
				name="apple-mobile-web-app-status-bar-style"
				content="black-translucent"
			/>
			<meta name="robots" content="index, follow" />
			<meta
				property="og:image"
				content="http://localhost:3001/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.aa3b36ce.jpeg&w=1200&q=75"
			/>

			 <meta property="og:url" content="http://localhost:3001/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.aa3b36ce.jpeg&w=1200&q=75" />
			<meta property="og:type" content="website" />
		</head>

		
	);
};

export default Head;