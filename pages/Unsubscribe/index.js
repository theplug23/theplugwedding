"use client";
import React, { Fragment, useEffect } from "react";
import { Helmet } from "react-helmet";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/footer/Footer";
import Scrollbar from "../../components/scrollbar/scrollbar";
import UnsubscribeSection from "../../components/UnsubscribeSection/unsubscribe";
import ReactGA from "react-ga4";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/router";

const UnsubscribePage = () => {
  useEffect(() => {
    ReactGA.event({
      hitType: "pageview",
      page: window.location.pathname,
      title: "Unsubscribe PAGE",
    });
  }, []);

  const router = useRouter();
  const { unsubscribeToken } = router.query;

  // const searchParams = useSearchParams()
  // const unSubscribeToken = searchParams.get('unsubscribeToken');
  console.log("unsubscribeToken", unsubscribeToken);
  const handleUnsubscribe = async () => {
    try {
        // console.log('je suis ici dans unsubscribe');
        
      await fetch("https://theplug-wedding.com/api/newsletter/unsubscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ unsubscribeToken }),
      });
    } catch (error) {
      console.error("Error unsubscribing:", error);
    }
  };


  useEffect(() => {
    if (unsubscribeToken) {
      handleUnsubscribe();
      router.replace({ pathname: router.pathname, query: {} });
    }
  }, [unsubscribeToken]);

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
