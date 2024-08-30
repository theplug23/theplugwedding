// import ContactForm from "../ContactFrom/ContactForm"

function InvestingSection() {
    return (
        <section className="wpo-contact-pg-section">{/*ajouter la classe --section-padding-- pour ajouter un espace en debut de section*/}
            <div className="container wpo-section-title">
                    <h4 style={{color:"#b99256", textAlign:"center"}}>Investment</h4><br/>
                    <p style={{fontSize:"1.5rem"}}>Ich möchte völlig transparent und ehrlich zu euch beiden sein. Hier sind meine Preise aufgelistet und es gibt keine versteckten Kosten. Alle Preises sind bereits Brutto. <br/> Man heiratet nur ein einziges mal im Leben und dieses Erbstück sollte für immer festgehalten werden.</p>
                
                {/* <div className="wpo-contact-form-area">
                    <ContactForm/>
                </div> */}
            </div>
        </section>
    )
}

export default InvestingSection