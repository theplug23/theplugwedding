import React, { useState } from 'react';
import SimpleReactValidator from 'simple-react-validator';
import emailjs from '@emailjs/browser';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { de } from 'date-fns/locale';
import moment from 'moment/moment';
import { useTranslation } from 'react-i18next';
import { submitContactForm } from '../../api/orders';

const timeOptions = {
    Fotografie: [
        "2 Stunden", "3 Stunden", "4 Stunden", "5 Stunden", "6 Stunden",
        "7 Stunden", "8 Stunden", "9 Stunden", "10 Stunden", "11 Stunden", "12 Stunden",
    ],
    Videografie: [
        "5 Stunden", "6 Stunden", "7 Stunden", "8 Stunden", "9 Stunden",
        "10 Stunden", "11 Stunden", "12 Stunden",
    ],
    FotoVideo: [
        "5 Stunden", "6 Stunden", "7 Stunden", "8 Stunden", "9 Stunden",
        "10 Stunden", "11 Stunden", "12 Stunden",
    ],
};

const ContactForm = ({
    // Nouveaux paramètres optionnels pour les commandes
    isOrderMode = false,
    orderData = null, // { service, additions, total }
    onOrderSuccess = null,
    onOrderError = null
}) => {
    const { t } = useTranslation();
    const [sendStatus, setSendStatus] = useState(0);
    const [forms, setForms] = useState({
        name: '',
        email: '',
        subject: '',
        phone: '',
        date: null, // État de date
        time: '',
        ort:'',
        message: ''
    });
    const [validator] = useState(new SimpleReactValidator({
        className: 'errorMessage'
    }));
    const [timeOptionsForSubject, setTimeOptionsForSubject] = useState([]);

    const changeHandler = e => {
        setForms({ ...forms, [e.target.name]: e.target.value });
        if (validator.allValid()) {
            validator.hideMessages();
        } else {
            validator.showMessages();
        }
    };

    const handleSubjectChange = (e) => {
        const selectedSubject = e.target.value;
        setTimeOptionsForSubject(timeOptions[selectedSubject] || []);
        setForms({ ...forms, subject: selectedSubject, time: '' });
    };

    const handleContactSubmit = async (contactData) => {
        console.log(orderData)
        const result = await submitContactForm({
            name: contactData.name,
            email: contactData.email,
            phone: contactData.phone,
            service: contactData.service,
            message: contactData.message,
            eventDate: contactData.eventDate,
            duration: contactData.duration,
            ort: contactData.ort,
            total: isOrderMode ? orderData.total : null,
            orderDetails: isOrderMode ? orderData : null
        });

        return result;
    };

    const submitHandler = async e => {
        e.preventDefault();
        if (validator.allValid() && forms.date) {
            validator.hideMessages();
            setSendStatus(1);

            const formattedDate = moment(forms.date).format('DD.MM.YYYY');
            const formDataToSend = {
                ...forms,
                date: formattedDate
            };

            try {
                // Soumettre via l'API
                const result = await handleContactSubmit({
                    name: forms.name,
                    email: forms.email,
                    phone: forms.phone,
                    service: forms.subject,
                    message: forms.message,
                    eventDate: forms.date,
                    duration: forms.time,
                    ort: forms.ort
                });


                await emailjs.send('service_76lbexa', 'template_bvxpoqo', formDataToSend, 'AC_DTNvzmjFi3HHjs');


                setForms({
                    name: '',
                    email: '',
                    subject: '',
                    phone: '',
                    date: null,
                    time: '',
                    ort:'',
                    message: ''
                });

                setSendStatus(2);

                if (isOrderMode && onOrderSuccess) {
                    onOrderSuccess(result);
                }

            } catch (error) {
                console.error('Erreur lors de l\'envoi:', error);
                setSendStatus(3);

                // Callbacks d'erreur
                if (isOrderMode && onOrderError) {
                    onOrderError(error);
                }
            } finally {
                setTimeout(() => {
                    setSendStatus(0)
                })
            }
        } else {
            validator.showMessages();
        }
    };

    return (
        <form onSubmit={submitHandler} className="contact-validation-active">
            <div className="row">
                <div className="col col-lg-6 col-12">
                    <div className="form-field">
                        <input
                            value={forms.name}
                            type="text"
                            name="name"
                            onBlur={changeHandler}
                            onChange={changeHandler}
                            placeholder={t("Ihr Name")} />
                        {validator.message('name', forms.name, 'required|alpha_space')}
                    </div>
                </div>
                <div className="col col-lg-6 col-12">
                    <div className="form-field">
                        <select
                            onBlur={changeHandler}
                            onChange={handleSubjectChange}
                            value={forms.subject}
                            name="subject">
                            <option value="">{t("Dienstauswahl")}</option>
                            <option value="Fotografie">{t("Fotografie")}</option>
                            <option value="Videografie">{t("Videografie")}</option>
                            <option value="FotoVideo">{t("Fotos + Videos")}</option>
                            <option value="Albumfoto">{t("Albumfoto")}</option>
                            <option value="Fotobox">{t("Fotobox")}</option>
                        </select>
                        {validator.message('subject', forms.subject, 'required')}
                    </div>
                </div>
                <div className="col col-lg-6 col-12">
                    <div className="form-field">
                        <input
                            value={forms.phone}
                            type="text"
                            name="phone"
                            onBlur={changeHandler}
                            onChange={changeHandler}
                            placeholder={t("Ihre Telefonnummer")} />
                        {validator.message('phone', forms.phone, 'required|phone')}
                    </div>
                </div>
                <div className="col col-lg-6 col-12">
                    <div className="form-field">
                        <input
                            value={forms.email}
                            type="email"
                            name="email"
                            onBlur={changeHandler}
                            onChange={changeHandler}
                            placeholder={t("Deine E-Mail Adresse")} />
                        {validator.message('email', forms.email, 'required|email')}
                    </div>
                </div>
                <div className="col col-lg-6 col-12">
                    <div className="form-field">
                        <DatePicker
                            selected={forms.date}
                            onChange={(date) => setForms({ ...forms, date })}
                            locale={de}
                            placeholderText={t("Wählen Sie ein Datum")}
                        />
                        {validator.message('date', forms.date, 'required')}
                    </div>
                </div>
                <div className="col col-lg-6 col-12">
                    <div className="form-field">
                        <select
                            onBlur={changeHandler}
                            onChange={changeHandler}
                            value={forms.time}
                            name="time">
                            <option value="">{t("Begleitungszeit")}</option>
                            {timeOptionsForSubject.map((option, index) => (
                                <option key={index} value={option}>{option}</option>
                            ))}
                        </select>
                        {validator.message('time', forms.time, 'time')}
                    </div>
                </div>
                <div className="col col-lg-12 col-12">
                    <div className="form-field">
                        <input
                            value={forms.ort}
                            type="text"
                            name="ort"
                            onBlur={changeHandler}
                            onChange={changeHandler}
                            placeholder={t("Ort")} />
                        {validator.message('location', forms.ort, 'required|ort')}
                    </div>
                </div>
                <div className="col col-lg-12 col-12">
                    <textarea
                        onBlur={changeHandler}
                        onChange={changeHandler}
                        value={forms.message}
                        type="text"
                        name="message"
                        placeholder={t("Mitteilung")}>
                    </textarea>
                    {validator.message('message', forms.message, 'required')}
                </div>
            </div>
            <div className="submit-area">
                <button type="submit" className="theme-btn">
                    {sendStatus === 1 ?
                        t('IM GANGE...') :
                        (sendStatus === 0 ?
                            (isOrderMode ? t('COMMANDE BESTÄTIGEN') : t('JETZT ABSENDEN')) : sendStatus === 2 ?
                                (isOrderMode ? t('COMMANDE GESENDET') : t('E-MAIL GESENDET')) : t('Echec, Veuillez reéssayer')
                        )
                    }
                </button>
            </div>
        </form> 
    );
}

export default ContactForm;
