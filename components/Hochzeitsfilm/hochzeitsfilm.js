import React, { Fragment, useEffect } from "react";
import PageTitle from "../../components/pagetitle/PageTitle";
import SectionTitle from "../../components/SectionTitle";
import Image from "next/image";
import VideoModal from "../../components/ModalVideo/VideoModal";
import img from '/public/images/videos/Julia&Eric.jpg'


const Hochzeitsfilm = (props) => {

    return(
        <section className="wpo-blog-pg-section section-padding">
            <div className="container">
                <div className="row">
                    <div className="row col-lg-8 wpo-blog-content">                        
                        <div className='post format-video col-lg-12'>
                            <div className="entry-media video-holder">
                                <Image style={{ minHeight: '250px' }} src={img} alt={"Julia & Eric"} />
                                <VideoModal src={"https://www.youtube.com/embed/4a_-hAaDnGU"} />
                            </div>
                        </div>
                    </div>
                    <div className="col col-lg-4 col-12">
                        <div className="blog-sidebar">
                            <div className="widget about-widget">
                                <h4>CINEMATISCHE HOCHZEITSFILM</h4>
                                <p>Wir sind auf herausragende und luxuriöse Hochzeitsfilme spezialisiert.<br/><br/>Schau dir gerne die Hochzeit von Julia & Eric an, welche im Darmstadt. </p>
                            </div>
                        </div>
                    </div>
                </div>
             </div>
         </section>
    )
}

export default Hochzeitsfilm;