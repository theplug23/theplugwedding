import React from 'react'
import Link from 'next/link'
import FormSection from '../FormSection/FormSection'

const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const Footer = () => {
    return (
        <>
            <div className="wpo-site-footer text-center">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="footer-image">
                                <Link className="logo" href="/"><img src='/images/THEPLUG-WEGGING_logo.png' style={{width:'200px', height:'200px', marginTop: '-50px', marginBottom: '-40px'}}
                                                alt="" /></Link>
                            </div><br/>
                        </div>
                        {/* <div className="col-12">
                            <div className="footer-link">
                                <ul>
                                    <li><Link className='item-menu' href="/">Home</Link></li>
                                    <li><Link className='item-menu' href="/about">ÜBER MICH</Link></li>
                                    <li><Link className='item-menu' href="/Hochzeit-Fotografie">Portfolio</Link></li>
                                    <li><Link className='item-menu' href="/Angebot">DIENSTLEISTUNGEN</Link></li>
                                    <li><Link className='item-menu' href="/Blog">BLOG</Link></li>
                                    <li><Link className='item-menu' href="/Kontakt">KONTAKT</Link></li>
                                    <li><Link className='item-menu' href="/Videos">Hochzeitsvideos</Link></li> 
                                </ul>
                            </div>
                        </div> */}
                        <div className="col-12">
                            <div className="Tags">
                                <p style={{color:'black'}}>
                                Hochzeitsfotograf Darmstadt | Hochzeitsvideograf Darmstadt | Hochzeitsfotograf Frankfurt | Hochzeitsvideograf Frankfurt | Hochzeitsfotograf Rüsselsheim | Hochzeitsvideograf Rüsselsheim | Hochzeitsfotograf Mainz | Hochzeitsvideograf Mainz | Hochzeitsfotograf Wiesbaden | Hochzeitsvideograf Wiesbaden | Hochzeitsfotograf Hanau | Hochzeitsvideograf Hanau | Hochzeitsfotograf Langen | Hochzeitsvideograf Langen | Hochzeitsfotograf Neu-Isenburg | Hochzeitsvideograf Neu-Isenburg | Hochzeitsfotograf Dietzenbach | Hochzeitsvideograf Dietzenbach | Hochzeitsfotograf Heidelberg | Hochzeitsvideograf Heidelberg | Hochzeitsfotograf Mannheim | Hochzeitsvideograf Mannheim | Hochzeitsfotograf Bensheim | Hochzeitsvideograf Bensheim | Hochzeitsfotograf Dieburg | Hochzeitsvideograf Dieburg | Hochzeitsfotograf Rodgau | Hochzeitsvideograf Rodgau | Hochzeitsfotograf Worms | Hochzeitsvideograf Worms | Hochzeitsfotograf Maintal | Hochzeitsvideograf Maintal | Hochzeitsfotograf Weiterstadt | Hochzeitsvideograf Weiterstadt | Hochzeitsfotograf Bad Homburg | Hochzeitsvideograf Bad Homburg | Hochzeitsfotograf Friedberg | Hochzeitsvideograf Friedberg | Hochzeitsfotograf Gießen | Hochzeitsvideograf Gießen | Hochzeitsfotograf Oberursel | Hochzeitsvideograf Oberursel | Hochzeitsfotograf Taunusstein | Hochzeitsvideograf Taunusstein | Hochzeitsfotograf Königstein im Taunus | Hochzeitsvideograf Königstein am Taunus | Hochzeitsfotograf Weinheim | Hochzeitsvideograf Weinheim | Hochzeitsfotograf Bruchsal | Hochzeitsvideograf Bruchsal | Hochzeitsfotograf Karlsruhe | Hochzeitsvideograf Karlsruhe | Hochzeitsfotograf Heilbronn | Hochzeitsvideograf Heilbronn | Hochzeitsfotograf Bad Dürkheim | Hochzeitsvideograf Bad Dürkheim | Hochzeitsfotograf Speyer | Hochzeitsvideograf Speyer
                                </p>
                            </div><br/><br/>
                        </div>
                        <div className="col-12">
                            <div className="link-widget">
                                <ul>
                                    <li><Link className='bg-component' onClick={ClickHandler} target={'_blank'} href="https://www.facebook.com/thepluggroup1"><i className="ti-facebook"></i></Link></li>
                                    <li><Link className='bg-component' onClick={ClickHandler} target={'_blank'} href="https://www.youtube.com/channel/UCjSaZbsMA4qSiqtHQOmrjFA "><i className="ti-youtube"></i></Link></li>
                                    <li><Link className='bg-component' onClick={ClickHandler} target={'_blank'} href="https://www.instagram.com/theplug_wedding/"><i className="ti-instagram"></i></Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="copyright">
                                <p>© Copyright 2024 | THEPLUG WEDDING - All rights reserved | Web Designed By <Link style={{color:'#B99226', fontWeight: 'bold'}} href="https://www.comtheplug.com/" target='_blank'>THEPLUG COM</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;