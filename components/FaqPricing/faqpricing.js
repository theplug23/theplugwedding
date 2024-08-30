import React, { useState } from 'react';
import Image from 'next/image'
import img from "../../public/images/portfolio/p/p282.jpg"

const FAQPricing = (props) => {
    const faqData = [
        {
            num:'1',
            question: 'Wie läuft die Buchung ab ?',
            answer: 'Gerade in den Sommermonaten sind die Termine häufig schnell vergeben. Ich filme an einem Tag nur eine Hochzeit, daher gibt es auch nur ein Brautpaar, welches mich buchen kann. Bei einer Anfrage wird der Termin noch nicht reserviert. Erst wenn ihr den Buchungsvertrag unterschrieben habt und die Anzahlung geleistet wurde, ist der Termin fest für euch reserviert.'
        },
        {
            num:'2',
            question: ' Für wie viele Stunden sollten wir dich buchen ?',
            answer: 'Wir empfehlen es jedem Brautpaar das Paket zu wählen bei dem wir vom Getting Ready bis zum Hochzeitstanz dabei sind. Natürlich ist euch diese Entscheidung selbst überlassen. Für mich ist es jedoch wichtig eure gesamte Geschichte vom Hochzeitstag zu filmen. Ein Tipp von mir hier ist - falls möglich - seine Hochzeit später anzusetzen. Die Überstunden müsst ihr nicht direkt buchen - ihr könnt dies auch später oder auch noch am Hochzeitstag entscheiden.'
        },
        {
            num:'3',
            question: 'Wann erhalten wir das fertige Hochzeitsvideo ?',
            answer: 'Die Nachbearbeitung ist für mich immer ein sehr kreativer Prozess, da ich jede Geschichte individuell gestalten möchte. In der Regel benötige ich ca. 6 – 8 Wochen.'
        },
        {
            num:'4',
            question: 'Reisekosten / Verpflegung / Unterkunft ?',
            answer: 'Generell sind die Reisekosten exklusive. Für Hotel/Unterkunft & Fahrtkosten nehmen wir eine Pauschale, die je nach Hochzeit individuell bestimmt wird. Dies ist davon abhängig, ob z.b. eine Unterkunftmöglichkeit vom Brautpaar gestellt wird oder ein Leihwagen etc. '
        },
    ];

    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className={`wpo-Service-section section-padding ${props.pbClass}`}>
            <div className="container ff">
                <div className="row">    
                    <div className="col-lg-4">
                        <Image style={{ }} src={img} />
                    </div>
                    <div className="col-lg-8" style={{marginTop:"10%"}}>
                        {faqData.map((item, index) => (
                            <div key={index} className="faq-item">
                                <div className="faq-question" onClick={() => toggleAccordion(index)} style={{cursor:"pointer"}}>
                                    <div style={{display: "flex", alignItems: "center"}}>
                                        <h3 style={{fontWeight: "bold", fontFamily:"Montserrat", marginRight: "10px"}}>{item.num}.</h3>
                                        <h3 style={{fontWeight: "bold", fontFamily:"Montserrat"}}>{item.question}</h3>
                                    </div>
                                    <hr/><br/>
                                </div>
                                {activeIndex === index && (
                                    <div className="faq-answer">
                                        <p>{item.answer}</p><hr/>
                                    </div>
                                )}
                            </div> 
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQPricing;