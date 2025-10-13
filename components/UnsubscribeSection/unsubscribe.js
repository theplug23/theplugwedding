import React from 'react';
import { useTranslation } from 'react-i18next';

const UnsubscribeSection = () => {
    const { t } = useTranslation();

    return (
        <section className="wpo-Service-section section-padding">
            <div className="container ff">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <h1 style={{ fontWeight: 'bold', fontFamily: 'Montserrat' }}>
                            {t('Abmeldung bestätigt')}
                        </h1>
                        <p style={{ marginTop: '20px', fontSize: '18px' }}>
                            {t('Sie wurden erfolgreich von unserem Newsletter abgemeldet')}
                        </p>
                        <p style={{ fontSize: '16px', marginTop: '10px' }}>
                            {t('Es tut uns leid, Sie gehen zu sehen. Wenn Sie es sich anders überlegen, können Sie sich jederzeit wieder')}
                        </p>
                        <a
                            href="/"
                            className="theme-btn"
                            style={{ marginTop: '30px', display: 'inline-block' }}
                        >
                            {t('Zurück zur Startseite')}
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default UnsubscribeSection;
