import { useTranslation } from "react-i18next"
import ContactForm from "../ContactFrom/ContactForm"

function FormSection() {
    const { t } = useTranslation()
    return (
        <section className="wpo-contact-pg-section section-padding">
            <div className="container">
                <div className="wpo-contact-title">
                    <h2>{t("Haben Sie Fragen?")}</h2>
                    <p>{t("Um dieses Ziel zu erreichen, führen wir ein erstes Kennenlerngespräch, nach dem ich Ihnen ein auf Ihre Wünsche, Anregungen und Ihr Budget zugeschnittenes Angebot mache. Ich schätze die Ehre und das Vertrauen, das Sie mir entgegenbringen, um in die Intimität Ihres großen Tages einzutauchen und die wichtigen und emotionalen Momente Ihrer Hochzeit festzuhalten.")}</p>
                </div>
                <div className="wpo-contact-form-area">
                    <ContactForm />
                </div>
            </div>
        </section>
    )
}

export default FormSection