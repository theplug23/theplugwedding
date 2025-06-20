import React from 'react'
import { useTranslation } from 'react-i18next';
const BannerSec = (props) => {
    const { t } = useTranslation()
    return (
        <section className="wpo-banner-section">
            <h4 className='text-white'>{t("Wir warten darauf, eure Liebe zu feiern")}</h4>
        </section>
    )
}

export default BannerSec;