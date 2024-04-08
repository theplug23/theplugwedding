import React, { Fragment, useEffect } from 'react';
import PageTitle from '../../components/pagetitle/PageTitle';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/footer/Footer'
import PartnerSection from '../../components/PartnerSection';
import FAQSection from '../../components/FaqSection/FaqSection';
import Scrollbar from '../../components/scrollbar/scrollbar'
import { Helmet } from 'react-helmet';
import ReactGA from 'react-ga4';

const FAQPage = () => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    useEffect(() => {
        ReactGA.event({
            hitType: 'pageview',
            page: window.location.pathname,
            title: "FAQ PAGE"
        });
    }, []);

    return (
        <Fragment>
            <Helmet>
                <title>FAQ - THEPLUG WEDDING</title>
            </Helmet>
            <Navbar />
            <PageTitle pageTitle={'FAQ'} pagesub={'FAQ'} /> 
            <br/>
            <FAQSection pbClass={'pt-0'}/>
            <PartnerSection/><br/><br/><br/>
            <Footer />
            <Scrollbar />
        </Fragment>
    );
};

export default FAQPage;