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

//  <div>
//         <h2>Die Bedeutung von Hochzeitsfotografie und -videografie</h2>
//         <p>Eine Hochzeit ist eines der wichtigsten Ereignisse im Leben. Es ist ein Tag voller Emotionen, Liebe und unvergesslicher Momente. Als Hochzeitsfotograf und Videograf habe ich es mir zur Aufgabe gemacht, diese einzigartigen Augenblicke für immer festzuhalten. Doch warum sollte man in professionelle Hochzeitsfotografie und -videografie investieren?</p>
//         <img src='/images/portfolio/p/p21.jpg' /><br/><br/>
//         <h2>Die Vorteile eines Hochzeitsfotografen und Videografen</h2>
//         <h3 style="font-family: Helvetica">1. Professionelle Qualität</h3>
//         <p>Ein erfahrener Hochzeitsfotograf und Videograf verfügt über das nötige Wissen und die Ausrüstung, um die besten Ergebnisse zu erzielen. Von der perfekten Beleuchtung bis hin zu den besten Winkeln – professionelle Fotos und Videos heben sich deutlich von Amateuraufnahmen ab.</p>
//         <h3 style="font-family: Helvetica">2. Einzigartige Perspektiven</h3>
//         <p>Dank kreativer Techniken und innovativer Ideen können Hochzeitsfotografen und Videografen einzigartige Perspektiven einfangen. Drohnenaufnahmen, Slow-Motion-Videos und emotionale Portraits sind nur einige der Möglichkeiten, die wir bieten.</p>
//         <h3 style="font-family: Helvetica">3. Emotionale Erinnerungen</h3>
//         <p>Fotos und Videos sind nicht nur einfache Aufnahmen, sondern emotionale Erinnerungen, die die Stimmung und die Atmosphäre des Tages einfangen. Sie ermöglichen es dem Paar, die Magie des Moments immer wieder neu zu erleben.</p>
//         <img src='/images/portfolio/p/p115.jpg' className="col-lg-6" style={{border:'20px solid transparent'}}/><br/><br/>
//         <h2>Tipps für die Auswahl des richtigen Hochzeitsfotografen und Videografen</h2>
//         <h3 style="font-family: Helvetica"># Erfahrung und Portfolio</h3>
//         <p>Ein Blick auf das Portfolio eines Hochzeitsfotografen und Videografen gibt einen guten Eindruck von seinem Stil und seiner Qualität. Erfahrung spielt eine große Rolle, denn nur wer schon viele Hochzeiten begleitet hat, weiß, wie man in jeder Situation das Beste herausholt.</p>
//         <h3 style="font-family: Helvetica"># Persönliches Gespräch</h3>
//         <p>Ein persönliches Gespräch ist unerlässlich, um sicherzustellen, dass die Chemie stimmt. Der Hochzeitsfotograf und Videograf wird den ganzen Tag über eine wichtige Rolle spielen, daher sollte man sich in seiner Anwesenheit wohlfühlen.</p>
//         <h3 style="font-family: Helvetica"># Empfehlungen und Bewertungen</h3>
//         <p>Empfehlungen von Freunden oder Bewertungen im Internet können bei der Entscheidung helfen. Zufriedene Kunden teilen oft ihre positiven Erfahrungen, was ein guter Indikator für die Qualität der Dienstleistung ist.</p>
//         <img src='/images/portfolio/p/p152.jpg' className="col-lg-6" style={{border:'20px solid transparent'}}/><br/><br/>
//         <h2>Warum Ich Der Richtige Hochzeitsfotograf Und Videograf Für Euch Bin</h2>
//         <h3 style="font-family: Helvetica"># Individuelle Betreuung</h3>
//         <p>Jede Hochzeit ist einzigartig und verdient eine individuelle Betreuung. Ich nehme mir die Zeit, das Paar kennenzulernen und auf ihre Wünsche einzugehen, um sicherzustellen, dass ihre Vision perfekt umgesetzt wird..</p>
//         <h3 style="font-family: Helvetica"># Kreativität und Leidenschaft</h3>
//         <p>Meine Leidenschaft für Fotografie und Videografie spiegelt sich in meiner Arbeit wider. Ich liebe es, kreative und emotionale Momente festzuhalten, die die Geschichte des Paares erzählen.</p>
//         <h3 style="font-family: Helvetica"># Zuverlässigkeit und Professionalität</h3>
//         <p>Pünktlichkeit, Zuverlässigkeit und Professionalität sind für mich selbstverständlich. Ihr könnt euch darauf verlassen, dass ich jeden wichtigen Moment einfange, ohne dabei aufdringlich zu sein.</p><br/>
//         <p>Die Investition in einen professionellen Hochzeitsfotografen und Videografen lohnt sich, um die unvergesslichen Momente eurer Hochzeit für immer festzuhalten. Mit meiner Erfahrung, Kreativität und Leidenschaft sorge ich dafür, dass eure Erinnerungen in höchster Qualität verewigt werden.</p>
//         <p>Habt ihr Fragen oder möchtet ihr ein unverbindliches Angebot? Kontaktiert mich gerne und lasst uns gemeinsam eure Traumhochzeit planen.</p>
//     </div>