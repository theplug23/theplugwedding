import React, { Fragment, useEffect } from 'react';
import Navbar from '../../components/Navbar/Navbar'
import PageTitle from '../../components/pagetitle/PageTitle'
import Footer from '../../components/footer/Footer'
import Scrollbar from '../../components/scrollbar/scrollbar'
import PartnerSection from '../../components/PartnerSection';
import PortfolioSectionS3 from '../../components/PortfolioSectionS3/PortfolioSectionS3';
import MapSection from '../../components/MapSection/MapSection';
import FormSection from '../../components/FormSection/FormSection';
import { Helmet } from 'react-helmet';
import ReactGA from 'react-ga4';


const PortfolioMasonaryPageS2 =() => {

    useEffect(() => {
        ReactGA.event({
            hitType: 'pageview',
            page: window.location.pathname,
            title: "Eventsfotografie PAGE"
        })
    })

    return(
        <Fragment>
            <Helmet>
                <title>EVENTSFOTOGRAFIE - THEPLUG WEDDING</title>
            </Helmet>
            <Navbar/>
            {/* <PageTitle pageTitle={'EVENTSFOTOGRAFIE'} pagesub={'Eventsfotografie'}/>  */}
            <PortfolioSectionS3/>
            <PartnerSection pClass={'pb-120'}/>
            <FormSection />
            <MapSection />
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default PortfolioMasonaryPageS2;
