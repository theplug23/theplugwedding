import React, { Fragment, useEffect } from 'react';
import PageTitle from '../../components/pagetitle/PageTitle';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/footer/Footer'
import Scrollbar from '../../components/scrollbar/scrollbar'
import About from '../../components/about/about';
import BannerSec from '../../components/BannerSec/BannerSec';
import PartnerSection from '../../components/PartnerSection';
import MapSection from '../../components/MapSection/MapSection';
import FormSection from '../../components/FormSection/FormSection';
import { Helmet } from 'react-helmet';
import ReactGA from 'react-ga4';


const AboutPage = () => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    useEffect(() => {
        ReactGA.event({
            hitType: 'pageview',
            page: window.location.pathname,
            title: "Über Uns PAGE"
        })
    })

    return (
        <Fragment>
            <Helmet>
                <title>ÜBER UNS - THEPLUG WEDDING</title>
            </Helmet>
            <Navbar />
            <PageTitle pageTitle={'ÜBER UNS'} pagesub={'ÜBER UNS'} /> 
            <About />
            {/* <section className={`wpo-Service-section section-padding`} id="Service">
                <div className="container ff">
                    <SectionTitle MainTitle={'Erkunden Sie unser umfassendes Angebot an Leistungen, die auf Ihre einzigartigen Bedürfnisse zugeschnitten sind.'} subTitle={'Unsere Angebote'} />   
                    <div className="wpo-Service-wrap">
                        <div className="row">
                        {Services.slice(0, 4).map((service, sitem) => (
                            <div className="col-lg-3 col-md-6 col-sm-6 col-12" key={sitem}>
                                <div className="wpo-Service-item">
                                    <div className="wpo-Service-img">
                                        <Image src={service.img} alt="" />
                                    </div>
                                    <div className="wpo-Service-text text-wrap">
                                        <Link onClick={ClickHandler} href='' as={``}>{longueurTexte(service.title)}</Link>
                                    </div>
                                </div>
                                <div className="wpo-Service-item item-service">
                                    <ul className="list-item">
                                        {service.packages.map((pack) => (
                                            <li style={{fontSize: '14px'}} key={pack.id} className="item">{pack.slug}</li>
                            ))}
                                    </ul>
                                </div>
                            </div>
                        ))}

                        </div>
                    
                        <Link style={{backgroundColor:'#b99226'}} onClick={ClickHandler} href="/Dienstleistungen" className="theme-btn">MEHR ANGEBOTE</Link>
                    </div>
                </div>
            </section> */}
            {/* <FunFact /> 
            <ProjectSection prClass={'pt-120'} />*/}
            <BannerSec />
            {/* <TeamSection /> */}
            {/* <PricingSection pvClass={'pt-0'}/> */}
            <PartnerSection pClass={'section-padding'}/> 
            <FormSection />
            <MapSection />
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};

export default AboutPage;
