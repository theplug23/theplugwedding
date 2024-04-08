import React, { useState } from 'react';
import Slider from "react-slick";
import Image from 'next/image'


const testimonial = []


const Testimonial2 = (props) => {

    const [nav1, setNav1] = useState();
    const [nav2, setNav2] = useState();


    return (
        <section className={`wpo-testimonial-section section-padding ${props.tClass}`}>
            <div className="container">
                <div className="wpo-testimonial-wrap">
                    <div className="row align-items-center">
                        <div className="col col-lg-7">
                            <Slider asNavFor={nav2} ref={(slider1) => setNav1(slider1)} dots={true} arrows={false}>
                                {
                                    testimonial.map((tesmnl, tsm) => (
                                        <div className="testimonial-img" key={tsm}>
                                            <Image src={tesmnl.tImg} alt="" />
                                        </div>
                                    ))
                                }
                            </Slider>
                        </div>
                        <div className="col col-lg-5">
                            <div className="wpo-testimonial-items">
                                <Slider
                                    asNavFor={nav1}
                                    ref={(slider2) => setNav2(slider2)}
                                    slidesToShow={1}
                                    fade={true}
                                    swipeToSlide={true}
                                    focusOnSelect={true}
                                >
                                    {
                                        testimonial.map((tesmnl, tsm) => (
                                            <div className="wpo-testimonial-item" key={tsm}>
                                                <div className="wpo-testimonial-text">
                                                    <i className="fi flaticon-quotation"></i>
                                                    <p>{tesmnl.Des}</p>
                                                    <div className="wpo-testimonial-text-btm">
                                                        <h3>{tesmnl.Title}</h3>
                                                        <span>Wedding- {tesmnl.Date}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    }

                                </Slider>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Testimonial2;