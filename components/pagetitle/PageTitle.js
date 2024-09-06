import React from 'react'
import Link from 'next/link'

const PageTitle = (props) => {
    return(
        <section className="wpo-page-title">
            {props.showVideo && (
                <iframe src='https://www.youtube.com/embed/qkUczp9-0jo?autoplay=1&mute=1&loop=1&playlist=qkUczp9-0jo'
                 allow='autoplay; encrypted-media'
                 className='video-bg'
                 ></iframe>
            )}
            <div className="container">
                <div className="row">
                    <div className="col col-xs-12">
                        <div className="wpo-breadcumb-wrap" style={{color: props.isVideoPage ? 'white' : 'black'}}>
                            <h2>{props.pageTitle}</h2>
                            <ol className="link-banner">
                                <li><Link href="/">Home</Link></li>
                                <li><span>{props.pagesub}</span></li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PageTitle;