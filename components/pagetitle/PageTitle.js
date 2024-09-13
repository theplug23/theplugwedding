import React from 'react'
import Link from 'next/link'

const PageTitle = (props) => {
    return(
        <section className="wpo-page-title" style={{ height: props.showVideo ? '1000px' : 'auto' }}>
            {props.showVideo && (
                <video src="/images/videos/video.mp4" autoPlay muted loop
                 className='video-bg'
                 ></video>
            )}
            <div className="container">
                <div className="row">
                    <div className="col col-xs-12">
                        <div className="wpo-breadcumb-wrap" style={{color: props.isVideoPage ? 'white' : 'black'}}>
                            <h2 style={{color: props.showVideo ? 'white' : 'black'}}>{props.pageTitle}</h2>
                            <ol className="link-banner">
                                <li><Link style={{color: props.showVideo ? 'white' : 'black'}} href="/">Home</Link></li>
                                <li><span style={{color: props.showVideo ? 'white' : 'black'}}>{props.pagesub}</span></li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PageTitle;