import React, { useEffect } from 'react';
import Navbar from '../components/Navbar/Navbar';
import About from '../components/about/about';
import FunFact from '../components/FunFact/FunFact';
import Testimonial from '../components/Testimonial/Testimonial';
import BannerSec from '../components/BannerSec/BannerSec';
import Product from '../components/Product';
import Footer from '../components/footer/Footer';
import Scrollbar from '../components/scrollbar/scrollbar';
import { connect } from "react-redux";
import { addToCart, addToWishList } from "../store/actions/action";
import api from "../api";
import Hero from '../components/hero';
import MapSection from '../components/MapSection/MapSection';
import SectionTitle from '../components/SectionTitle';
import Services from '../api/service';
import Link from 'next/link';
import Image from 'next/image';
import { longueurTexte } from "../utils";
import FormSection from '../components/FormSection/FormSection';
import RecupEmail from '../components/RecupEmail';
import { Gallery, Item } from 'react-photoswipe-gallery';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import VideoSection from '../components/VideoSection';
import { Helmet } from 'react-helmet';
import ReactGA from 'react-ga4';
import PartnerSection from '../components/PartnerSection';


const HomePage = (props) => {

    useEffect(() => {
        ReactGA.event({
            hitType: 'pageview',
            page: window.location.pathname,
            title: "HOME PAGE"
        })
    })

    const productsArray = api();

    const addToCartProduct = (product, qty = 1) => {
        props.addToCart(product, qty);
    };

    const addToWishListProduct = (product) => {
        props.addToWishList(product);
    };
    
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    const products = productsArray
    const weddings = [
        {
            img: '/images/portfolio/p/p1.jpg'
        },
        {
            img: '/images/portfolio/p/p23.jpg'
        },
        {
            img: '/images/portfolio/p/p230.jpg'
        },
        {
            img: '/images/portfolio/p/p228.jpg'
        },
        {
            img: '/images/portfolio/p/p329.jpg'
        },
        {
            img: '/images/portfolio/p/p327.jpg'
        },
        {
            img: '/images/portfolio/p/p326.jpg'
        },
        {
            img: '/images/portfolio/p/p285.jpg'
        }
    ]

    return (
        <div>
            <Helmet>
                <title>Hochzeitsfotograf & Hochzeitsvideograf in Darmstadt | Weltweite Hochzeitsreportagen | THEPLUG WEDDING</title>
            </Helmet>
            <Navbar />
            <Hero />
            <About />
            <section className={`wpo-portfolio-section-s2 section-padding ${props.prClass}`} id="gallery">
                <div className="container-fluid">
                    <SectionTitle MainTitle={'ENTDECKEN SIE IN BILDERN EINIGE BILDER UNSERER HOCHZEITEN'} subTitle={'Unsere Hochzeiten'}/>
                    <div className="sortable-gallery">
                        <div className="gallery-filters"></div>
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="portfolio-grids gallery-container clearfix">
                                    <Gallery >
                                        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 4 }}>
                                            <Masonry columnsCount={4} gutter="30px">
                                                {weddings.map((image, i) => (
                                                    <div className="grid" key={i}>
                                                        <Item
                                                            original={image.img}
                                                            thumbnail={image.img}
                                                            width="100%"
                                                            height="100%"
                                                        >
                                                            {({ ref, open }) => (
                                                                <img ref={ref} onClick={open} src={image.img} />
                                                            )}
                                                        </Item>
                                                    </div>
                                                ))}
                                            </Masonry>
                                        </ResponsiveMasonry>
                                    </Gallery>
                                </div>
                            </div>
                        </div><br/>
                        <Link style={{backgroundColor:'#b99226'}} onClick={ClickHandler} href="/Portraitfotografie" className="theme-btn">WEITERE PHOTOS SEHEN...</Link>
                    </div>
                </div>
            </section>
            <VideoSection />
            <Testimonial />
            <FunFact />
            {/* <section className={`wpo-Service-section section-padding ${props.pbClass}`} id="Service">
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
                  
                    <Link style={{backgroundColor:'#b99226'}} onClick={ClickHandler} href="/Angebote" className="theme-btn">MEHR ANGEBOTE</Link>
                    </div>
                </div>
            </section><br/> */}
            {/* <ProjectSection /> */}
            <BannerSec />
            <Product
                addToCartProduct={addToCartProduct}
                addToWishListProduct={addToWishListProduct}
                products={products}
            />
            {/* <TeamSection /> */}
            <PartnerSection />
            <FormSection /><br /><br /><br /><br /><br /><br />
            <RecupEmail />
            {/*<RsvpSection rClass={'pt-0'}/> //Modale qui vient se superposer au dessus
            <PricingSection pvClass={'pt-0'}/> //Differents types d'abonnement
            <BlogSection /> */}
            <MapSection />
            <Footer />
            <Scrollbar />
        </div>
    )
};
export default connect(null, { addToCart, addToWishList })(HomePage);


