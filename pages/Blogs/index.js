import React, { Fragment, useEffect } from 'react';
import PageTitle from '../../components/pagetitle/PageTitle';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/footer/Footer';
import Scrollbar from '../../components/scrollbar/scrollbar'
import BlogList from '../../components/BlogList/BlogList';
import MapSection from '../../components/MapSection/MapSection';
import FormSection from '../../components/FormSection/FormSection';
import { Helmet } from 'react-helmet';
import ReactGA from 'react-ga4';


const BlogSingle = (props) => {

    useEffect(() => {
        ReactGA.event({
            hitType: 'pageview',
            page: window.location.pathname,
            title: "BLOGS PAGE"
        })
    })

    return (
        <Fragment>
            <Helmet>
                <title>BLOGS - THEPLUG WEDDING</title>
            </Helmet>
            <Navbar />
            <PageTitle pageTitle='Letzte Neuigkeiten' pagesub="Blog" />
            <BlogList/>
            <FormSection />
            <MapSection />
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};
export default BlogSingle;
