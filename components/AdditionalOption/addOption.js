import React, { useState } from "react";
import SectionTitle from "../../components/SectionTitle";


function Option({ name, quantity, price, add, onSelect }) {
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


const AdditionalOption = (props) => {
    const [total, setTotal] = useState(0);

    const handleOptionSelect = (isSelected, price) => {
        setTotal(prevTotal => isSelected ? prevTotal + price : prevTotal - price);
    }
    const optionsData = [
        // { name: 'Überstunde/n', quantity: 1, price: 250 },
        { name: 'Überstunde/n',  price: 250 },
        { name: 'Hochzeitsvideo Instagram-teaser (1-Minute)', price: 500 },
        { name: 'Alle Reden, Ehegelübde und Hochzeitstanz als einzelnes extra Video', price: 500 },
        { name: 'Exklusive Rechte an Bild & Ton', price: 300 },
        { name: 'FOMO-Edit', price: 1000}
    ];

    return(
        <section className="wpo-blog-pg-section">
            <div className="container">
            <SectionTitle MainTitle={'ZUSATZ OPTIONEN'} subTitle={''}/>
                <div className="row">
                    <div className="row col-lg-12  wpo-blog-content">
                        <p style={{fontSize:"22px"}}>Das Paket kann auch ohne weitere Zusatzoption gebucht werden. Aufgrund der hohen Nachfrage weiterer Optionen, die oft nach der Hochzeit bewusst werden, gibt es hier eine klare Preisliste für weitere Möglichkeiten.</p><br/><br/><br/><br/>                    
                        <table style={{fontSize:"22px"}}>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    {/* <th>QTV</th> */}
                                    <th>Price</th>
                                    {/* <th>Add</th> */}
                                </tr>
                            </thead><hr/>
                            <tbody>
                                {optionsData.map((option) => (
                                <Option key={option.name} {...option} onSelect={handleOptionSelect}/>
                                ))}
                            </tbody>
                        </table>
                    </div><br/><br/>
                    <div style={{textAlign:"right", color:"#b89325", marginTop:"30px"}}>Total : {total} €</div>
                </div>
            </div>
        </section>
    )
}

export default AdditionalOption;