import React, { useEffect } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import PageTitle from '../../components/pagetitle/PageTitle';
import Contactpage from '../../components/Contactpage/Contactpage'
import Footer from '../../components/footer/Footer'
import Scrollbar from '../../components/scrollbar/scrollbar'
import { Helmet } from 'react-helmet';
import ReactGA from 'react-ga4';
import AblaufSection from '../../components/AblaufSection/ablauf';


const GalleryPage = (props) => {

    useEffect(() => {
        ReactGA.event({
            hitType: 'pageview',
            page: window.location.pathname,
            title: "Kontakt PAGE"
        })
    })

    return (
        <div>
            <Helmet>
                <title>KONTAKT - THEPLUG WEDDING</title>
            </Helmet>
            <Navbar/>
            <PageTitle pageTitle={'KONTAKT UNS'} pagesub={'Kontakt'}/> 
            <AblaufSection />
            <Contactpage/>
            <Footer/>
            <Scrollbar/>
        </div>
    )
};
export default GalleryPage;


