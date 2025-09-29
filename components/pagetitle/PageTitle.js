import React from 'react'
import Link from 'next/link'
import Hero from '../hero'
import { useTranslation } from 'react-i18next'


const PageTitle = (props) => {
    const { t } = useTranslation()
    return (
        <section className="wpo-page-title" style={{ height: props.showVideo ? '1000px' : 'auto' }}>
            {props.showVideo && props.isVideoPage && (
                <video src="/images/videos/video-wedding-new-2025.mp4" autoPlay muted loop
                    className='video-bg'
                ></video>
            )}
            {props.showHero && <Hero />}
            {props.showHero && props.heroText && (
                <div style={{
                    position: 'absolute',
                    width: "100%",
                    top: '48%',
                    zIndex: 1,
                }}>
                    {/* <h2 className='slide-text' style={{fontWeight:"bold", fontSize:"30px", fontFamily:"montserrat", textAlign:"center", color:"white"}}>{props.heroText}</h2> */}
                </div>
            )}
            {props.showVideo && !props.showHero && (
                <div className="container">
                    <div className="row">
                        <div className="col col-xs-12">
                            <div className="wpo-breadcumb-wrap" style={{ color: props.isVideoPage ? 'white' : 'black' }}>
                                <h2 style={{ fontFamily: "montserrat", color: props.showVideo ? 'white' : 'black' }}>{t(props.pageTitle)}</h2>
                                <ol className="link-banner">
                                    <li><Link style={{ color: props.showVideo ? 'white' : 'black' }} href="/">{t('Home')}</Link></li>
                                    <li><span style={{ color: props.showVideo ? 'white' : 'black' }}>{t(props.pagesub)}</span></li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    )
}

export default PageTitle;