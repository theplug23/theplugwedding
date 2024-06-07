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
          <link href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap" rel="stylesheet"/>
          <link rel='icon' type='image/png' href='../images/LOGO WEDDING - BLANC.png' />
          <meta name="google-site-verification" content="M8xKPKLGmWRheGfhhhVJcXhNgm-in72rcCs4vTa8hOU" />
          <meta name="google-site-verification" content="googlece8be7bf29be3524.html" />  
          <link rel="canonical" href="https://www.theplug-wedding.com/" /> 
          <meta 
            name="keywords" 
            content="Theplug, Wedding, Hochzeitsfotograf Darmstadt, HochzeitsvHochzeitsvideograf Friedberg, Hochzeitsfotograf Gießen, Hochzeitsvideograf Gießen, Hochzeitsfotograf Oberursel, Hochzeitsvideograf Oberursel, Hochzeitsfotograf Taunusstein, Hochzeitsvideograf Taunusstein, 
            Hochzeitsfotograf Karlsruhe, Hochzeitsvideograf Karlsruhe, Hochzeitsfotograf Heilbronn, Hochzeitsvideograf Heilbronn, Hochzeitsfotograf Bad Dürkheim, Hochzeitsvideograf Bad Dürkheim, Hochzeitsfotograf Speyer, Hochzeitsvideograf Karlsruhe, Hochzeitsfotograf Heilbronn, 
            Hochzeitsvideograf Heilbronn, Hochzeitsfotograf Bad Dürkheim, Hochzeitsvideograf Bad Dürkheim, Hochzeitsfotograf Speyer, Hochzeitsvideografdeograf Oberursel, Hochzeitsfotograf Taunusstein, Hochzeitsvideograf Taunusstein, Hochzeitsfotograf Königstein im Taunus, Hochzeitsvideograf Königstein am Taunus, 
            Hochzeitsfotograf Weinheim, Hochzeitsvideograf Weinheim, Hochzeitsfotograf Bruchsal, Hochzeitsvideograf Bruchsal, Hochzeitsfotograf Karlsruhe, Hochzeitsvideograf Karlsruhe, Hochzeitsfotograf Heilbronn, Hochzeitsvideograf Heilbronn, Hochzeitsfotograf Bad Dürkheim, 
            Hochzeitsvideograf Bad Dürkheim, Hochzeitsfotograf Speyer, Hochzeitsvideografdeograf Oberursel, Hochzeitsfotograf Taunusstein, Hochzeitsvideograf Taunusstein, Hochzeitsfotograf Königstein im Taunus, Hochzeitsvideograf Königstein am Taunus, Hochzeitsfotograf Weinheim, 
            Hochzeitsvideograf Weinheim, Hochzeitsfotograf Bruchsal, Hochzeitsvideograf Bruchsal, Hochzeitsfotograf Karlsruhe, Hochzeitsvideograf Karlsruhe, Hochzeitsfotograf Heilbronn, Hochzeitsvideograf Heilbronn, Hochzeitsfotograf Bad Dürkheim, Hochzeitsvideograf Bad Dürkheim, 
            Hochzeitsfotograf Speyer, Hochzeitsvideograf Speyer, Hochzeitsfotograf Koblenz, Hochzeitsvideograf Koblenz, Fotograf Darmstadt, Fotograf Frankfurt, Hochzeitsvideograf Darmstadtv, Hochzeitsvideograf Frankfurt am Main, Fotograf Frankfurt am Main, Fotograf Heidelberg, 
            Fotograf Mannheim, Fotograf Worms, Fotograf Koblenz, Fotograf Mainz, Fotograf Saarbrücken"
          />
          <meta
            name="description"
            content="Hey liebes Brautpaar😊,
            Ich bin Fotograf-Videograf-Drohne Pilot- leidenschaftlicher 'Story Teller' mit mehr als 10 Jahren Erfahrung in Hochzeitsfoto- und Videografie in Deutschland und im Ausland. Ich habe Mediengestaltung mit Schwerpunkt Foto-und Videoproduktion studiert und möchte euch dabei helfen, die bildliche Geschichte des schönsten Tages eures Lebens zu schreiben. Ich spreche fließend deutsch, französisch und englisch. Ich würde mich sehr freuen, euch begleiten zu dürfen. Liebe Grüße Eur Stephane Kamwa (THEPLUG)"
          />
          <meta property="og:locale" content="de_DE" />
          <meta property="og:url" content="https://www.theplug-wedding.com/" /> 
          <meta property="og:type" content="website" />
          <meta property="og:image" content="/images/portfolio/p/p20.jpg" />
          <meta property="og:image:width" content="3000" />
          <meta property="og:image:height" content="2000" />
          <meta property="og:image:alt" content="Theplug Communication" />
          <meta property="og:image:type" content="image/jpg" />
          <meta property="og:site_name" content="THEPLUG WEDDING - Hochzeitsfotograf & Hochzeitsvideograf" />
          <meta property="og:image:secure_url" content="/images/portfolio/p/p20.jpg" />
          <meta property="og:title" 
            content="Theplug Wedding - Event & Hochzeitsfotograf - Event & Hochzeitsvideograf | in Darmstadt, Frankfurt am Main, Rhein-Main-Gebiet, Odenwald, Baden-Württemberg, Rheinland-Pfalz, Saarland, deutschlandweit und international." />
          <meta
            property="og:description"
            content="Hey liebes Brautpaar😊,
            Ich bin Fotograf-Videograf-Drohne Pilot- leidenschaftlicher'Story Teller' mit mehr als 10 Jahren Erfahrung in Hochzeitsfoto- und Videografie in Deutschland und im Ausland. Ich habe Mediengestaltung mit Schwerpunkt Foto-und Videoproduktion studiert und möchte euch dabei helfen, die bildliche Geschichte des schönsten Tages eures Lebens zu schreiben. Ich spreche fließend deutsch, französisch und englisch. Ich würde mich sehr freuen, euch begleiten zu dürfen. Liebe Grüße Eur Stephane Kamwa (THEPLUG)"
          />
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
            <script src="https://static.elfsight.com/platform/platform.js" data-use-service-core defer></script>
            <div class="elfsight-app-d7ac4587-d61c-49dc-882e-bcdd704ce704" data-elfsight-app-lazy></div>
        </body>
      </Html>
    )
  }
}