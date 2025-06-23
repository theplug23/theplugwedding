import React from 'react';
import ContactForm from '../ContactFrom/ContactForm'
import Link from 'next/link';
import SectionTitle from '../SectionTitle';
import MapSection from '../MapSection/MapSection';
import { useTranslation } from 'react-i18next';

const Contactpage = () => {
    const { t } = useTranslation()
    return (
        <section className="wpo-contact-pg-section section-padding">
            <div className="container">
                <SectionTitle MainTitle={t('IHR HABT MEHRERE MÖGLICHKEITEN, UNS ZU KONTAKTIEREN')} subTitle={t('Unsere Kontakts')} />
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
                                            <h2>{t("Adresse")}</h2>
                                            <p>{t("Wir sind in mehreren Ländern wie Deutschland, Luxemburg, Frankreich, Belgien, Österreich, Schweiz, Dänemark, Italien, Spanien, Kamerun, Gabun und Elfenbeinküste vertreten")}</p>
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
                                            <h2>{t("E-Mail Schreiben")}</h2>
                                            <p>{t("Ihr könnt uns unter dieser Adresse kontaktieren und uns eure Wünsche mitteilen")}</p>
                                            <p><Link className='item-menu text-link' href='mailto:info@theplug-wedding.com'>info@theplug-wedding.com</Link></p>
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
                                            <h2>{t("Jetzt Anrufen")}</h2>
                                            <p>DE: <Link className='item-menu text-link' href='tel:+4915752069252'>+49 1575 2069252</Link></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="wpo-contact-title">
                            <h2>{t("Haben Sie Fragen ?")}</h2>
                            <p>{t("Um dieses Ziel zu erreichen, führen wir ein erstes Kennenlerngespräch, nach dem ich Ihnen ein auf Ihre Wünsche, Anregungen und Ihr Budget zugeschnittenes Angebot mache. Ich schätze die Ehre und das Vertrauen, das Sie mir entgegenbringen, um in die Intimität Ihres großen Tages einzutauchen und die wichtigen und emotionalen Momente Ihrer Hochzeit festzuhalten.")}</p>
                        </div>
                        <div className="wpo-contact-form-area">
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </div>
            <MapSection />
        </section>
    )

}

export default Contactpage;
