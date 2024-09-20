import React, { Fragment, useEffect } from 'react';
import PageTitle from '../../components/pagetitle/PageTitle';
import Navbar from '../../components/Navbar/Navbar';
import DatenschutzSection from '../../components/DatenschutzSection/datenschutz';
import Footer from '../../components/footer/Footer';
import Scrollbar from '../../components/scrollbar/scrollbar';
import { Helmet } from 'react-helmet';
import ReactGA from 'react-ga4';

const DatenschutzPage = () => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    };

    useEffect(() => {
        ReactGA.event({
            hitType: 'pageview',
            page: window.location.pathname,
            title: "Datenschutz PAGE"
        });
    }, []);

    return (
        <Fragment>
            <Helmet>
                <title>Datenschutz - THEPLUG WEDDING</title>
            </Helmet>
            <Navbar />
            {/* <PageTitle pageTitle={'Datenschutz'} pagesub={'Datenschutz'} />  */}
            <DatenschutzSection pbClass={'pt-0'}/>
            <Footer />
            <Scrollbar />
        </Fragment>
    );
};

export default DatenschutzPage;