import React, { Fragment, useEffect } from "react";
import PageTitle from "../../components/pagetitle/PageTitle";
import SectionTitle from "../../components/SectionTitle";
import Image from "next/image";
import VideoModal from "../../components/ModalVideo/VideoModal";
// import img from '/public/images/videos/vladi-&-sarah.jpg'
import img from '/public/images/videos/vignette.png'
import { useTranslation } from "react-i18next";


const FeedbackVideo = (props) => {
    const { t } = useTranslation()
    return (
        <section className="wpo-blog-pg-section">
            <div className="container">
                <SectionTitle MainTitle={t('DAS SAGEN UNSERE BRAUTPAARE ÜBER THEPLUG WEDDING')} subTitle={''} />
                <div className="row">
                    <div className="row col-lg-12 wpo-blog-content">
                        <div className='post format-video col-lg-12'>
                            <div className="entry-media video-holder">
                                <Image style={{ minHeight: '250px' }} src={img} alt={"Das sagen unsere Brautpaare über uns"} />
                                <VideoModal src={"https://www.youtube.com/embed/qmgF1Kq4lig"} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FeedbackVideo;