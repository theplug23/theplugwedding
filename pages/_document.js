import Document, { Html, Head, Main, NextScript } from 'next/document'


export default class MyDocument extends Document {
  render() {
    return (
      <Html lang='de'>
        <Head>
          <title>THEPLUG WEDDING - Hochzeitsfotograf & Hochzeitsvideograf</title>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link href="https://fonts.googleapis.com/css2?family=Jost:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
          <meta name="viewport" content="width=device-width" />
          <link rel="preconnect" href="https://fonts.googleapis.com"/>
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap" rel="stylesheet"/>
          <link rel='icon' type='image/png' href='../images/LOGO WEDDING - BLANC.png' />
          <meta name="google-site-verification" content="M8xKPKLGmWRheGfhhhVJcXhNgm-in72rcCs4vTa8hOU" />
          <meta name="google-site-verification" content="googlece8be7bf29be3524.html" />        
        </Head>
        <body>
          <Main />
          <NextScript />
          {/* Google Tag Manager script */}
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments)}
                gtag('js', new Date());
                gtag('config', 'G-B5PGZNWSDD');
              `
            }}
          />
          <script  async src="https://www.googletagmanager.com/gtag/js?id=G-B5PGZNWSDD"></script>
        </body>
      </Html>
    )
  }
}