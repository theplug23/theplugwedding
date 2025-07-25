import React from "react";
import Link from "next/link";
import SectionTitle from '../../components/SectionTitle'
import { useTranslation } from "react-i18next";


const Product = ({ products, addToCartProduct, addToWishListProduct }) => {

  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };
  const { t } = useTranslation()
  return (

    <section className="wpo-product-section section-padding">
      <div className="container">
        <SectionTitle subTitle={t('Unser Shop')} MainTitle={t('SPEZIELLE PRODUKTE FÜR EUCH')} />
        <div className="wpo-product-wrap">
          <div className="row">
            {products.length > 0 &&
              products.slice(0, 4).map((product, pitem) => (
                <div className="col col-lg-3 col-md-6 col-sm-6 col-12" key={pitem}>
                  <div className="wpo-product-item">
                    <div className="wpo-product-img">
                      <img src={product.proImg} alt="" />
                      <ul>
                        <li>
                          {/* <button
                            data-bs-toggle="tooltip"
                            data-bs-html="true"
                            title="Add to Wishlist"
                            onClick={() => addToWishListProduct(product)}
                          >
                            <i className="fi flaticon-heart"></i>
                          </button> */}
                        </li>
                        <li>
                          {/* <button
                            data-bs-toggle="tooltip"
                            data-bs-html="true"
                            title="Book now"
                            onClick={() => addToCartProduct(product)}
                          >
                            Book Now
                          </button> */}
                        </li>
                      </ul>
                    </div>
                    <div className="wpo-product-text">
                      <h3><Link onClick={ClickHandler} href={product.link} target="_blank" as={product.link}>{t(product.title)}</Link></h3>
                      {/* <h3><Link onClick={ClickHandler} href='/product-single/[slug]' as={`/product-single/${product.slug}`}>{product.title}</Link></h3> */}
                      {/* <ul>
                        <li>€{product.delPrice}</li>
                        <li>€{product.price}</li>
                      </ul> */}
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
