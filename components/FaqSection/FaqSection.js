import React, { useState } from 'react';
import SectionTitle from "../SectionTitle";
import { useTranslation } from 'react-i18next';

const FAQSection = (props) => {
    const faqData = [
        {
            num: '1',
            question: 'Können wir dich vor unserer Hochzeit kennenlernen ?',
            answer: 'Bevor ihr euch für mich entscheidet, können wir gerne telefonieren oder skypen. Wenn ihr im Rhein-Main-Gebiet wohnt und Corona irgendwann mal wieder vorbei ist, freue ich mich, wenn wir uns vor eurer Hochzeit auf einen Kaffee treffen. Die ersten Fragen rund um eure Hochzeitsreportage können wir vorher am Telefon besprechen.'
        },
        {
            num: '2',
            question: 'Bearbeitest du die Bilder unserer Hochzeitsfeier ?',
            answer: 'Alle Fotos euer Hochzeitsreportage werden einzeln bearbeitet und bekommen einen Feinschliff in meinem Stil. Dabei erstelle ich auch eine Auswahl in schwarz-weiß, so dass ihr eine abwechslungsreiche Auswahl bekommt. Wenn ihr einzelne s/w Bilder später zusätzlich in Farbe haben möchtet, fragt mich einfach.'
        },
        {
            num: '3',
            question: 'Greifst du in den Tag ein ?',
            answer: 'Ich greife nicht in den Ablauf ein, sondern fotografiere eure Hochzeit so wie sie ist - authentisch, natürlich, einzigartig. Ich verewige euch und eure Liebe so, wie ihr seid und dokumentiere euren Tag, genau so wie er ist.'
        },
        {
            num: '4',
            question: 'Wieviele Bilder bekommen wir ?',
            answer: 'Ich habe keine festgelegte Bilderanzahl, auf die ich reduziere. Ihr bekommt alles, was gut geworden ist, ohne 10 mal das gleiche Bild zu bekommen. Als groben Maßstab kann man sagen: pro Stunde entstehen mindestens etwa 50-60 fertige Bilder.'
        },
        {
            num: '5',
            question: 'Müssen wir für die Hochzeitsreportage posen ?',
            answer: 'An eurer Hochzeit gilt: Ihr müsst euch wohl fühlen! Ihr sollt weder künstlich posen, noch stundenlang eure Feier verlassen. Wir bauen die Paarfotos in den Ablauf eures großen Tages ein. Als Hochzeitsfotografin habe ich Erfahrung darin, dafür zu sorgen, dass es euch während des Fotografierens gut geht. Denn nur so entstehen authentische, echte und schöne Fotos.'
        },
        {
            num: '6',
            question: 'Was kostet eine Hochzeitsreportage ?',
            answer: 'Es kommt darauf an, wie viele Stunden ihr mich dabei haben möchtet. Bei Hochzeitsfotos gilt: Qualität hat ihren Preis. Für einen Überblick über meine Preise, füllt am besten das Kontaktformular aus und ich schicke euch ein unverbindliches Angebot.'
        },
        {
            num: '7',
            question: 'Bietest du auch Hochzeitsvideos an ?',
            answer: 'Für Videos fragt ihr am besten Ilyas von Not Your Uncle Videography! Wir arbeiten im Team zusammen und das funktioniert nicht nur deshalb gut, weil wir schon seit 100 Jahren verheiratet sind, sondern weil unser Stil gut zusammen passt. Schaut mal auf seiner Website vorbei.'
        },
        {
            num: '8',
            question: 'Können wir dich nur im Rhein-Main-Gebiet buchen ?',
            answer: 'Ich arbeite nicht nur in Darmstadt, Frankfurt, Mainz und Umgebung sondern in ganz Deutschland als Hochzeitsfotografin. Für die Hochzeitsreportage reise ich auch ins Ausland. Für genauere Informationen über die Reisekosten schreibt mir einfach.'
        },
        {
            num: '9',
            question: 'Was passiert bei schlechtem Wetter ?',
            answer: 'Auch bei Regen können schöne Fotos entstehen! Fällt euer Hochzeitstag buchstäblich ins Wasser, bin ich trotzdem vor Ort und sorge dafür, dass man euren Hochzeitsfotos das Regenwetter nicht ansieht. Außerdem biete ich euch kostenfrei ein After-Weddig-Shooting bei besserem Wetter an. Habt ihr ein Paar- oder Portrait-Shooting gebucht, biete ich euch auf Wunsch kostenfrei einen Ersatztermin an.'
        },
        {
            num: '10',
            question: 'Wie lange dauert es, bis wir die fertigen Hochzeitsfotos und das Video erhalten ?',
            answer: 'Die Nachbearbeitung ist für mich immer ein sehr kreativer Prozess, da ich jede Geschichte individuell gestalten möchte. In der Regel benötige ich 2-4 Wochen für die Fotos und ca. 4-8 Wochen für das Video.'
        },
    ];

    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };
    const { t } = useTranslation()
    return (
        <section className={`wpo-Service-section section-padding ${props.pbClass}`}>
            <div className="container ff">
                <SectionTitle MainTitle={t('ENTDECKEN SIE EINIGE DER HÄUFIG GESTELLTEN FRAGEN')} subTitle={t('Fragen & Antworten')} />
                <div className="col col-lg-12">
                    {faqData.map((item, index) => (
                        <div key={index} className="faq-item">
                            <div className="faq-question" onClick={() => toggleAccordion(index)} style={{ cursor: "pointer" }}>
                                <div style={{ display: "flex", alignItems: "center" }}>
                                    <h3 style={{ fontWeight: "bold", color: "#b89339", marginRight: "10px" }}>{item.num}.</h3>
                                    <h3 style={{ fontWeight: "bold", fontFamily: "Montserrat" }}>{t(item.question)}<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="rgba(184,147,57,1)"><path d="M12 16L6 10H18L12 16Z"></path></svg></h3>
                                </div>
                                <hr /><br />
                            </div>
                            {activeIndex === index && (
                                <div className="faq-answer">
                                    <p>{t(item.answer)}</p><hr />
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