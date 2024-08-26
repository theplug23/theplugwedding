import React, { Fragment, useEffect  } from 'react';
import { connect } from "react-redux";
import PageTitle from '../../components/pagetitle/PageTitle'
import Scrollbar from '../../components/scrollbar/scrollbar'

import ServiceSection from '../../components/ServiceSection/ServiceSection';{/* i just added this one */}
import PartnerSection from '../../components/PartnerSection';{/* i just added this one */}

import { addToCart, addToWishList } from "../../store/actions/action";
import api from "../../api";
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/footer/Footer';
import MapSection from '../../components/MapSection/MapSection';
import FormSection from '../../components/FormSection/FormSection';
import { Helmet } from 'react-helmet';
import ReactGA from 'react-ga4';
import InvestingSection from '../../components/InvestingSection/investing';

const ShopPage = ({ addToCart, addToWishList }) => {

  const productsArray = api();

  const addToCartProduct = (product, qty = 1) => {
    addToCart(product, qty);
  };

  const addToWishListProduct = (product) => {
    addToWishList(product);
  };

  const products = productsArray

  useEffect(() => {
    ReactGA.event({
        hitType: 'pageview',
        page: window.location.pathname,
        title: "Pricing PAGE"
    })
  })

  const password = "wedding"; // Replace with your desired password
  const isAuthenticated = localStorage.getItem("isAuthenticated");

  if (!isAuthenticated) {
    // Redirect to login page or show a password prompt
    // Replace with your desired authentication logic
    return (
      <div style={{display:"flex", justifyContent:"center", alignItems:"center", height:"100vh", flexDirection:"column"}}>
        <h1 style={{fontSize:"30px", textAlign:"center"}}>Bitte geben Sie das Passwort für den Zugang zu den Tarifen ein</h1><br/>
        <form onSubmit={(e) => {
          e.preventDefault();
          const enteredPassword = document.getElementById("passwordInput").value;
          if (enteredPassword === password) {
            localStorage.setItem("isAuthenticated", true);
            window.location.reload(); // Reload the page to display the shop content
          } else {
            alert("Falsches Passwort");
          }
        }}>
          <input type="password" id="passwordInput" placeholder="Passwort eingeben" style={{height:"95%", fontSize:"1.3rem"}}/>
          <button type="submit" className='theme-btn'>einreichen</button>
        </form>
      </div>
    );
  }

  return (
  <Fragment>
    <Helmet>
      <title>Pricing - THEPLUG WEDDING</title>
    </Helmet>
    <Navbar />
    <PageTitle pageTitle={'PRICING'} pagesub={'Pricing'} />
      <InvestingSection /><br/>
      <ServiceSection pbClass={'pt-0'}/>
      <PartnerSection pClass={'section-padding'}/> 
      <FormSection />
      <MapSection />
      <Footer />
      <Scrollbar />
  </Fragment>
  )
};

export default connect(null, { addToCart, addToWishList })(ShopPage);