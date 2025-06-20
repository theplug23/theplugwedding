import React, { useState } from 'react'
import abimg from '../../public/images/about/img.jpg'
import abimg1 from '../../public/images/about/2.jpg'
import abimg3 from '../../public/images/about/3.jpg'
import abimg4 from '../../public/images/about/4.jpg'
import cm1 from '../../public/images/about/IMG_2092.jpg'
import cm2 from '../../public/images/about/Photo-10.jpg'
import Link from 'next/link'
import Image from 'next/image'


// Things i added for the slide show
import Slider from "react-slick";
import { Button } from '@mui/material'
import { t } from 'i18next'

var settings = {
    dots: false,
    arrows: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    centerMode: true,
    centerPadding: '0',
    responsive: [
        {
            breakpoint: 1500,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
};

const HeroArray = [
    {
        hImg: abimg
    },
    {
        hImg: abimg4
    },
    {
        hImg: abimg1
    },
    {
        hImg: abimg3
    },
    {
        hImg: cm1
    },
    {
        hImg: cm2
    }
]


const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const ShortAbout = (props) => {
    const [showMore, setShowMore] = useState(true)

    return (
        <section className="wpo-about-section">{/*ajouter la classe --section-padding-- pour un espace en debut de section*/}
            <div className="container">
                <div className="wpo-about-wrap">
                    <div className="row">
                        <div className="col-lg-6 col-md-12 col-12 order-lg-2 order-2">
                            <div className="wpo-about-item">
                                <div className="wpo-about-img">
                                    <Slider {...settings}>
                                        {
                                            HeroArray.map((hero, hr) => (
                                                <div className="wpo-hero-item" key={hr}>
                                                    <div className="wpo-hero-img">
                                                        <Image src={hero.hImg} alt="" />
                                                        <div className="wpo-hero-text">
                                                        </div>
                                                    </div>
                                                </div>
                                            ))
                                        }
                                    </Slider>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-12 order-lg-1 order-1">
                            <div className="wpo-about-text">
                                <h2 style={{ color: '#b99226' }} >{t("Über Stephane")}</h2>

                                <p style={{ fontSize: '20px', fontFamily: 'Montserrat' }}>{t("Liebe Brautpaare")},<br /><br />
                                    {t("Ich bin Stéphane Kamwa, Hochzeitsfotograf und -videograf.")}<br /><br />
                                    {t("Vor 13 Jahren bin ich nach Deutschland gekommen, um zu studieren. Zu Beginn meines Studiums in Medieninformatik an der Hochschule Mittelhessen habe ich die Fotografie und Videografie entdeckt. Dieser Beruf hat mir ermöglicht, mein Studium in Deutschland zu finanzieren.")}<br /><br />
                                </p>
                                {!showMore && <p style={{ fontSize: '20px', fontFamily: 'Montserrat', marginTop: -50 }}>
                                    {t("Mit 10 Jahren Erfahrung in der Hochzeitsfotografie und -videografie bin ich leidenschaftlich darum bemüht, die kostbarsten Momente festzuhalten. Ich liebe es, eure Geschichte des Tages durch wunderschöne bewegte Bilder zu erzählen. Meine Filme und Fotos sind die perfekten Erinnerungen an den schönsten Tag eures Lebens – ein einzigartiges Andenken, das ihr niemals vergessen werdet.")}<br /><br />
                                    {t("Wenn euch ein authentischer Stil, echte Emotionen und ungestellte Posen gefallen, freue ich mich auf eure Anfrage, um eure persönliche Geschichte zu erzählen.")}<br /><br />
                                    {t("Nach dem Ende meines Studiums konnte ich nicht lange in einem formellen Job bleiben, weil mir das Gefühl fehlte, Menschen durch meine Arbeit glücklich zu machen. Ich glaube, es war keine bewusste Entscheidung, Hochzeitsfotograf und -videograf zu werden. Es war das Schicksal, das mich in diese Richtung gelenkt hat. Und wisst ihr was? Ich würde nichts daran ändern. Ich halte mich für den glücklichsten Menschen auf der Welt, weil ich den Beruf ausüben kann, in den ich mich verliebt habe.")}<br /><br />
                                    {t("Schaut euch gerne mein Portfolio an und entdeckt mein Universum.")}
                                </p>}
                                <Button style={{ fontFamily: 'Montserrat', marginTop: -50, color: '#b99226' }} onClick={() => setShowMore(!showMore)}>
                                    {showMore ? t('Mehr sehen') : t('Siehe weniger')}
                                </Button><br />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ShortAbout;