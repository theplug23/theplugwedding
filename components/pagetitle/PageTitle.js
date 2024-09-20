import React from 'react'
import Link from 'next/link'
import Hero from '../hero'


const PageTitle = (props) => {
    return(
        <section className="wpo-page-title" style={{ height: props.showVideo ? '1000px' : 'auto' }}>
            {props.showVideo && props.isVideoPage && (
                <video src="/images/videos/weddingcompilation.mp4" autoPlay muted loop
                 className='video-bg'
                 ></video>
            )}
            {props.showHero && <Hero />}
            {props.showHero && props.heroText && (
                <div style={{
                    position: 'absolute',
                    width:"100%",
                    top: '48%',
                    zIndex: 1,
                }}>
                    {/* <h2 style={{fontWeight:"bold", fontSize:"30px", fontFamily:"montserrat", textAlign:"center", color:"white"}}>{props.heroText}</h2> */}
                </div>
            )}
            {props.showVideo && !props.showHero && (
                <div className="container">
                    <div className="row">
                        <div className="col col-xs-12">
                            <div className="wpo-breadcumb-wrap" style={{color: props.isVideoPage ? 'white' : 'black'}}>
                                <h2 style={{fontFamily:"montserrat", color: props.showVideo ? 'white' : 'black'}}>{props.pageTitle}</h2>
                                <ol className="link-banner">
                                    <li><Link style={{color: props.showVideo ? 'white' : 'black'}} href="/">Home</Link></li>
                                    <li><span style={{color: props.showVideo ? 'white' : 'black'}}>{props.pagesub}</span></li>
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