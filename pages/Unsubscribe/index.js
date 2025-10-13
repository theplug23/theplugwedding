import React, { Fragment, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/footer/Footer';
import Scrollbar from '../../components/scrollbar/scrollbar';
import UnsubscribeSection from '../../components/UnsubscribeSection/unsubscribe'
import ReactGA from 'react-ga4';

const UnsubscribePage = () => {
    useEffect(() => {
        ReactGA.event({
            hitType: 'pageview',
            page: window.location.pathname,
            title: 'Unsubscribe PAGE'
        });
    }, []);

    return (
        <Fragment>
            <Helmet>
                <title>Unsubscribe - THEPLUG WEDDING</title>
            </Helmet>
            <Navbar />
            <UnsubscribeSection />
            <Footer />
            <Scrollbar />
        </Fragment>
    );
};

export default UnsubscribePage;
