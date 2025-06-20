// components/LanguageSelector/LanguageSelector.js
import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSelector = () => {
    const { i18n } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    const currentLanguage = i18n.language || 'de';

    return (
        <li className="menu-item-has-children language-selector">
            <a href="#" style={{ color: "black", fontWeight: "bold" }}>
                {currentLanguage.toUpperCase()}
            </a>
            <ul className="sub-menu">
                <li>
                    <a 
                        href="#"
                        onClick={(e) => {
                            e.preventDefault();
                            changeLanguage('de');
                        }}
                    >
                        Deutsch
                    </a>
                </li>
                <li>
                    <a 
                        href="#"
                        onClick={(e) => {
                            e.preventDefault();
                            changeLanguage('fr');
                        }}
                    >
                        Français
                    </a>
                </li>
                <li>
                    <a 
                        href="#"
                        onClick={(e) => {
                            e.preventDefault();
                            changeLanguage('en');
                        }}
                    >
                        English
                    </a>
                </li>
            </ul>
        </li>
    );
};

export default LanguageSelector; // IMPORTANT !
