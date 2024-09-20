import React, { Fragment, useEffect } from 'react';
import Navbar from '../../components/Navbar/Navbar'
import PageTitle from '../../components/pagetitle/PageTitle'
import Footer from '../../components/footer/Footer'
import Scrollbar from '../../components/scrollbar/scrollbar'
import PortfolioSectionS2 from '../../components/PortfolioSectionS2/PortfolioSectionS2';
import PartnerSection from '../../components/PartnerSection';
import MapSection from '../../components/MapSection/MapSection';
import FormSection from '../../components/FormSection/FormSection';
import { Helmet } from 'react-helmet';
import ReactGA from 'react-ga4';

const PortfolioMasonaryPage =() => {

    useEffect(() => {
        ReactGA.event({
            hitType: 'pageview',
            page: window.location.pathname,
            title: "Hochzeitfotografie PAGE"
        })
    })

    return(
        <Fragment>
            <Helmet>
                <title>HOCHZEITENFOTOGRAFIE - THEPLUG WEDDING</title>
            </Helmet>
            <Navbar/>
            {/* <PageTitle pageTitle={'HOCHZEITENFOTOGRAFIE'} pagesub={'Hochzeitenfotografie'}/>  */}
            <PortfolioSectionS2/>
            <PartnerSection pClass={'pb-120'}/>
            <FormSection />
            <MapSection />
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default PortfolioMasonaryPage;
