import React, { Fragment, useEffect } from 'react';
import PageTitle from '../../components/pagetitle/PageTitle';
import Navbar from '../../components/Navbar/Navbar';
import ImpressumSection from '../../components/ImpressSection/impress';
import Footer from '../../components/footer/Footer';
import Scrollbar from '../../components/scrollbar/scrollbar';
import { Helmet } from 'react-helmet';
import ReactGA from 'react-ga4';

const ImpressumPage = () => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    };

    useEffect(() => {
        ReactGA.event({
            hitType: 'pageview',
            page: window.location.pathname,
            title: "Impressum PAGE"
        });
    }, []);

    return (
        <Fragment>
            <Helmet>
                <title>Impressum - THEPLUG WEDDING</title>
            </Helmet>
            <Navbar />
            {/* <PageTitle pageTitle={'Impressum'} pagesub={'Impressum'} />  */}
            <ImpressumSection pbClass={'pt-0'}/>
            <Footer />
            <Scrollbar />
        </Fragment>
    );
};

export default ImpressumPage;