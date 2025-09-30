// components/WhatsAppWidget.js
import { useState } from 'react';

const WhatsAppWidget = () => {
  const [isOpen, setIsOpen] = useState(false);

  const phoneNumber = '4915752069252';
  const message = 'Entrez un message';
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <>
      <style jsx>{`
        .whatsapp-fab {
          position: fixed;
          bottom: 20px;
          right: 20px;
          width: 60px;
          height: 60px;
          background-color: #25d366;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
          cursor: pointer;
          z-index: 10000;
          transition: transform 0.3s ease;
        }
        .whatsapp-fab:hover {
          transform: scale(1.1);
        }
        .whatsapp-fab svg {
          width: 32px;
          height: 32px;
          fill: white;
        }
        .notification-dot {
          position: absolute;
          top: 0;
          right: 0;
          width: 15px;
          height: 15px;
          background-color: #ff4500;
          border-radius: 50%;
          border: 2px solid white;
        }
        .widget-container {
          position: fixed;
          bottom: 90px;
          right: 20px;
          width: 350px;
          max-width: 90vw;
          border-radius: 15px;
          box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
          background: #f0f0f0;
          overflow: hidden;
          z-index: 9999;
          transition: opacity 0.3s ease, transform 0.3s ease;
          opacity: ${isOpen ? '1' : '0'};
          transform: ${isOpen ? 'translateY(0)' : 'translateY(20px)'};
          visibility: ${isOpen ? 'visible' : 'hidden'};
        }
        .widget-header {
          background-color: #075e54;
          color: white;
          padding: 15px;
          display: flex;
          align-items: center;
        }
        .widget-header img {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          margin-right: 15px;
          border: 2px solid #ece5dd;
        }
        .header-text h3 {
          margin: 0;
          font-size: 1.1em;
          font-weight: 600;
        }
        .header-text p {
          margin: 0;
          font-size: 0.8em;
          opacity: 0.9;
        }
        .close-btn {
          position: absolute;
          top: 10px;
          right: 10px;
          color: white;
          cursor: pointer;
          font-size: 24px;
          line-height: 1;
        }
        .chat-body {
          background-color: #e5ddd5;
          background-image: url("/images/bg_whtp.png");
          padding: 20px;
          height: 250px;
        }
        .message {
          background: white;
          padding: 10px 15px;
          border-radius: 10px;
          margin-bottom: 10px;
          max-width: 80%;
          box-shadow: 0 1px 1px rgba(0,0,0,0.05);
        }
        .chat-footer {
          padding: 20px;
          text-align: center;
          background: url("/images/bg_whtp.png");
        }
        .start-chat-btn {
          background-color: #25d366;
          color: white;
          text-decoration: none;
          padding: 12px 30px;
          border-radius: 25px;
          font-weight: bold;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          transition: background-color 0.2s;
        }
        .start-chat-btn:hover {
          background-color: #128c7e;
        }
      `}</style>

      {/* Le bouton flottant */}
      <div className="whatsapp-fab" onClick={() => setIsOpen(!isOpen)}>
        <svg viewBox="0 0 90 90">
           <path d="M90,43.841c0,24.213-19.779,43.841-44.182,43.841c-7.747,0-15.025-1.98-21.357-5.455L0,90l7.975-23.522   c-4.023-6.606-6.34-14.354-6.34-22.637C1.635,19.628,21.416,0,45.818,0C70.223,0,90,19.628,90,43.841z M45.818,6.982   c-20.484,0-37.146,16.535-37.146,36.859c0,8.065,2.629,15.534,7.076,21.61L11.107,79.14l14.275-4.537   c5.865,3.851,12.891,6.097,20.437,6.097c20.481,0,37.146-16.533,37.146-36.857S66.301,6.982,45.818,6.982z M68.129,53.938   c-0.273-0.447-0.994-0.717-2.076-1.254c-1.084-0.537-6.41-3.138-7.4-3.495c-0.993-0.358-1.717-0.538-2.438,0.537   c-0.721,1.076-2.797,3.495-3.43,4.212c-0.632,0.719-1.263,0.809-2.347,0.271c-1.082-0.537-4.571-1.673-8.708-5.333   c-3.219-2.848-5.393-6.364-6.025-7.441c-0.631-1.075-0.066-1.656,0.475-2.191c0.488-0.482,1.084-1.255,1.625-1.882   c0.543-0.628,0.723-1.075,1.082-1.793c0.363-0.717,0.182-1.344-0.09-1.883c-0.27-0.537-2.438-5.825-3.34-8.001   c-0.877-2.129-1.758-1.833-2.438-1.85c-0.654-0.018-1.428-0.018-2.19-0.018c-0.762,0-2.004,0.271-3.045,1.344   c-1.041,1.077-3.957,3.851-3.957,9.399c0,5.548,4.045,10.902,4.616,11.622c0.573,0.719,7.865,11.964,19.042,16.623   c10.43,4.322,11.217,3.472,13.247,3.292c2.032-0.179,6.41-2.606,7.312-5.136C68.687,56.54,68.402,54.386,68.129,53.938z"/>
        </svg>
        {!isOpen && <div className="notification-dot"></div>}
      </div>

      {/* La fenêtre de chat */}
      <div className="widget-container">
        <div className="widget-header">
          <span className="close-btn" onClick={() => setIsOpen(false)}>&times;</span>
          <img src="/images/LOGO WEDDING - BLANC.png" alt="Profil" /> 
          <div className="header-text">
            <h3 style={{font:"600 16px system-ui", color:"white"}}>THEPLUG-Wedding</h3>
            <p style={{font:"300 13px system-ui", color:"white"}}>Hey there i am using whatApp</p>
          </div>
        </div>
        <div style={{color:"black"}} className="chat-body">
          <div className="message">
            Hallo 👋<br />
            Wie kann ich dir helfen?<br/><br/>
            Hello 👋<br />
            How can I help you?
          </div>
        </div>
        <div className="chat-footer">
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="start-chat-btn">
             <svg width="20" height="20" viewBox="0 0 90 90" fill="white">
                <path d="M90,43.841c0,24.213-19.779,43.841-44.182,43.841c-7.747,0-15.025-1.98-21.357-5.455L0,90l7.975-23.522   c-4.023-6.606-6.34-14.354-6.34-22.637C1.635,19.628,21.416,0,45.818,0C70.223,0,90,19.628,90,43.841z M45.818,6.982   c-20.484,0-37.146,16.535-37.146,36.859c0,8.065,2.629,15.534,7.076,21.61L11.107,79.14l14.275-4.537   c5.865,3.851,12.891,6.097,20.437,6.097c20.481,0,37.146-16.533,37.146-36.857S66.301,6.982,45.818,6.982z M68.129,53.938   c-0.273-0.447-0.994-0.717-2.076-1.254c-1.084-0.537-6.41-3.138-7.4-3.495c-0.993-0.358-1.717-0.538-2.438,0.537   c-0.721,1.076-2.797,3.495-3.43,4.212c-0.632,0.719-1.263,0.809-2.347,0.271c-1.082-0.537-4.571-1.673-8.708-5.333   c-3.219-2.848-5.393-6.364-6.025-7.441c-0.631-1.075-0.066-1.656,0.475-2.191c0.488-0.482,1.084-1.255,1.625-1.882   c0.543-0.628,0.723-1.075,1.082-1.793c0.363-0.717,0.182-1.344-0.09-1.883c-0.27-0.537-2.438-5.825-3.34-8.001   c-0.877-2.129-1.758-1.833-2.438-1.85c-0.654-0.018-1.428-0.018-2.19-0.018c-0.762,0-2.004,0.271-3.045,1.344   c-1.041,1.077-3.957,3.851-3.957,9.399c0,5.548,4.045,10.902,4.616,11.622c0.573,0.719,7.865,11.964,19.042,16.623   c10.43,4.322,11.217,3.472,13.247,3.292c2.032-0.179,6.41-2.606,7.312-5.136C68.687,56.54,68.402,54.386,68.129,53.938z"/>
             </svg>
            Démarrer la discussion
          </a>
        </div>
      </div>
    </>
  );
};

export default WhatsAppWidget;