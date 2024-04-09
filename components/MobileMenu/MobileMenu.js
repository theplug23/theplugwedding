import React, { Fragment, useState } from 'react';
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Collapse from "@mui/material/Collapse";
import Link  from "next/link";

const menus = [
    {
        id: 1,
        title: 'HOME',
        link: '/',
       /*  submenu: [
            {
                id: 11,
                title: 'Main Home',
                link: '/home'
            },
            {
                id: 12,
                title: 'Wedding Planner',
                link: '/home2'
            },
            {
                id: 13,
                title: 'Announcement Home',
                link: '/home3'
            },
            {
                id: 14,
                title: 'Wedding Home',
                link: '/home4'
            },
            {
                id: 15,
                title: 'Asian / Indian Wedding Announcement',
                link: '/home5'
            },
            {
                id: 16,
                title: 'Asian / Indian Wedding Planner',
                link: '/home6'
            },
            {
                id: 17,
                title: 'Muslim Wedding',
                link: '/home7'
            },
            {
                id: 18,
                title: 'Shop Home',
                link: '/home8'
            },
            {
                id: 19,
                title: 'Wedding Invitation',
                link: '/home9'
            },
        ] */
    },

{
    id: 2,
        title: 'ABOUT',
        link: '/Ueber-uns',
        submenu: [
            {
                id: 41,
                title: 'ÜBER UNS',
                link: '/Ueber-uns'
            },
            {
                id: 42,
                title: 'FAQ',
                link: '/FAQ'
            }
        ]
    },  
    {
        id: 3,
        title: 'PORTFOLIO',
        link: '/Hochzeitfotografie',
        submenu: [
            {
                id: 41,
                title: 'PORTRAITSFOTOGRAFIE',
                link: '/Portraitfotografie'
            },
            {
                id: 42,
                title: 'HOCHZEITENFOTOGRAFIE',
                link: '/Hochzeitfotografie'
            },
            {
                id: 43,
                title: 'EVENTSFOTOGRAPHIE',
                link: '/Eventsfotografie'
            },
            {
                id: 44,
                title: 'HOCHZEITSVIDEOS',
                link: '/Hochzeitsvideos',
            }
        ]
    },
    {
        id: 4,
        title: 'ANGEBOTE',
        link: '/Angebote',
      /*   submenu: [
            {
                id: 71,
                title: 'Shop',
                link: '/shop',
            },
            {
                id: 75,
                title: 'Shop Single',
                link: '/product-single/Wedding-Cake'
            },
            {
                id: 76,
                title: 'Cart',
                link: '/cart'
            },
            {
                id: 77,
                title: 'Checkout',
                link: '/checkout'
            }
            
        ] */
    },

    /*{
        id: 5,
        title: 'Testimonials',
        link: '/blog',
        submenu: [
            {
                id: 51,
                title: 'Blog',
                link: '/blog'
            },
            {
                id: 52,
                title: 'Blog Left sidebar',
                link: '/blog-left'
            },
            {
                id: 53,
                title: 'Blog full width',
                link: '/blog-fullwidth'
            },
            {
                id: 54,
                title: 'Blog single',
                link: '/blog-single/Dream-Day'
            },
            {
                id: 55,
                title: 'Blog single Left sidebar',
                link: '/blog-single-left-sidebar/Dream-Day'
            },
            {
                id: 56,
                title: 'Blog single Left sidebar',
                link: '/blog-single-fullwidth/Dream-Day'
            },
        ] 
    },*/
    // {
    //     id: 5,
    //     title: 'HOCHZEITSVIDEOS',
    //     link: '/Hochzeits-Videos',
    // },
    /*{
        id: 5,
        title: 'Blog',
        link: '/blog'
    },
    {
        id: 9,
        title: 'My Profil',
        link: 'profile',
        submenu: [
            {
                id: 91,
                title: 'Cart',
                link: '/cart'
            },
            {
                id: 92,
                title: 'Checkout',
                link: '/checkout'
            },
            {
                id: 93,
                title: 'Logout',
                link: '/logout'
            }
        ]
    }*/
    {
        id: 6,
        title: 'BLOG',
        link: '/Blogs'
    },
    {
        id: 7,
        title: 'KONTAKT',
        link: '/Kontakt'
    }
]


const MobileMenu = () => {

    const [openId, setOpenId] = useState(0);
    const [menuActive, setMenuState] = useState(false);

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <div>
            <div className={`mobileMenu ${menuActive ? "show" : ""}`}>
                <div className="menu-close">
                    <div className="clox" onClick={() => setMenuState(!menuActive)}><i className="ti-close"></i></div>
                </div>

                <ul className="responsivemenu">
                    {menus.map((item, mn) => {
                        return (
                            <ListItem className={item.id === openId ? 'active' : null}  key={mn}>
                                {item.submenu ?
                                    <Fragment>
                                        <p onClick={() => setOpenId(item.id === openId ? 0 : item.id)}>{item.title}
                                          <i className={item.id === openId ? 'fa fa-angle-up' : 'fa fa-angle-down'}></i>
                                        </p>
                                        <Collapse in={item.id === openId} timeout="auto" unmountOnExit>
                                            <List className="subMenu">
                                                <Fragment>
                                                    {item.submenu.map((submenu, i) => {
                                                        return (
                                                            <ListItem key={i}>
                                                                <Link onClick={ClickHandler}
                                                                    href={submenu.link}>{submenu.title}</Link>
                                                            </ListItem>
                                                        )
                                                    })}
                                                </Fragment>
                                            </List>
                                        </Collapse>
                                    </Fragment>
                                    : <Link
                                        href={item.link}>{item.title}</Link>
                                }
                            </ListItem>
                        )
                    })}
                </ul>

                <div className='links'>
                    <hr style={{color:'white'}} />
                    <ul className="list-links">
                        <li className='link'><Link style={{color:'white'}}  target={'_blank'} href="tel:+4915752069252"><i className="fi flaticon-phone-call"></i></Link></li>
                        <li className='link'><Link style={{color:'white'}} href="https://wa.me/4915752069252" target={'_blank'}><i className="fa fa-whatsapp"></i></Link></li>
                        <li className='link'><Link style={{color:'white'}} target={'_blank'} href="mailto:contact@theplug-group.com"><i className="fi flaticon-email icon"></i></Link></li>                 
                    </ul>
                </div>

            </div>

            <div className="showmenu" onClick={() => setMenuState(!menuActive)}>
                <button type="button" className="navbar-toggler open-btn">
                    <span className="icon-bar first-angle"></span> 
                    <span className="icon-bar middle-angle"></span>
                    <span className="icon-bar last-angle"></span>
                </button>
            </div>
        </div>
    )
}

export default MobileMenu;