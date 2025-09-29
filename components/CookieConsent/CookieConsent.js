import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const CookieConsent = () => {
    const { t } = useTranslation();
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem('cookie_consent');
        if (consent === null) {
            setIsVisible(true);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem('cookie_consent', 'accepted');
        setIsVisible(false);
    };

    const handleDecline = () => {
        localStorage.setItem('cookie_consent', 'declined');
        setIsVisible(false);
        // Optionally, add logic to disable non-essential cookies
    };

    if (!isVisible) {
        return null;
    }

    return (
        <div style={{
            position: 'fixed',
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor: '#333',
            color: 'white',
            padding: '15px',
            textAlign: 'center',
            zIndex: 100000,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap'
        }}>
            <p style={{ margin: 0, flexGrow: 1, marginBottom: '10px', color: 'white' }}>
                {t("Ce site utilise des cookies pour améliorer l'expérience utilisateur. En continuant à naviguer, vous acceptez notre utilisation des cookies.")}
            </p>
            <div style={{ display: 'flex', gap: '10px' }}>
                <button 
                    onClick={handleAccept} 
                    style={{
                        backgroundColor: '#B99226',
                        color: 'white',
                        border: 'none',
                        padding: '10px 20px',
                        cursor: 'pointer',
                        borderRadius: '5px'
                    }}>
                    {t("Accepter")}
                </button>
                <button 
                    onClick={handleDecline} 
                    style={{
                        backgroundColor: '#555',
                        color: 'white',
                        border: 'none',
                        padding: '10px 20px',
                        cursor: 'pointer',
                        borderRadius: '5px'
                    }}>
                    {t("Refuser")}
                </button>
            </div>
        </div>
    );
};

export default CookieConsent;
