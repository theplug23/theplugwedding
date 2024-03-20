import React, { useState } from 'react';
import SectionTitle from "../SectionTitle";

const FAQSection = (props) => {
    const faqData = [
        {
            question: '1. Können wir dich vor unserer hochzeit kennenlernen ?',
            answer: 'Bevor ihr euch für mich entscheidet, können wir gerne telefonieren oder skypen. Wenn ihr im Rhein-Main-Gebiet wohnt und Corona irgendwann mal wieder vorbei ist, freue ich mich, wenn wir uns vor eurer Hochzeit auf einen Kaffee treffen. Die ersten Fragen rund um eure Hochzeitsreportage können wir vorher am Telefon besprechen.'
        },
        {
            question: '2. Bearbeitest du die bilder unserer hochzeitsfeier ?',
            answer: 'Alle Fotos euer Hochzeitsreportage werden einzeln bearbeitet und bekommen einen Feinschliff in meinem Stil. Dabei erstelle ich auch eine Auswahl in schwarz-weiß, so dass ihr eine abwechslungsreiche Auswahl bekommt. Wenn ihr einzelne s/w Bilder später zusätzlich in Farbe haben möchtet, fragt mich einfach.'
        },
        {
            question: '3. Greifst du in den tag ein ?',
            answer: 'Ich greife nicht in den Ablauf ein, sondern fotografiere eure Hochzeit so wie sie ist - authentisch, natürlich, einzigartig. Ich verewige euch und eure Liebe so, wie ihr seid und dokumentiere euren Tag, genau so wie er ist.'
        },
        {
            question: '4. Wieviele bilder bekommen wir ?',
            answer: 'Ich habe keine festgelegte Bilderanzahl, auf die ich reduziere. Ihr bekommt alles, was gut geworden ist, ohne 10 mal das gleiche Bild zu bekommen. Als groben Maßstab kann man sagen: pro Stunde entstehen mindestens etwa 50-60 fertige Bilder.'
        },
        {
            question: '5. Müssen wir für die hochzeitsreportage posen ?',
            answer: 'An eurer Hochzeit gilt: Ihr müsst euch wohl fühlen! Ihr sollt weder künstlich posen, noch stundenlang eure Feier verlassen. Wir bauen die Paarfotos in den Ablauf eures großen Tages ein. Als Hochzeitsfotografin habe ich Erfahrung darin, dafür zu sorgen, dass es euch während des Fotografierens gut geht. Denn nur so entstehen authentische, echte und schöne Fotos.'
        },
        {
            question: '6. Was kostet eine hochzeitsreportage ?',
            answer: 'Es kommt darauf an, wie viele Stunden ihr mich dabei haben möchtet. Bei Hochzeitsfotos gilt: Qualität hat ihren Preis. Für einen Überblick über meine Preise, füllt am besten das Kontaktformular aus und ich schicke euch ein unverbindliches Angebot.'
        },
        {
            question: '7. Bietest du auch hochzeitsvideos an ?',
            answer: 'Für Videos fragt ihr am besten Ilyas von Not Your Uncle Videography! Wir arbeiten im Team zusammen und das funktioniert nicht nur deshalb gut, weil wir schon seit 100 Jahren verheiratet sind, sondern weil unser Stil gut zusammen passt. Schaut mal auf seiner Website vorbei.'
        },
        {
            question: '8. Können wir dich nur im rhein-main-gebiet buchen ?',
            answer: 'Ich arbeite nicht nur in Darmstadt, Frankfurt, Mainz und Umgebung sondern in ganz Deutschland als Hochzeitsfotografin. Für die Hochzeitsreportage reise ich auch ins Ausland. Für genauere Informationen über die Reisekosten schreibt mir einfach.'
        },
        {
            question: '9. Was passiert bei schlechtem wetter ?',
            answer: 'Auch bei Regen können schöne Fotos entstehen! Fällt euer Hochzeitstag buchstäblich ins Wasser, bin ich trotzdem vor Ort und sorge dafür, dass man euren Hochzeitsfotos das Regenwetter nicht ansieht. Außerdem biete ich euch kostenfrei ein After-Weddig-Shooting bei besserem Wetter an. Habt ihr ein Paar- oder Portrait-Shooting gebucht, biete ich euch auf Wunsch kostenfrei einen Ersatztermin an.'
        },
    ];

    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className={`wpo-Service-section section-padding ${props.pbClass}`}>
            <div className="container ff">
                <SectionTitle MainTitle={'ENTDECKEN SIE EINIGE DER HÄUFIG GESTELLTEN FRAGEN'} subTitle={'Fragen & Antworten'} />
                <div className="col col-lg-12"><br/>
                    {faqData.map((item, index) => (
                        <div key={index} className="faq-item">
                            <div className="faq-question" onClick={() => toggleAccordion(index)} style={{cursor:"pointer"}}>
                                <h3><b>{item.question}</b></h3><hr/><br/>
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
        </section>
    );
};

export default FAQSection;