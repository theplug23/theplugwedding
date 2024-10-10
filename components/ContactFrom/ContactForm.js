import React, { useState } from 'react'
import SimpleReactValidator from 'simple-react-validator';
import emailjs from '@emailjs/browser'

const timeOptions = {
    Fotografie: [
      "2 Stunden",
      "3 Stunden",
      "4 Stunden",
      "5 Stunden",
      "6 Stunden",
      "7 Stunden",
      "8 Stunden",
      "9 Stunden",
      "10 Stunden",
      "11 Stunden",
      "12 Stunden",
    ],
    Videografie: [
        "5 Stunden",
        "6 Stunden",
        "7 Stunden",
        "8 Stunden",
        "9 Stunden",
        "10 Stunden",
        "11 Stunden",
        "12 Stunden",
    ],
    FotoVideo: [
        "5 Stunden",
        "6 Stunden",
        "7 Stunden",
        "8 Stunden",
        "9 Stunden",
        "10 Stunden",
        "11 Stunden",
        "12 Stunden",
    ],
};

const ContactForm = () => {
    const [sendStatus, setSendStatus] = useState(0)
    const [forms, setForms] = useState({
        name: '',
        email: '',
        subject: '',
        phone: '',
        date: '',
        time:'',
        message: ''
    });
    const [validator] = useState(new SimpleReactValidator({
        className: 'errorMessage'
    }));
    const [timeOptionsForSubject, setTimeOptionsForSubject] = useState([]);

    const changeHandler = e => {
        setForms({ ...forms, [e.target.name]: e.target.value })
        if (validator.allValid()) {
            validator.hideMessages();
        } else {
            validator.showMessages();
        }
    };

    const handleSubjectChange = (e) => {
        const selectedSubject = e.target.value;
        setTimeOptionsForSubject(timeOptions[selectedSubject] || []);
        setForms({ ...forms, subject: selectedSubject, time: '' }); // Réinitialiser le champ de temps
    };

    const submitHandler = e => {
        e.preventDefault();
        if (validator.allValid() && forms.date) {
            validator.hideMessages();
            setSendStatus(1)
            emailjs.send('service_76lbexa', 'template_bvxpoqo', forms, 'AC_DTNvzmjFi3HHjs')
            .then((result) => {
                console.log(result.text)
                setForms({
                    name: '',
                    email: '',
                    subject: '',
                    phone: '',
                    date: '',
                    time:'',
                    message: ''
                })
                setSendStatus(2)
            }, (error) => {
                console.log(error.text)
            })
            console.log(forms)
        } else {
            validator.showMessages();
        }
    };

    return (
        <form onSubmit={(e) => submitHandler(e)} className="contact-validation-active">
            <div className="row">
                <div className="col col-lg-6 col-12">
                    <div className="form-field">
                        <input
                            value={forms.name}
                            type="text"
                            name="name"
                            onBlur={(e) => changeHandler(e)}
                            onChange={(e) => changeHandler(e)}
                            placeholder="Ihr Name" />
                        {validator.message('name', forms.name, 'required|alpha_space')}
                    </div>
                </div>
                <div className="col col-lg-6 col-12">
                    <div className="form-field">
                        <select
                            onBlur={(e) => changeHandler(e)}
                            onChange={(e) => handleSubjectChange(e)}
                            value={forms.subject}
                            name="subject">
                            <option value="">Dienstauswahl</option>
                            <option value="Fotografie">Fotografie</option>
                            <option value="Videografie">Videografie</option>
                            <option value="FotoVideo">Fotos + Videos</option>
                            <option value="Albumfoto">Albumfoto</option>
                            <option value="Fotobox">Fotobox</option>
                        </select>
                        {validator.message('subject', forms.subject, 'required')}
                    </div>
                </div>
                <div className="col col-lg-6 col-12">
                    <div className="form-field">
                        <input
                            value={forms.phone}
                            type="phone"
                            name="phone"
                            onBlur={(e) => changeHandler(e)}
                            onChange={(e) => changeHandler(e)}
                            placeholder="Ihre Telefonnummer" />
                        {validator.message('phone', forms.phone, 'required|phone')}
                    </div>
                </div>
                <div className="col col-lg-6 col-12">
                    <div className="form-field">
                        <input
                            value={forms.email}
                            type="email"
                            name="email"
                            onBlur={(e) => changeHandler(e)}
                            onChange={(e) => changeHandler(e)}
                            placeholder="Deine E-Mail Adresse" />
                        {validator.message('email', forms.email, 'required|email')}
                    </div>
                </div>
                <div className="col col-lg-6 col-12">
                    <div className="form-field">
                        <input
                            value={forms.date}
                            type="date"
                            name="date"
                            format="tt/mm/jjjj"
                            onBlur={(e) => changeHandler(e)}
                            onChange={(e) => changeHandler(e)} />
                        {validator.message('date', forms.date, 'required')}
                    </div>
                </div>
                <div className="col col-lg-6 col-12">
                    <div className="form-field">
                        <select
                            onBlur={(e) => changeHandler(e)}
                            onChange={(e) => changeHandler(e)}
                            value={forms.time}
                            name="time">
                            <option value="">Begleitungszeit</option>
                            {timeOptionsForSubject.map((option, index) => (
                                <option key={index} value={option}> {option} </option>
                            ))}
                        </select>
                        {validator.message('time', forms.time, 'time')}
                    </div>
                </div>
                <div className="col col-lg-12 col-12">
                    <textarea
                        onBlur={(e) => changeHandler(e)}
                        onChange={(e) => changeHandler(e)}
                        value={forms.message}
                        type="text"
                        name="message"
                        placeholder="Mitteilung">
                    </textarea>
                    {validator.message('message', forms.message, 'required')}
                </div>
            </div>
            <div className="submit-area">
                <button type="submit" className="theme-btn">{sendStatus === 1 ? 'IM GANGE...' : (sendStatus === 0 ? 'JETZT ABSENDEN' : 'E-MAIL GESENDET')}</button>
            </div>
        </form >
    )
}

export default ContactForm;