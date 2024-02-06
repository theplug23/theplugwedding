import React from 'react'
import Link from 'next/link'


const Error = (props) => {
    const ClickHandler = () =>{
        window.scrollTo(10, 0);
     }

    return(
        <section className="error-404-section section-padding">
            <div className="container">
                <div className="row">
                    <div className="col col-xs-12">
                        <div className="content clearfix">
                            <div className="error">
                                <img src='/images/error-404.svg' alt=""/>
                            </div>
                            <div className="error-message">
                                <h3>Hoppla ! Seite nicht gefunden !</h3>
                                <p>Es tut uns leid, aber wir können die von Ihnen angeforderte Seite nicht finden. Dies kann daran liegen, dass Sie die Webadresse falsch eingegeben haben.</p>
                                <Link onClick={ClickHandler} href="/" className="theme-btn"> Zurück Zur startseite</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Error;