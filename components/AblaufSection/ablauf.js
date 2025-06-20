import React, { useState } from 'react';
import SectionTitle from "../SectionTitle";
import { useTranslation } from 'react-i18next';

const AblaufSection = (props) => {
    const AblaufData = [
        {
            num:'1',
            question: 'SCHREIB MIR',
            answer: 'Erzählt mir die wichtigsten Informationen über euch.'
        },
        {
            num:'2',
            question: 'TELEFONAT',
            answer: 'In 10 Minuten besprechen wir, was ich euch anbieten kann und ich nenne einen Preis.'
        },
        {
            num:'3',
            question: 'KENNENLERNGESPRÄCH',
            answer: 'Im Videocall könnt ihr alle Fragen los werden und ich gebe euch Tipps zur Planung.'
        },
        {
            num:'4',
            question: 'VERLOBUNGSSHOOTING',
            answer: 'Ihr lernt die Situation vor meiner Kamera kennen und wie entspannt das ist.'
        },
        {
            num:'5',
            question: 'HOCHZEIT',
            answer: 'Ihr wisst, was auf euch zukommt und könnt den Tag komplett genießen.'
        },
        {
            num:'6',
            question: 'ERINNERUNGEN',
            answer: 'Bilder & Videos genießen, die euch ein Leben lang begleiten'
        },
    ];

    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };
const {t}=useTranslation()
    return (
        <section className={`wpo-Service-section section-padding ${props.pbClass}`}>
            <div className="container ff">
                <SectionTitle MainTitle={t('Ablauf')} subTitle={''} />
                <div className="col col-lg-12"><br/>
                    {AblaufData.map((item, index) => (
                        <div key={index} className="faq-item">
                            <div className="faq-question" onClick={() => toggleAccordion(index)} style={{cursor:"pointer"}}>
                                <div style={{display: "flex", alignItems: "center"}}>
                                    <h3 style={{fontWeight: "bold", color: "#b89339", marginRight: "10px"}}>{item.num}.</h3>
                                    <h3 style={{fontWeight: "bold", fontFamily:"Montserrat", marginLeft:"auto"}}>{t(item.question)}<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="rgba(184,147,57,1)"><path d="M12 16L6 10H18L12 16Z"></path></svg></h3>
                                </div>
                                <hr/><br/>
                            </div>
                            {activeIndex === index && (
                                <div className="faq-answer" style={{textAlign:"right"}}>
                                    <p>{t(item.answer)}</p><hr/>
                                </div>
                            )}
                        </div> 
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AblaufSection;