import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

const FloatingCart = ({
  selectedService = null,
  selectedAdditions = [],
  setTotal,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { t } = useTranslation()
  const calculateTotal = () => {
    const serviceTotal = selectedService ? selectedService.price : 0;
    const additionsTotal = selectedAdditions.reduce((sum, addition) =>
      sum + addition.price, 0
    );
    setTotal(serviceTotal + additionsTotal)
    return serviceTotal + additionsTotal;
  };

  const grandTotal = calculateTotal();
  const hasItems = selectedService || selectedAdditions.length > 0;
  const [stateLoad, setStateLoad] = useState(1)
  // const handleOrder = () => {
  //   order
  // }
  return (
    <StyledFloatingCart>
      {/* Bouton du panier flottant */}
      <CartButton
        className={`btn ${grandTotal > 0 ? 'btn-warning' : 'btn-outline-warning'}`}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <i className="fi flaticon-shopping-cart icon me-2" style={{ fontSize: '15px' }}></i>
        <span className="cart-total">{grandTotal} €</span>
        {hasItems && (
          <CartBadge className="badge bg-danger">
            {(selectedService ? 1 : 0) + selectedAdditions.length}
          </CartBadge>
        )}
      </CartButton>

      {/* Panel du panier étendu */}
      {isExpanded && (
        <CartPanel
          className={`card shadow-lg animate__animated animate__slideInUp`}
        >
          <div className="card-header bg-warning text-dark">
            <div className="d-flex justify-content-between align-items-center">
              <h5 style={{ fontWeight: "bold", fontFamily: "Montserrat", color:'#FFF' }} className="mb-0">

                {t("Votre Sélection")}
              </h5>
              <button
                className="btn btn-sm btn-outline-dark"
                onClick={() => setIsExpanded(false)}
              >
                X
              </button>
            </div>
          </div>

          <div className="card-body p-0">
            {/* Service principal sélectionné */}
            {selectedService && (
              <div className="p-3 border-bottom">
                {/* <h6 className="text-warning mb-3" style={{ fontWeight: "bold", fontFamily: "Montserrat" }}>
                  <i className="fi flaticon-star icon me-2"></i>
                  {t("Service Principal")}
                </h6> */}

                <div className="card border-warning bg-opacity-10">
                  <div className="card-body p-3">
                    <div className="d-flex justify-content-between align-items-start mb-2">
                      <div className="flex-grow-1">
                        <h6 className="mb-2">{t(selectedService.title)}</h6>
                        <div className="text-muted small">
                          {selectedService.packages && selectedService.packages.length > 0 && (
                            <div>
                              <strong>{t("Inclus :")}</strong>
                              <ul className="mb-0 mt-1" style={{ paddingLeft: '15px' }}>

                                {selectedService.packages.map(pack => (
                                  <li style={{ fontSize: '14px', color: "black" }} key={pack.id} className="item">{t(pack.slug)}</li>
                                ))}

                              </ul>
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="text-end ms-3">
                        <strong className="text-warning fs-5">{selectedService.price} €</strong>
                        <div>
                          <i className="fi flaticon-check-mark icon text-success"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Services additionnels sélectionnés */}
            {selectedAdditions.length > 0 && (
              <div className="p-3 border-bottom">
                <h6 className="text-warning mb-3" style={{ fontWeight: "bold", fontFamily: "Montserrat" }}>
                  <i className="fi flaticon-plus icon me-2"></i>
                  {t("Services Additionnels")} ({selectedAdditions.length})
                </h6>

                <div className="row g-2">
                  {selectedAdditions.map((addition, index) => (
                    <div key={`${addition.name}-${index}`} className="col-12">
                      <div className="card border-light">
                        <div className="card-body p-2">
                          <div className="d-flex justify-content-between align-items-center">
                            <div className="flex-grow-1">
                              <h6 className="mb-0 small">{t(addition.name)}</h6>
                            </div>
                            <div className="d-flex align-items-center">
                              <span className="text-warning me-2">{addition.price} €</span>
                              <i className="fi flaticon-check-mark icon text-success"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Résumé et total */}
            {hasItems ? (
              <div className="p-3 bg-light">
                <div className="mb-3">
                  <h6 className="text-warning mb-2" style={{ fontWeight: "bold", fontFamily: "Montserrat" }}>
                    <i className="fi flaticon-receipt icon me-2"></i>
                    {t("Résumé de la commande")}
                  </h6>

                  {selectedService && (
                    <div className="d-flex justify-content-between mb-1">
                      <span className="small">{t(selectedService.title)}</span>
                      <span className="small text-warning fw-bold">{selectedService.price} €</span>
                    </div>
                  )}

                  {selectedAdditions.map((addition, index) => (
                    <div key={`summary-${addition.name}-${index}`} className="d-flex justify-content-between mb-1">
                      <span className="small">{t(addition.name)}</span>
                      <span className="small text-warning fw-bold">{addition.price} €</span>
                    </div>
                  ))}

                  <hr className="my-2" />
                </div>

                <div className="d-flex justify-content-between align-items-center mb-3">
                  <strong className="fs-6">Total</strong>
                  <strong className="text-warning fs-4">{grandTotal} €</strong>
                </div>

                {/* <button
                  className="btn btn-warning w-100 py-2"
                  onClick={() => onProceedToOrder && onProceedToOrder({
                    service: selectedService,
                    additions: selectedAdditions,
                    total: grandTotal
                  })}
                  disabled={!selectedService}
                >
                  <i className="fi flaticon-paper-plane icon me-2"></i>
                  {t("COMMANDER")}
                </button> */}
 <small className="text-muted d-block text-center mt-2">
                    {t("Veuillez remplir le formulaire au bas de la page pour passer cette commande")}
                  </small>
                {!selectedService && (
                  <small className="text-muted d-block text-center mt-2">
                    {t("Veuillez d'abord sélectionner un service principal")}
                  </small>
                )}
              </div>
            ) : (
              <div className="p-4 text-center text-muted">
                <i className="fi flaticon-shopping-cart icon mb-3 opacity-50" style={{ fontSize: '3rem' }}></i>
                <h6>{t("Votre panier est vide")}</h6>
                <p className="mb-0 small">{t("Sélectionnez un service pour commencer")}</p>
              </div>
            )}
            
          </div>
        </CartPanel>
      )}
    </StyledFloatingCart>
  );
};

// Styles avec styled-components mis à jour
const StyledFloatingCart = styled.div`
  position: fixed;
  bottom: 100px;
  right: 20px;
  z-index: 1000;
  
  .cursor-pointer {
    cursor: pointer;
  }
  
  .text-warning {
    color: #b99226 !important;
  }
  
  .bg-warning {
    background-color: #b99226 !important;
  }
  
  .btn-warning {
    background-color: #b99226;
    border-color: #b99226;
    color: white;
    
    &:hover {
      background-color: #a08223;
      border-color: #a08223;
    }
  }
  
  .btn-outline-warning {
    border-color: #b99226;
    color: #b99226;
    
    &:hover {
      background-color: #b99226;
      border-color: #b99226;
      color: white;
    }
  }
  
  .border-warning {
    border-color: #b99226 !important;
  }
`;

const CartButton = styled.button`
  border-radius: 50px;
  padding: 12px 20px;
  font-weight: 600;
  font-size: 1.1rem;
  position: relative;
  box-shadow: 0 4px 15px rgba(185, 146, 38, 0.3);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(185, 146, 38, 0.4);
  }
  
  .cart-total {
    font-weight: 700;
  }
`;

const CartBadge = styled.span`
  position: absolute;
  top: -5px;
  right: -5px;
  font-size: 0.7rem;
  padding: 2px 6px;
  border-radius: 10px;
`;

const CartPanel = styled.div`
  position: absolute;
  bottom: 70px;
  right: 0;
  width: 450px;
  max-width: 90vw;
  max-height: 80vh;
  overflow-y: auto;
  
  @media (max-width: 768px) {
    width: 350px;
    right: -10px;
  }
`;

export default FloatingCart;
