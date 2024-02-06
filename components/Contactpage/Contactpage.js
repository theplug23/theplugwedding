import React from 'react';
import ContactForm from '../ContactFrom/ContactForm'
import Link from 'next/link';
import SectionTitle from '../SectionTitle';
import MapSection from '../MapSection/MapSection';

const Contactpage = () => {

    return(
        <section className="wpo-contact-pg-section section-padding">
            <div className="container">
                <SectionTitle MainTitle={'IHR HABT MEHRERE MÖGLICHKEITEN, UNS ZU KONTAKTIEREN'} subTitle={'Unsere Kontakts'}/>
                <div className="row">
                    <div className="col col-lg-10 offset-lg-1">
                        <div className="office-info">
                            <div className="row">
                                <div className="col col-xl-4 col-lg-6 col-md-6 col-12">
                                    <div className="office-info-item">
                                        <div className="office-info-icon">
                                            <div className="icon">
                                                <i className="fi flaticon-maps-and-flags"></i>
                                            </div>
                                        </div>
                                        <div className="office-info-text">
                                            <h2>Adresse</h2>
                                            <p>Wir sind in mehreren Ländern wie Deutschland, Luxemburg, Frankreich, Belgien, Österreich, Schweiz, Dänemark, Italien, Spanien, Kamerun, Gabun und Elfenbeinküste vertreten</p>
                                        </div>
                                    </div>
                                </div> 
                                <div className="col col-xl-4 col-lg-6 col-md-6 col-12">
                                    <div className="office-info-item">
                                        <div className="office-info-icon">
                                            <div className="icon">
                                                <i className="fi flaticon-email"></i>
                                            </div>
                                        </div>
                                        <div className="office-info-text">
                                            <h2>E-Mail Schreiben</h2>
                                            <p>Ihr könnt uns unter dieser Adresse kontaktieren und uns eure Wünsche mitteilen</p>
                                            <p><Link className='item-menu text-link' href='mailto:contact@theplug-group.com'>contact@theplug-group.com</Link></p>
                                        </div>
                                    </div>
                                </div> 
                                <div className="col col-xl-4 col-lg-6 col-md-6 col-12">
                                    <div className="office-info-item">
                                        <div className="office-info-icon">
                                            <div className="icon">
                                                <i className="fi flaticon-phone-call"></i>
                                            </div>
                                        </div>
                                        <div className="office-info-text">
                                            <h2>Jetzt Anrufen</h2>
                                            <p>DE: <Link className='item-menu text-link' href='tel:+4915752069252'>+49 1575 2069252</Link></p>
                                        </div>
                                    </div>
                                </div> 
                            </div>
                        </div>
                        <div className="wpo-contact-title">
                            <h2>Haben Sie Fragen ?</h2>
                            <p>Um dieses Ziel zu erreichen, führen wir ein erstes Kennenlerngespräch, nach dem ich Ihnen ein auf Ihre Wünsche, Anregungen und Ihr Budget zugeschnittenes Angebot mache. Ich schätze die Ehre und das Vertrauen, das Sie mir entgegenbringen, um in die Intimität Ihres großen Tages einzutauchen und die wichtigen und emotionalen Momente Ihrer Hochzeit festzuhalten.</p>
                        </div>
                        <div className="wpo-contact-form-area">
                            <ContactForm/>
                        </div>
                    </div>                
                </div>
            </div> 
            <MapSection />
        </section>
     )
        
}

export default Contactpage;
