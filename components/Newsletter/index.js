import { useState } from "react";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useEffect } from "react";
import emailjs from '@emailjs/browser'

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    p: 3,
    height: '40%'
};
const styleSmallScreen = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    p: 3,
    height: '60%',
    width: '80%'
}
const styleMediumScreen = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    p: 3,
    height: '55%',
    width: '80%'
}

export default function Newsletter() {
    const [open, setOpen] = useState(false);
    const [email, SetEmail] = useState('')
    const [width, setWidth] = useState(window.innerWidth)
    const [forms, setForms] = useState({email: email})
    const [statusEmail, setStatusEmail] = useState(0)
    
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    
    const handleSubmit = (e) => {
        e.preventDefault()
        setStatusEmail(1)
        setForms({email: email})
        emailjs.send('service_76lbexa', 'template_bm6ewab', forms, 'AC_DTNvzmjFi3HHjs')
        .then((result) => {
            console.log(result.text)
            setStatusEmail(2)
            localStorage.setItem('tpw-newsletter', JSON.stringify({email: email}))
        })
        .catch((error) => {
            console.log(error)
            setStatusEmail(3)
        })
    }

    return (
        <div>
            {/* <Button onClick={handleOpen}>Open modal</Button> */}
            <section className="wpo-contact-pg-section">
                <div className="container">   
                    <div className="wpo-contact-form-area"> 
                        <div className="modalBody modal-body">
                            <div className="modalBody modal-body">
                                <form className="contact-validation-active" onSubmit={handleSubmit}>
                                    <div className="row">
                                        <div className="col-lg-12 col-12">
                                            <div className="form-field">
                                            <label>Willst Du immer auf dem neuesten Stand sein? Newsletter abonnieren</label>
                                                <input
                                                    type="email"
                                                    placeholder="Deine E-Mail Adresse"
                                                    onChange={(e) => SetEmail(e.target.value)}
                                                    required
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="submit-area">
                                        <button type="submit" className="theme-btn">
                                            {statusEmail === 1 ? 'Bearbeitung...' 
                                            : (statusEmail === 2 ? 'Erfolgreich !'                      
                                            : (statusEmail === 3 ? 'Fehler !' : 'Senden'))}
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                     </div>
                </div>
            </section>
        </div>
    )
}