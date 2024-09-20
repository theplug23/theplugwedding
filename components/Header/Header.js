import React, { useState } from 'react'
import Link from 'next/link'
import MobileMenu from '../MobileMenu/MobileMenu'
import { connect } from "react-redux";
import { removeFromCart } from "../../store/actions/action";

const Header = (props) => {
    //const [menuActive, setMenuState] = useState(false);
    //const [cartActive, setcartState] = useState(false);

    const SubmitHandler = (e) => {
        e.preventDefault()
    }

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    const { carts } = props;

    return (
        <header id="header" className={props.topbarNone}>
            <div className={`wpo-site-header wpo-header-style-1 ${props.hclass}`}>
                <nav className="navigation navbar navbar-expand-lg navbar-light">
                    <div className="container-fluid">
                        <div className="row align-items-center">
                            <div className="col-md-3 col-3 d-lg-none d-block">
                                <div className="mobail-menu">
                                    <MobileMenu />
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-6 col-6 d-lg-block d-none">
                                <div className='icons'>
                                    <ul className="icon-color">
                                        <li className='icon'><Link style={{color:'#B99226'}}  target={'_blank'} href="tel:+4915752069252"><i className="fi flaticon-phone-call"></i></Link></li>
                                        <li className='icon'><Link style={{color:'#B99226'}} href="https://wa.me/4915752069252" target={'_blank'}><i className="fa fa-whatsapp"></i></Link></li>
                                        <li className='icon'><Link style={{color:'#B99226'}} target={'_blank'} href="mailto:contact@theplug-group.com"><i className="fi flaticon-email icon"></i></Link></li>                 
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-6 col-6 d-lg-none dl-block">
                                <div className="navbar-header">
                                    <Link className="navbar-brand" href="/"><img src='/images/logo-mobile.png' alt="logo_mobile" /></Link>
                                </div>
                            </div>
                            <div className="col-lg-8 col-md-1 col-1">
                                <div id="navbar" className="collapse navbar-collapse navigation-holder">
                                    <button className="menu-close"><i className="ti-close"></i></button>
                                    <ul className="nav navbar-nav mb-2 mb-lg-0">
                                        <li className="menu-item-has-children">
                                            <Link className='item-menu' href="/">Home</Link>
                                            {/* <ul className="sub-menu">
                                                <li><Link onClick={ClickHandler} href="/home">Main Home</Link></li>
                                                <li><Link onClick={ClickHandler} href="/home2">Wedding Planner</Link></li>
                                                <li><Link onClick={ClickHandler} href="/home3">Announcement Home</Link></li>
                                                <li><Link onClick={ClickHandler} href="/home4">Wedding Home</Link></li>
                                                <li><Link onClick={ClickHandler} href="/home5">Asian / Indian Wedding Announcement</Link></li>
                                                <li><Link onClick={ClickHandler} href="/home6">Asian / Indian Wedding Planner</Link></li>
                                                <li><Link onClick={ClickHandler} href="/home7">Muslim Wedding</Link></li>
                                                <li><Link onClick={ClickHandler} href="/home8">Shop Home</Link></li>
                                                <li><Link onClick={ClickHandler} href="/home9">Wedding Invitation</Link></li>
                                            </ul> */}
                                        </li>

                                        <li className="menu-item-has-children">
                                            <Link className='item-menu' href="/Ueber-uns">About</Link>
                                            <ul className="sub-menu">
                                                <li><Link onClick={ClickHandler} href='/Ueber-uns'>Über uns</Link></li>
                                                <li><Link onClick={ClickHandler} href='/FAQ'>FAQ</Link></li>
                                                <li><Link onClick={ClickHandler} href='/Angebote'>Angebote</Link></li>
                                                {/* <li><Link onClick={ClickHandler} href='/Eventsfotografie'>TIPPS</Link></li> */}
                                            </ul>
                                        </li>

                                        <li className="menu-item-has-children">
                                            <Link className='item-menu' href="/Hochzeitfotografie" style={{cursor: 'default'}}>Hochzeitsfotos</Link>
                                            <ul className="sub-menu">
                                                <li><Link onClick={ClickHandler} href='/Portraitfotografie'>Portraitfotos</Link></li>
                                                <li><Link onClick={ClickHandler} href='/Hochzeitfotografie'>Hochzeitsfotos</Link></li>
                                                <li><Link onClick={ClickHandler} href='/Eventsfotografie'>Eventsfotos</Link></li>
                                                {/* <li><Link onClick={ClickHandler} href="/Hochzeitsvideos">Hochzeitsvideos</Link></li> */}
                                            </ul>
                                        </li>
                                                                
                                        <li className='brand-logo'><Link onClick={ClickHandler} className="navbar-brand" href="/"><img src='/images/THEPLUG-WEGGING_logo.png' style={{width:'200px', height:'200px', marginTop: '-40px', marginBottom: '-20px'}}
                                            alt="Logo The PLUG" /></Link></li>

                                        <li className="menu-item-has-children">
                                            <Link className='item-menu' href="/Hochzeitsvideos">Hochzeitsfilme</Link>
                                            {/* <ul className="sub-menu">
                                                <li><Link onClick={ClickHandler} href="/shop">Shop</Link></li>
                                                <li><Link onClick={ClickHandler} href="/product-single/Wedding-Cake">Shop Single</Link></li>
                                                <li><Link onClick={ClickHandler} href="/cart">Cart</Link></li>
                                                <li><Link onClick={ClickHandler} href="/wishlist">Wishlist</Link></li>
                                                <li><Link onClick={ClickHandler} href="/checkout">Checkout</Link></li>
                                            </ul> */}
                                        </li>
                                        <li><Link className='item-menu' onClick={ClickHandler} href="/Blogs">Blog</Link></li>
                                        <li><Link className='item-menu' onClick={ClickHandler} href="/Kontakt">KONTAKT</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-2 col-2">
                                <div className="header-right">
                                    <div className='icons-media'>
                                        <ul className="icon-color">
                                            <li><Link style={{color:'#B99226'}}  target={'_blank'} href="https://www.facebook.com/profile.php?id=100094313491782"><i className="fi flaticon-facebook-app-symbol icon"></i></Link></li>
                                        {/* <li><Link href="/"><i className="fi flaticon-twitter"></i></Link></li>*/}
                                            <li><Link style={{color:'#B99226'}} target={'_blank'} href="https://www.instagram.com/theplug_wedding/"><i className="fi flaticon-instagram-1 icon"></i></Link></li>
                                            <li><Link style={{color:'#B99226'}} target={'_blank'} href="https://www.youtube.com/channel/UCjSaZbsMA4qSiqtHQOmrjFA "><i className="fi flaticon-youtube icon"></i></Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    )
}

const mapStateToProps = (state) => {
    return {
        carts: state.cartList.cart,
    };
};
export default connect(mapStateToProps, { removeFromCart })(Header);