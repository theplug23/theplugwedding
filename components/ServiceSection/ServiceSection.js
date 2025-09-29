import React from "react";
import Services from '../../api/service'
import OServices from "../../api/OServices";
import VServices from "../../api/VServices";
import Link from 'next/link'
import SectionTitle from "../SectionTitle";
import Image from 'next/image'
import { longueurTexte } from "../../utils";
import { useTranslation } from "react-i18next";


const ServiceSection = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    const handleClick = (service) => {
        props.onServiceSelect(service);
    }
    const { t } = useTranslation()
    const { selectedServices } = props; // Destructure selectedServices from props
    return (

        <section className={`wpo-Service-section section-padding ${props.pbClass}`} id="Service">
            <div className="container ff">
                <SectionTitle MainTitle={t('Erkunden Sie unser umfassendes Angebot an Leistungen, die auf Ihre einzigartigen Bedürfnisse zugeschnitten sind.')} subTitle={t('Unsere Angebote')} />
                <div id="photo" style={{ height: "280px" }}></div>
                <h2 id="photo" style={{ color: '#b99256' }}>{t("Angebote für Fotos")}</h2><br />
                <p>{t("Wir präsentieren euch unsere professionellen Hochzeitsfotografie-Dienstleistungen, die darauf abzielen, die unvergesslichen Momente eures besonderen Tages in wunderschönen Bildern festzuhalten. Mit einem kreativen und geschulten Auge fangen wir die Emotionen, die Schönheit und die einzigartigen Details ein, die eure Hochzeit so besonders machen. Ob romantische Porträts oder spontane Augenblicke – unsere Fotos erzählen eure Geschichte mit Stil und Eleganz. Vertraut auf unsere Erfahrung und Leidenschaft, um die Erinnerungen an euren schönsten Tag für die Ewigkeit festzuhalten.")}</p>
                <div className="wpo-Service-wrap">
                    <div className="row">
                        {Services.map((service, sitem) => {
                            const isSelected = selectedServices.some((s) => s.id === service.id);
                            return (
                                <div className="col-lg-3 col-md-6 col-sm-6 col-12" style={{ cursor: "pointer", }} key={sitem} onClick={() => handleClick(service)}>
                                    <div className={`wpo-Service-item ${isSelected ? 'selected-service' : ''}`}>
                                        <div className="wpo-Service-img">
                                            <Image src={service.img} alt="service" />
                                        </div>
                                        <div className="wpo-Service-text text-wrap">
                                            <h2 style={{ fontFamily: "Montserrat", fontSize: "22px", fontWeight: "600", marginTop: "10px" }} >{service.price} €</h2>
                                        </div><ul className="list-item">
                                            {service.packages.map((pack) => (
                                                <li style={{ fontSize: '14px', color: "black" }} key={pack.id} className="item">{t(pack.slug)}</li>
                                            ))}
                                        </ul>
                                    </div>

                                </div>
                            )
                        })}

                    </div>
                </div>
                <div id="video" style={{ height: "280px" }}></div>
                <h2 id="video" style={{ color: '#b99256' }}>{t("Angebote für Videos")}</h2><br />
                <p>{t("Wir bieten euch unvergessliche Hochzeitsvideos, die eure einzigartigen Momente für immer festhalten. Mit unserer Leidenschaft für Film und einem kreativen Auge schaffen wir emotionale und authentische Videos, die eure Liebesgeschichte in den Mittelpunkt stellen. Von den kleinen Details bis hin zu den großen Augenblicken – wir fangen alles ein, damit ihr diese besonderen Momente immer wieder erleben könnt. Unser Ziel ist es, eure Hochzeit so festzuhalten, wie sie wirklich war: voller Emotionen, Freude und Liebe. Lasst uns gemeinsam euren schönsten Tag in einem Film verewigen, der euch ein Leben lang begleiten wird!")}</p>
                <div className="wpo-Service-wrap">
                    <div className="row">
                        {VServices.map((vservice, vsitem) => {
                            const isSelected = selectedServices.some((s) => s.id === vservice.id);
                            return (
                                <div className="col-lg-3 col-md-6 col-sm-6 col-12" key={vsitem} style={{ cursor: "pointer" }} onClick={() => handleClick(vservice)}>
                                    <div className={`wpo-Service-item ${isSelected ? 'selected-service' : ''}`}>
                                        <div className="wpo-Service-img">
                                            <Image src={vservice.img} alt="service" />
                                        </div>
                                        <div className="wpo-Service-text text-wrap">
                                            <h2 style={{ fontFamily: "Montserrat", fontSize: "20px", fontWeight: "600", marginTop: "10px" }}>{vservice.price} €</h2>
                                        </div> <ul className="list-item">
                                            {vservice.packages.map((pack) => (
                                                <li style={{ fontSize: '14px', color: "black" }} key={pack.id} className="item">{t(pack.slug)}</li>
                                            ))}
                                        </ul>
                                    </div>

                                </div>
                            )
                        })}
                    </div>
                </div>
                <div id="photo-video" style={{ height: "280px" }}></div>
                <h2 id="photo-video" style={{ color: '#b99256' }}>{t("Angebote für Fotos und Videos")}</h2><br />
                <p>{t("Wir bieten euch einzigartige Foto- und Videodienstleistungen für euren Hochzeitstag an, die all die besonderen Momente festhalten, die ihr für immer in Erinnerung behalten möchtet. Unser Team sorgt dafür, dass ihr euch an eurem großen Tag voll und ganz auf das Feiern konzentrieren könnt, während wir im Hintergrund die Magie in professionellen Bildern und emotionalen Videos einfangen. Mit Liebe zum Detail und einem Auge für authentische Augenblicke gestalten wir eure Hochzeitsgeschichte in einem individuellen Stil, der eure Persönlichkeit widerspiegelt. Lasst uns gemeinsam unvergessliche Erinnerungen schaffen, die ein Leben lang halten.")}</p>
                <div className="wpo-Service-wrap">
                    <div className="row">
                        {OServices.map((oservice, ositem) => {
                            const isSelected = selectedServices.some((s) => s.id === oservice.id);
                            return (
                                <div className="col-lg-3 col-md-6 col-sm-6 col-12" key={ositem} style={{ cursor: "pointer" }} onClick={() => handleClick(oservice)}>
                                    <div className={`wpo-Service-item ${isSelected ? 'selected-service' : ''}`}>
                                        <div className="wpo-Service-img">
                                            <Image src={oservice.img} alt="service" />
                                        </div>
                                        <div className="wpo-Service-text text-wrap">
                                            <h2 style={{ fontFamily: "Montserrat", fontSize: "22px", fontWeight: "600", marginTop: "10px" }}>{oservice.price} €</h2>
                                        </div> <ul className="list-item">
                                            {oservice.packages.map((pack) => (
                                                <li style={{ fontSize: '14px', color: "black" }} key={pack.id} className="item">{t(pack.slug)}</li>
                                            ))}
                                        </ul>
                                    </div>

                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ServiceSection;
