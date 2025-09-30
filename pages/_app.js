import "react-toastify/dist/ReactToastify.min.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/flaticon.css'
import "../styles/font-awesome.min.css";
import "../styles/themify-icons.css";
import 'swiper/css';
import './../components/LanguageSelector/i18n';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "../store/index";
import { Provider } from "react-redux";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'photoswipe/dist/photoswipe.css'
import '../styles/sass/style.scss'
import '../styles/style.css';
import ReactGA from "react-ga4";
import CookieConsent from '../components/CookieConsent/CookieConsent';
import { useEffect } from 'react';
import WhatsAppWidget from "../components/WhatsAppWidget/WhatsAppWidget";

const TRACKING_ID = "G-HKH2H83L02"
// ReactGA.initialize(TRACKING_ID) // We will initialize conditionally

function MyApp({ Component, pageProps }) {

  useEffect(() => {
    const consent = localStorage.getItem('cookie_consent');
    if (consent === 'accepted') {
      ReactGA.initialize(TRACKING_ID);
    }
  }, []);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Component {...pageProps} />
        <ToastContainer />
        <CookieConsent />
        <WhatsAppWidget />
      </PersistGate>
    </Provider>

  )
}

export default MyApp
