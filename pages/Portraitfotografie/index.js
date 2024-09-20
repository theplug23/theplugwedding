import React, { Fragment, useEffect } from 'react';
import Navbar from '../../components/Navbar/Navbar'
import PageTitle from '../../components/pagetitle/PageTitle'
import Footer from '../../components/footer/Footer'
import Scrollbar from '../../components/scrollbar/scrollbar'
import PartnerSection from '../../components/PartnerSection';
import ProjectSection from '../../components/ProjectSection/ProjectSection';
import MapSection from '../../components/MapSection/MapSection';
import FormSection from '../../components/FormSection/FormSection';
import { Helmet } from 'react-helmet';
import ReactGA from 'react-ga4';


const PortfolioMasonaryPageS3 =() => {

    useEffect(() => {
        ReactGA.event({
            hitType: 'pageview',
            page: window.location.pathname,
            title: "Porträitsfotografie PAGE"
        })
    })
    
    return(
        <Fragment>
            <Helmet>
                <title>PORTRÄITSFOTOGRAFIE - THEPLUG WEDDING</title>
            </Helmet>
            <Navbar/>
            {/* <PageTitle pageTitle={'PORTRÄITSFOTOGRAFIE'} pagesub={'Porträitsfotografie'}/>  */}
            <ProjectSection prClass={'pt-120'}/>
            <PartnerSection pClass={'pb-120'}/>
            <FormSection />
            <MapSection />
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default PortfolioMasonaryPageS3;
