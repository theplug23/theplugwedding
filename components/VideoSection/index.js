import React from 'react'
import Image from 'next/image'
import VideoModal from '../ModalVideo/VideoModal';
import SectionTitle from '../SectionTitle';
import Link from 'next/link';
import videos from "../../api/videos";
import { dateParser } from '../../utils';

const VideoSection = (props) => {
    const ClickHandler = () =>{
        window.scrollTo(10, 0);
    }

    return (
        <section className='wpo-blog-pg-section section-padding'>
            <div className="container">
                    <SectionTitle MainTitle={'FINDEN SIE HERAUS, WIE UNSERE KUNDEN DEN BESTEN TAG IHRES LEBENS HATTEN'} subTitle={'Hochzeitsvideos'}/>
                    <div className="row">
                        <div className='col col-lg-12 col-12'>
                            <div className="wpo-blog-content">
                                                         
                            {videos.slice(0, 2).map((video) => (                          
                                    <div key={video.id} className='post format-video'>
                                        <div className="entry-media video-holder">
                                            <Image src={video.bgImg} alt={video.persons} />
                                            <VideoModal src={video.link} />
                                        </div>
                                        <div className="entry-meta">
                                            <ul>
                                                <li><i className="fi flaticon-user"></i> By <Link href='/about'>STEPHANE KAMWA</Link> </li>
                                                <li><i className="fi flaticon-calendar"></i>{dateParser(video.date)}</li>
                                                <li><i className="fi flaticon-location"></i> {video.place}</li>
                                            </ul>
                                        </div>
                                        <div className="entry-details">
                                            <h3><Link href='/Videos'>{video.persons}</Link></h3>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            
                            <Link style={{backgroundColor:'#b99226'}} onClick={ClickHandler} href="/Videos" className="theme-btn">WEITERE VIDEOS SEHEN...</Link>
                        </div>
                    </div>
                </div>
        </section>
    )
}

export default VideoSection;