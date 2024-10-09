import React, { Fragment, useEffect, useState } from 'react';
import { connect } from "react-redux";
import PageTitle from '../../components/pagetitle/PageTitle';
import Scrollbar from '../../components/scrollbar/scrollbar';
import ServiceSection from '../../components/ServiceSection/ServiceSection';
import PartnerSection from '../../components/PartnerSection';
import { addToCart, addToWishList } from "../../store/actions/action";
import api from "../../api";
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/footer/Footer';
import MapSection from '../../components/MapSection/MapSection';
import FormSection from '../../components/FormSection/FormSection';
import { Helmet } from 'react-helmet';
import ReactGA from 'react-ga4';
import { toast } from 'react-toastify';

import InvestingSection from '../../components/InvestingSection/investing';
import Hochzeitsfilm from '../../components/Hochzeitsfilm/hochzeitsfilm';
import ShortAbout from '../../components/ShortAbout/shortabout';
import FeedbackVideo from '../../components/FeedbackVideo/feedbackvideo';
import FAQPricing from '../../components/FaqPricing/faqpricing';
import AdditionalOption from '../../components/AdditionalOption/addOption';
import ContactForm from '../../components/ContactFrom/ContactForm';


const ShopPage = ({ addToCart, addToWishList }) => {
  
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const productsArray = api();
  const [total, setTotal] = useState(0); // Ajoutez cette ligne pour gérer le total

  const handleServiceSelect = (price) => {
    setTotal(Number(price));
  }

  const addToCartProduct = (product, qty = 1) => {
    addToCart(product, qty);
  };

  const addToWishListProduct = (product) => {
    addToWishList(product);
  };

  useEffect(() => {
    ReactGA.event({
      hitType: 'pageview',
      page: window.location.pathname,
      title: "Angebote PAGE"
    });
  }, []);

  const password = "Theplug-Wedding2025!";

  const handleSubmit = (e) => {
    e.preventDefault();
    const enteredPassword = document.getElementById("passwordInput").value;

    if (enteredPassword === password) {
      setIsAuthenticated(true); 
    } else {
      toast.error("Falsches Passwort");
    }
  };

  if (!isAuthenticated) {
    return (
      <div style={{}}>
        <Navbar/>
        <div style={{display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column"}}>
          <h1 style={{display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column",fontSize: "30px", textAlign: "center", fontFamily:"montserrat", fontWeight:"bold"}}>Bitte geben Sie das Passwort für den Zugang zu den Tarifen ein</h1><br/>

          <form onSubmit={handleSubmit}>
            <input type="password" id="passwordInput" placeholder="Passwort eingeben" style={{height: "150%", fontSize: "1.5rem"}}/>
            <button type="submit" className='theme-btn'>einreichen</button>
          </form>
        </div>
        
        <section className='wpo-contact-pg-section section-padding'>
          <div className='container'>
            <div className='row'>
              <div className='col col-lg-10 offset-lg-1'>
                <div className='wpo-contact-form-area'>
                  <h1 style={{fontSize: "30px", textAlign: "center", fontFamily:"montserrat", fontWeight:"bold"}}>Füllen Sie das nachstehende Formular aus, um das Passwort zu erhalten, das Zugang zur Preisliste gewährt</h1><br/><br/>
                  <ContactForm/>
                </div>
              </div>
            </div>
          </div>
        </section><br/><br/><br/><br/><br/><br/>
        <Footer/>
      </div>
    );
  }

  return (
    <Fragment>
      <Helmet>
        <title>Angebote - THEPLUG WEDDING</title>
      </Helmet>
      <Navbar />
      <div className='ancre' style={{textAlign: 'center', scrollBehavior: 'smooth', marginTop:"20px"}}>
        <a href="#photo" style={{marginRight: '20px', backgroundColor: '#b99226', color:"white", padding:"10px 15px", borderRadius:"5px"}}>Angebote für Fotos</a>
        <a href="#video" style={{marginRight: '20px', backgroundColor: '#b99226', color:"white", padding:"10px 15px", borderRadius:"5px"}}>Angebote für Video</a>
        <a href="#photo-video" style={{backgroundColor: '#b99226', color:"white", padding:"10px 15px", borderRadius:"5px"}}>Angebote für Fotos & Video</a>
      </div>
      {/* <PageTitle pageTitle={'ANGEBOTE'} pagesub={'Angebote'} showHero={true} heroText="EXKLUSIVE UND HERAUSRAGENDE HOCHZEITSFOTOS UND HOCHZEITSVIDEOS"/> */}
      <Hochzeitsfilm />
      <ShortAbout />
      <FeedbackVideo />
      <InvestingSection /><br/>
      <ServiceSection pbClass={'pt-0'} onServiceSelect={handleServiceSelect}/>
      <AdditionalOption total={total}/>
      <FAQPricing />
      {/* <PartnerSection pClass={'section-padding'} />  */}
      <FormSection />
      <MapSection />
      <Footer />
      <Scrollbar />
    </Fragment>
  );
};

export default connect(null, { addToCart, addToWishList })(ShopPage);
