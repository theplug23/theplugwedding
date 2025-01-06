import React from 'react'
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"
import { Gallery, Item } from 'react-photoswipe-gallery'
import SectionTitle from '../SectionTitle'
import {shuffleArray} from '../../utils/index.js'

const Portfolios = [
    {
        Pimg: '/images/event/Firma-Unternehmen-Event-Party-Birthday-Geburtstag-Bild.jpg',
    },
    {
        Pimg: '/images/event/Firma-Unternehmen-Event-Party-Birthday-Geburtstag-Bild-2.jpg',
    },
    {
        Pimg: '/images/event/Firma-Unternehmen-Event-Party-Birthday-Geburtstag-Bild-3.jpg',
    },
    {
        Pimg: '/images/event/Firma-Unternehmen-Event-Party-Birthday-Geburtstag-Bild-4.jpg',
    },
    {
        Pimg: '/images/event/Firma-Unternehmen-Event-Party-Birthday-Geburtstag-Bild-5.jpg',
    },
    {
        Pimg: '/images/event/Firma-Unternehmen-Event-Party-Birthday-Geburtstag-Bild-6.jpg',
    },

]


const PortfolioSectionS3 = (props) => {
    return (
        <section className={`wpo-portfolio-section-s2 section-padding ${props.prClass}`} id="gallery">
            <div className="container-fluid">
                <SectionTitle MainTitle={'ENTDECKEN SIE IN BILDERN EINIGE BILDER UNSERER VERANSTALTUNGEN'} subTitle={'Unseren Veranstaltungen'}/>
                <div className="sortable-gallery">
                    <div className="gallery-filters"></div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="portfolio-grids gallery-container clearfix">
                                <Gallery >
                                    <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 4 }}>
                                        <Masonry columnsCount={4} gutter="30px">
                                            {shuffleArray(Portfolios).map((image, i) => (
                                                <div className="grid" key={i}>
                                                    <Item
                                                        original={image.Pimg}
                                                        thumbnail={image.Pimg}
                                                        width="100%"
                                                        height="100%"
                                                    >
                                                        {({ ref, open }) => (
                                                            <img ref={ref} onClick={open} src={image.Pimg} alt={`image_wifor` + i} />
                                                        )}
                                                    </Item>
                                                </div>
                                            ))}
                                        </Masonry>
                                    </ResponsiveMasonry>
                                </Gallery>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PortfolioSectionS3;