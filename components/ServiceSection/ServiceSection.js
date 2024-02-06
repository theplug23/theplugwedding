import React from "react";
import Services from '../../api/service'
import OServices from "../../api/OServices";
import VServices from "../../api/VServices";
import Link from 'next/link'
import SectionTitle from "../SectionTitle";
import Image from 'next/image'
import { longueurTexte } from "../../utils";


const ServiceSection = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    const text={
        wordWrap:"break-word"
    }


    return (

        <section className={`wpo-Service-section section-padding ${props.pbClass}`} id="Service">
            <div className="container ff">
                <SectionTitle MainTitle={'Erkunden Sie unser umfassendes Angebot an Leistungen, die auf Ihre einzigartigen Bedürfnisse zugeschnitten sind.'} subTitle={'Unsere Dienstleistungen'} />
                <h2>Angebot für Fotos</h2><br/>
                <div className="wpo-Service-wrap">
                    <div className="row">
                        {Services.map((service, sitem) => (
                            <div className="col-lg-3 col-md-6 col-sm-6 col-12" key={sitem}>
                                <div className="wpo-Service-item">
                                    <div className="wpo-Service-img">
                                        <Image src={service.img} alt="service" />
                                    </div>
                                    <div className="wpo-Service-text text-wrap">
                                        <Link onClick={ClickHandler} style={{fontSize: '18px'}} href='/service/[slug]' as={`/service/${service.slug}`}>{longueurTexte(service.title)}</Link>
                                    </div>
                                </div>
                                <div className="wpo-Service-item item-service">
                                    <ul className="list-item">
                                        {service.packages.map((pack) => (
                                            <li style={{fontSize: '14px'}} key={pack.id} className="item">{pack.slug}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
                <h2>Angebot für Fotos und Videos</h2><br/>
                <div className="wpo-Service-wrap">
                    <div className="row">
                        {OServices.map((oservice, ositem) => (
                            <div className="col-lg-3 col-md-6 col-sm-6 col-12" key={ositem}>
                                <div className="wpo-Service-item">
                                    <div className="wpo-Service-img">
                                        <Image src={oservice.img} alt="service" />
                                    </div>
                                    <div className="wpo-Service-text text-wrap">
                                        <Link onClick={ClickHandler} style={{fontSize: '18px'}} href='/service/[slug]' as={`/service/${oservice.slug}`}>{longueurTexte(oservice.title)}</Link>
                                    </div>
                                </div>
                                <div className="wpo-Service-item item-service">
                                    <ul className="list-item">
                                        {oservice.packages.map((pack) => (
                                            <li style={{fontSize: '14px'}} key={pack.id} className="item">{pack.slug}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
                <h2>Angebot für Videos</h2><br/>
                <div className="wpo-Service-wrap">
                    <div className="row">
                        {VServices.map((vservice, vsitem) => (
                            <div className="col-lg-3 col-md-6 col-sm-6 col-12" key={vsitem}>
                                <div className="wpo-Service-item">
                                    <div className="wpo-Service-img">
                                        <Image src={vservice.img} alt="service" />
                                    </div>
                                    <div className="wpo-Service-text text-wrap">
                                        <Link onClick={ClickHandler} style={{fontSize: '18px'}} href='/service/[slug]' as={`/service/${vservice.slug}`}>{longueurTexte(vservice.title)}</Link>
                                    </div>
                                </div>
                                <div className="wpo-Service-item item-service">
                                    <ul className="list-item">
                                        {vservice.packages.map((pack) => (
                                            <li style={{fontSize: '14px'}} key={pack.id} className="item">{pack.slug}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </div>
        </section>
    );
}

export default ServiceSection;