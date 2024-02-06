import React, { Fragment, useEffect  } from 'react';
import { connect } from "react-redux";
import PageTitle from '../../components/pagetitle/PageTitle'
import Scrollbar from '../../components/scrollbar/scrollbar'

import ServiceSection from '../../components/ServiceSection/ServiceSection';{/* i just added this one */}
import TeamSection from '../../components/TeamSection/TeamSection';{/* i just added this one */}
import PartnerSection from '../../components/PartnerSection';{/* i just added this one */}

import { addToCart, addToWishList } from "../../store/actions/action";
import ShopProduct from '../../components/ShopProduct';
import api from "../../api";
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/footer/Footer';
import MapSection from '../../components/MapSection/MapSection';
import FormSection from '../../components/FormSection/FormSection';
import { Helmet } from 'react-helmet';
import ReactGA from 'react-ga4';

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
        title: "Dienstleistungen PAGE"
    })
  })

  return (
  <Fragment>
    <Helmet>
      <title>DIENSTLEISTUNGEN - THEPLUG WEDDING</title>
    </Helmet>
    <Navbar />
    <PageTitle pageTitle={'DIENSTLEISTUNGEN'} pagesub={'Dienstleistungen'} />

      {/* <section className="wpo-shop-page section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <ShopProduct
                addToCartProduct={addToCartProduct}
                addToWishListProduct={addToWishListProduct}
                products={products}
              />
            </div>
          </div> 

        </div>
      </section> */}
      <br />
      <ServiceSection pbClass={'pt-0'}/>
      {/* <TeamSection /> */}
      <PartnerSection pClass={'section-padding'}/> 
      <FormSection />
      <MapSection />
      <Footer />
      <Scrollbar />
  </Fragment>
  )
};

export default connect(null, { addToCart, addToWishList })(ShopPage);