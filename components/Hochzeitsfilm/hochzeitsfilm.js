import React, { Fragment, useEffect } from "react";
import PageTitle from "../../components/pagetitle/PageTitle";
import SectionTitle from "../../components/SectionTitle";
import Image from "next/image";
import VideoModal from "../../components/ModalVideo/VideoModal";
// import img from '/public/images/videos/Julia&Eric.jpg'
import img from '/public/images/videos/Alena-Peter.png'
import { useTranslation } from "react-i18next";


const Hochzeitsfilm = (props) => {
const {t} = useTranslation()
    return(
        <section className="wpo-blog-pg-section section-padding">
            <div className="container">
                <div className="row">
                    <div className="row col-lg-6 wpo-blog-content">                        
                        <div className='post format-video col-lg-12'>
                            <div className="entry-media video-holder">
                                <Image style={{ minHeight: '250px' }} src={img} alt={"Alena & Peter"} />
                                <VideoModal src={"https://www.youtube.com/embed/Jq2zWXXbRzs"} />
                            </div>
                        </div>
                    </div>
                    <div className="col col-lg-6 col-12">
                        <div className="blog-sidebar">
                            <div className="widget about-widget">
                                <h4>{t("CINEMATISCHE HOCHZEITSFILM")}</h4>
                                <p>{t("Wir sind auf herausragende und luxuriöse Hochzeitsfilme spezialisiert.")}<br/><br/>{t("Schau dir gerne die Hochzeit von Alena & Peter an, welche im Mühltal im Darmstadt.")} </p>
                            </div>
                        </div>
                    </div>
                </div>
             </div>
         </section>
    )
}

export default Hochzeitsfilm;