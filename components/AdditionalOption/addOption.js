import React, { useState } from "react";
import SectionTitle from "../../components/SectionTitle";
import { useTranslation } from "react-i18next";


function Option({ name, price, add, onSelect }) {
    const [selected, setSelected] = useState(false);

    const handleSelect = () => {
        setSelected(!selected);
        onSelect(!selected, price);
    };

    return (
        <tr>
            <td>{name}</td>
            {/* <td>{quantity}</td> */}
            <td>{price} €</td>
            <td>
                <input type="checkbox" checked={selected} onChange={handleSelect} />
            </td>
        </tr>
    );
}


const AdditionalOption = ({ total }) => {
    const [optionsTotal, setOptionsTotal] = useState(0);

    const handleOptionSelect = (isSelected, price) => {
        setOptionsTotal(prevTotal => isSelected ? prevTotal + price : prevTotal - price);
    }
    // console.log("total:", total, "optiontotal:", optionsTotal);

    const grandTotal = (typeof total === 'number' ? total : 0) + optionsTotal; // Total final incluant le service et les options


    const { t } = useTranslation()
    const optionsData = [
        // { name: 'Überstunde/n', quantity: 1, price: 250 },
        { name: t('Überstunde/n'), price: 250 },
        { name: t('Exklusive Rechte an Bild & Ton'), price: 300 },
        { name: t('Hochzeitsvideo Instagram-teaser (1-Minute)'), price: 500 },
        { name: t('Alle Reden, Ehegelübde und Hochzeitstanz als einzelnes extra Video'), price: 500 },
        { name: t('ALBUM'), price: 500 },
        { name: t('FOMO-Edit'), price: 1000 },
    ];
    return (
        <section className="wpo-blog-pg-section">
            <div className="container">
                <SectionTitle MainTitle={t('ZUSATZ OPTIONEN')} subTitle={''} />
                <div className="row">
                    <div className="row col-lg-12  wpo-blog-content">
                        <p style={{ fontSize: "22px" }}>{t("Das Paket kann auch ohne weitere Zusatzoption gebucht werden. Aufgrund der hohen Nachfrage weiterer Optionen, die oft nach der Hochzeit bewusst werden, gibt es hier eine klare Preisliste für weitere Möglichkeiten.")}</p><br /><br /><br /><br />
                        <table style={{ fontSize: "22px", color: "black" }}>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    {/* <th>QTV</th> */}
                                    <th>Price</th>
                                    {/* <th>Add</th> */}
                                </tr>
                            </thead><hr />
                            <tbody>
                                {optionsData.map((option) => (
                                    <Option key={option.name} {...option} onSelect={handleOptionSelect} />
                                ))}
                            </tbody>
                        </table>
                    </div><br /><br />
                    <div style={{ position: "fixed", bottom: "10%", color: "#b89325", zIndex: "1000", textAlign: "right", right: "3%" }}>Total : {grandTotal} €</div>
                </div>
            </div>
        </section>
    )
}

export default AdditionalOption;