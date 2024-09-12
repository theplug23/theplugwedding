import React, { useState } from "react";
import ServiceSection from "../ServiceSection/ServiceSection";
import AdditionalOption from "../AdditionalOption/addOption";

const ServicesContainer = () => {
    const [total, setTotal] = useState(0);

    const handleServiceSelect = (price) => {
        setTotal(price); // Met à jour le total selon le prix du service sélectionné
    };

    return (
        <div>
            <ServiceSection onServiceSelect={handleServiceSelect} />
            <AdditionalOption total={total} />
        </div>
    );
};

export default ServicesContainer;
