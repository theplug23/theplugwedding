import Navbar from "../../components/Navbar/Navbar";
import React, { Fragment, useEffect } from "react";
import PageTitle from "../../components/pagetitle/PageTitle";
import SectionTitle from "../../components/SectionTitle";
import Image from "next/image";
import VideoModal from "../../components/ModalVideo/VideoModal";
import Link from "next/link";
import videos from "../../api/videos";
import { dateParser } from "../../utils";
import logo from '/public/images/THEPLUG-WEGGING_logo.png'
import Projects from '../../api/projects';
import Footer from "../../components/footer/Footer";
import PartnerSection from "../../components/PartnerSection";
import Scrollbar from "../../components/scrollbar/scrollbar";
import MapSection from '../../components/MapSection/MapSection';
import FormSection from "../../components/FormSection/FormSection";
import { Helmet } from "react-helmet";
import ReactGA from 'react-ga4';
import { useTranslation } from "react-i18next";


const Videos = () => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    const SubmitHandler = (e) => {
        e.preventDefault()
    }

    useEffect(() => {
        ReactGA.event({
            hitType: 'pageview',
            page: window.location.pathname,
            title: "Hochzeitsvideos PAGE"
        })
    })
    const { t } = useTranslation()
    return (
        <Fragment>
            <Helmet>
                <title>{t("HOCHZEITSVIDEOS")} - THEPLUG WEDDING</title>
            </Helmet>
            <Navbar />
            <PageTitle pageTitle={t('HOCHZEITSVIDEOS')} pagesub={'Hochzeitsvideos'} showVideo={true} isVideoPage={true} />
            <section className="wpo-blog-pg-section section-padding">
                <div className="container">
                    <SectionTitle MainTitle={t('FINDEN SIE HERAUS, WIE UNSERE KUNDEN DEN BESTEN TAG IHRES LEBENS HATTEN')} subTitle={t('Unsere Hochzeitsvideos')} />
                    <div className="row">
                        <div className="row col-lg-12 wpo-blog-content">
                            {videos.map((video) => (
                                <div key={video.id} className='post format-video col-lg-6'>
                                    <div className="entry-media video-holder">
                                        <Image style={{ minHeight: '250px' }} src={video.bgImg} alt={video.persons} />
                                        <VideoModal src={video.link} />
                                    </div>
                                    <div className="entry-meta">
                                        <ul>
                                            <li><i className="fi flaticon-user"></i> By <Link href='/Ueber-uns'>theplug-wedding team</Link></li>
                                            <li><i className="fi flaticon-calendar"></i>{dateParser(video.date)}</li>
                                            <li><i className="fi flaticon-location"></i> {video.place}</li>
                                        </ul>
                                    </div>
                                    <div className="entry-details">
                                        <h3>{video.persons}</h3>
                                    </div>
                                </div>
                            ))}
                        </div>
                        {/* <div className="col col-lg-4 col-12">
                            <div className="blog-sidebar">
                                <div className="widget about-widget">
                                    <div className="img-holder">
                                        <Image src={logo} alt=""/>
                                    </div>
                                    <h4>THEPLUG Weeding</h4>
                                    <p>{t("THEPLUG Hochzeitsteam verewigt den schönsten Tag in Ihrem Leben")}</p>
                                    <div className="social">
                                        <ul className="clearfix">
                                            <li><Link onClick={ClickHandler} target={'_blank'} href="https://www.facebook.com/thepluggroup1"><i className="fi flaticon-facebook-app-symbol"></i></Link></li>
                                            <li><Link onClick={ClickHandler} target={'_blank'} href="https://www.youtube.com/channel/UCjSaZbsMA4qSiqtHQOmrjFA"><i className="fi flaticon-youtube"></i></Link></li>
                                            <li><Link onClick={ClickHandler} target={'_blank'} href="https://www.instagram.com/theplug_wedding_sk/"><i className="fi flaticon-instagram-1"></i></Link></li>
                                            <li><Link onClick={ClickHandler} target={'_blank'} href="https://wa.me/4915752069252"><i className="fa fa-whatsapp"></i></Link></li>
                                        </ul>
                                    </div>
                                </div>              
                
                                <div className="widget wpo-instagram-widget">
                                    <div className="widget-title">
                                        <h3>Last Weddings</h3>
                                    </div>
                                    <ul className="d-flex">
                                        {Projects.slice(0,3).map((project) => (
                                            <li key={project.id}><Link onClick={ClickHandler} href='/project/[slug]' as={`/project/${project.slug}`}><Image src={project.pSimg} alt="" /></Link></li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="widget tag-widget">
                                    <h3>Themes that fascinate us</h3>
                                    <ul>
                                        <li><Link onClick={ClickHandler} href="/shop">photography</Link></li>
                                        <li><Link onClick={ClickHandler} href="/shop">Planning</Link></li>
                                        <li><Link onClick={ClickHandler} href="/shop">wedding</Link></li>
                                        <li><Link onClick={ClickHandler} href="/shop">events</Link></li>
                                        <li><Link onClick={ClickHandler} href="/shop">creative</Link></li>
                                        <li><Link onClick={ClickHandler} href="/shop">Solution</Link></li>
                                        <li><Link onClick={ClickHandler} href="/shop">collection</Link></li>
                                        <li><Link onClick={ClickHandler} href="/shop">Idea</Link></li>
                                        <li><Link onClick={ClickHandler} href="/shop">bride & groom</Link></li>
                                    </ul>
                                </div>

                                <div className="widget about-widget">
                                    <h2>Wie können wireuch helfen!</h2>
                                    <p>Ihr könnt uns eine genaue Nachricht hinterlassen, was ihr wollt, indem ihr auf die Schaltfläche unten klickt.</p>
                                    <Link onClick={ClickHandler} href="/contact">Kontakt Uns</Link>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </section>
            <PartnerSection pClass={'section-padding'} />
            <FormSection />
            <MapSection />
            <Footer />
            <Scrollbar />
        </Fragment>
    )
}

export default Videos;