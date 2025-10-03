import React from 'react'
import Link from 'next/link'
import FormSection from '../FormSection/FormSection'
import { useTranslation } from 'react-i18next';
import Newsletter from '../Newsletter';

const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const Footer = () => {
    const { t } = useTranslation();
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
                                {t("Hochzeitsfotograf")} Darmstadt | {t("Hochzeitsvideograf")} Darmstadt | {t("Hochzeitsfotograf")} Frankfurt | {t("Hochzeitsvideograf")} Frankfurt | {t("Hochzeitsfotograf")} Rüsselsheim | {t("Hochzeitsvideograf")} Rüsselsheim | {t("Hochzeitsfotograf")} Mainz | {t("Hochzeitsvideograf")} Mainz | {t("Hochzeitsfotograf")} Wiesbaden | {t("Hochzeitsvideograf")} Wiesbaden | {t("Hochzeitsfotograf")} Hanau | {t("Hochzeitsvideograf")} Hanau | {t("Hochzeitsfotograf")} Langen | {t("Hochzeitsvideograf")} Langen | {t("Hochzeitsfotograf")} Neu-Isenburg | {t("Hochzeitsvideograf")} Neu-Isenburg | {t("Hochzeitsfotograf")} Dietzenbach | {t("Hochzeitsvideograf")} Dietzenbach | {t("Hochzeitsfotograf")} Heidelberg | {t("Hochzeitsvideograf")} Heidelberg | {t("Hochzeitsfotograf")} Mannheim | {t("Hochzeitsvideograf")} Mannheim | {t("Hochzeitsfotograf")} Bensheim | {t("Hochzeitsvideograf")} Bensheim | {t("Hochzeitsfotograf")} Dieburg | {t("Hochzeitsvideograf")} Dieburg | {t("Hochzeitsfotograf")} Rodgau | {t("Hochzeitsvideograf")} Rodgau | {t("Hochzeitsfotograf")} Worms | {t("Hochzeitsvideograf")} Worms | {t("Hochzeitsfotograf")} Maintal | {t("Hochzeitsvideograf")} Maintal | {t("Hochzeitsfotograf")} Weiterstadt | {t("Hochzeitsvideograf")} Weiterstadt | {t("Hochzeitsfotograf")} Bad Homburg | {t("Hochzeitsvideograf")} Bad Homburg | {t("Hochzeitsfotograf")} Friedberg | {t("Hochzeitsvideograf")} Friedberg | {t("Hochzeitsfotograf")} Gießen | {t("Hochzeitsvideograf")} Gießen | {t("Hochzeitsfotograf")} Oberursel | {t("Hochzeitsvideograf")} Oberursel | {t("Hochzeitsfotograf")} Taunusstein | {t("Hochzeitsvideograf")} Taunusstein | {t("Hochzeitsfotograf")} Königstein im Taunus | {t("Hochzeitsvideograf")} Königstein am Taunus | {t("Hochzeitsfotograf")} Weinheim | {t("Hochzeitsvideograf")} Weinheim | {t("Hochzeitsfotograf")} Bruchsal | {t("Hochzeitsvideograf")} Bruchsal | {t("Hochzeitsfotograf")} Karlsruhe | {t("Hochzeitsvideograf")} Karlsruhe | {t("Hochzeitsfotograf")} Heilbronn | {t("Hochzeitsvideograf")} Heilbronn | {t("Hochzeitsfotograf")} Bad Dürkheim | {t("Hochzeitsvideograf")} Bad Dürkheim | {t("Hochzeitsfotograf")} Speyer | {t("Hochzeitsvideograf")} Speyer
                                </p>
                            </div><br/><br/>
                        </div>
                        <div className="col-12">
                            <div className="link-widget">
                                <ul>
                                    <li><Link className='bg-component' onClick={ClickHandler} target={'_blank'} href="https://www.facebook.com/thepluggroup1"><i className="ti-facebook"></i></Link></li>
                                    <li><Link className='bg-component' onClick={ClickHandler} target={'_blank'} href="https://www.youtube.com/channel/UCjSaZbsMA4qSiqtHQOmrjFA "><i className="ti-youtube"></i></Link></li>
                                    <li><Link className='bg-component' onClick={ClickHandler} target={'_blank'} href="https://www.instagram.com/theplug_wedding_sk/"><i className="ti-instagram"></i></Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="copyright">
                                <p>{t("© Copyright 2024 | THEPLUG WEDDING - All rights reserved |")} <Link href="/Impressum">{t("Impressum")}</Link> | <Link href="/Datenschutz">{t("Datenschutz")}</Link> | {t("Web Designed By")} <Link style={{color:'#B99226', fontWeight: 'bold'}} href="https://www.stephanekamwa.de/" target='_blank'>THEPLUG</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;