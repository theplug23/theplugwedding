import React, { Fragment, useEffect } from "react";
import PageTitle from "../../components/pagetitle/PageTitle";
import SectionTitle from "../../components/SectionTitle";
import Image from "next/image";
import VideoModal from "../../components/ModalVideo/VideoModal";
import img from '/public/images/videos/vladi-&-sarah.jpg'


const FeedbackVideo = (props) => {

    return(
        <section className="wpo-blog-pg-section">
            <div className="container">
                <SectionTitle MainTitle={'WAS SAGEN MEINE BRAUTPAARE ZU IHREM VIDEO ?'} subTitle={''}/>
                <div className="row">
                    <div className="row col-lg-12 wpo-blog-content">                        
                        <div className='post format-video col-lg-12'>
                            <div className="entry-media video-holder">
                                <Image style={{ minHeight: '250px' }} src={img} alt={"Vladi & Sarah"} />
                                <VideoModal src={"https://www.youtube.com/embed/XxfjT8NCkrU"} />
                            </div>
                        </div>
                    </div>
                </div>
             </div>
         </section>
    )
}

export default FeedbackVideo;