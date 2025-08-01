import React from 'react'
import Image from 'next/image'
import VideoModal from '../ModalVideo/VideoModal';
import SectionTitle from '../SectionTitle';
import Link from 'next/link';
import videos from "../../api/videos";
import { dateParser } from '../../utils';
import { useTranslation } from 'react-i18next';

const VideoSection = (props) => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }
    const { t } = useTranslation()
    return (
        <section className='wpo-blog-pg-section section-padding'>
            <div className="container">
                <SectionTitle MainTitle={t('FINDEN SIE HERAUS, WIE UNSERE KUNDEN DEN BESTEN TAG IHRES LEBENS HATTEN')} subTitle={t('Hochzeitsvideos')} />
                <div className="row col-lg-12 wpo-blog-content">
                    {videos.slice(0, 3).map((video) => (
                        <div key={video.id} className='post format-video col-lg-4'>
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
                                <h3><Link href='/Hochzeitsvideos'>{video.persons}</Link></h3>
                            </div>
                        </div>
                    ))}
                </div>
                <Link style={{ backgroundColor: '#b99226' }} onClick={ClickHandler} href="/Hochzeitsvideos" className="theme-btn">{t("WEITERE VIDEOS SEHEN...")}</Link>
            </div>
        </section>
    )
}

export default VideoSection;