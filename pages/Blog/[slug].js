import React, { Fragment, useRef } from 'react';
import { useRouter } from 'next/router'
import Link from 'next/link'
import PageTitle from '../../components/pagetitle/PageTitle';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/footer/Footer';
import Scrollbar from '../../components/scrollbar/scrollbar';
import Image from 'next/image'
import blog3 from '/public/images/blog-details/comments-author/wedding-user-8.png'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { dateParser } from '../../utils';
import moment from 'moment';
import FormSection from '../../components/FormSection/FormSection';
import MapSection from '../../components/MapSection/MapSection';
import { Helmet } from 'react-helmet';
import ReactGA from 'react-ga4';
import { toast } from 'react-toastify';
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"
import { Gallery, Item } from 'react-photoswipe-gallery'
import {shuffleArray} from '../../utils/index.js'
import { imagesBlogWifor, imagesLaurafrederico } from '../../utils/data.js';
import Newsletter from '../../components/Newsletter';
import emailjs from '@emailjs/browser'


const BlogSingle = (props) => {
    const router = useRouter()
    const { slug } = router.query;
    const [comments,setComments] = useState([]);
    const [post, setPost] = useState({});
    const [name, setAuthor] = useState("");
    const [content, setText] = useState("");
    const [email, setMail] = useState("");
    const [loading, setLoading] = useState(true);
    const [showGalleryModal, setShowGalleryModal] = useState(false);
    const [open, setOpen] = useState(false);

    const [isSubscribed, setIsSubscribed] = useState(false);

    useEffect(() => {
    // Vérification de l'inscription à la newsletter
    const storedData = JSON.parse(localStorage.getItem('tpw-newsletter'));
    if (storedData) {
      setIsSubscribed(!!storedData.email);
    }
  }, []);

    const handleOpen = () => {
        setOpen(true);
        console.log(open);
    }
    const handleClose = () => setOpen(false);

    const valeurs = {
        imagesBlogWifor: imagesBlogWifor,
        imagesLaurafrederico: imagesLaurafrederico
    }

    const [emailNews, setEmailNews] = useState({email: ''})
    const [forms, setForms] = useState({email: emailNews})
    const [statusEmail, setStatusEmail] = useState(0)
    
    
    const form = useRef()
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(e)
        setStatusEmail(1)
        setEmailNews({email: emailNews})
        console.log(JSON.stringify(emailNews))
        emailjs.send('service_76lbexa', 'template_bm6ewab', {'user_email':emailNews}, 'AC_DTNvzmjFi3HHjs')
        .then((result) => {
            console.log(result.text)
            setIsSubscribed(true)
            setStatusEmail(2)
            localStorage.setItem('tpw-newsletter', JSON.stringify({email: emailNews}))
            setOpen(false)
            setShowGalleryModal(true)
            console.log(open)

            handleClose()
            
        })
        .catch((error) => {
            console.log(error)
            setStatusEmail(3)
        })
    }

    const submitHandler = (e) => {
        e.preventDefault()
        const comt={name, email, content, post_id: post.id}
        
        
        axios.post('https://api.theplug-wedding.com/api/add-comment', comt)
            .then((res) => {
                console.log(res.data)
                toast(res.data.message)
                getComments(post.id)
                .then((res) => {
                    setComments(res)
                })
                .catch(err => toast.error(err.message));
                setAuthor("");
                setText("");
                setMail("");
            })
            .catch(err => {
                console(err.message)
                toast.error(err.message)
            })
    }
    
    
    useEffect(() => {      
        
        if (slug) {
            getPost(slug)
            .then((post) => {
                setPost(post)
                getComments(post.id)
                    .then((res) => {
                        setComments(res)
                        setLoading(false);
                        ReactGA.event({
                            hitType: 'pageview',
                            page: window.location.pathname,
                            title: `BLOG : ${post.title}`
                        });
                    })
                    .catch(err => toast.error(err.message));
            })
            .catch(err => toast.error(err.message));
        }
        
    }, [slug])
    

    async function getPost(slug) {
        const response = await axios.get("https://api.theplug-wedding.com/api/posts/" + slug)    
        return response.data
    }

    async function getComments(id) {
        const response = await axios.get("https://api.theplug-wedding.com/api/comments/" + id)
        return response.data;
    }
   
    const handleParagraphClick = () => {
        setShowGalleryModal(true);
        // setOpen(true);
    }

    return (
        <Fragment>
            <Helmet>
                <title> Blog-THEPLUG Wedding</title>
            </Helmet>
            <Navbar />
            {/* <PageTitle pageTitle={post.title} pagesub="Blog" /> */}
            <section className="wpo-blog-single-section section-padding">
                <div className="container">
                    <div className="row">
                        <div className={`col col-lg-12 col-12 ${props.blRight}`}>
                            <div className="wpo-blog-content">
                                <div className="post format-standard-image">
                                    <div className="entry-media">
                                        <img src={post.image} alt="" width={868} height={100} />
                                    </div>
                                    <div className="entry-meta">
                                        <ul>
                                            <li><i className="fa fa-camera"></i><Link href='/' target='_blank'>Stephane Kamwa</Link> </li>
                                            <li><i className="fa fa-pencil"></i>  <Link href="https://www.comtheplug.com/" target='_blank'>THEPLUG Com</Link> </li>
                                            <li><i className="fi flaticon-comment-white-oval-bubble"></i> Comments {comments.length}</li>
                                            <li><i className="fa fa-eye"></i> {post.vues} views </li>
                                            <li><i className="fi flaticon-calendar"></i> {moment(post.created_at).format('DD MMMM YYYY')}</li>
                                        </ul>
                                    </div>
                                    <h2>{post.title}</h2>
                                    
                                    <div dangerouslySetInnerHTML={{ __html: post.content}}></div>
                                    <p style={{ cursor: 'pointer', display: isSubscribed ? 'none' : 'block'}} onClick={handleOpen}>Siehe Bilder</p>

                                    {/* Afficher les photos apres avoir entrer un mail */}

                                    {open && !isSubscribed &&
                                        <div>
                                            <section className="wpo-contact-pg-section">
                                                <div className="container">   
                                                    <div className="wpo-contact-form-area"> 
                                                        <div className="modalBody modal-body">
                                                            <div className="modalBody modal-body">
                                                                <form className="contact-validation-active" onSubmit={handleSubmit}>
                                                                    <div className="row">
                                                                        <div className="col-lg-12 col-12">
                                                                            <div className="form-field">
                                                                            <label>Willst Du immer auf dem neuesten Stand sein? Newsletter abonnieren</label>
                                                                                <input
                                                                                    type="email"
                                                                                    placeholder="Deine E-Mail Adresse"
                                                                                    onChange={(e) => setEmailNews(e.target.value)}
                                                                                    required
                                                                                    name='user_email'
                                                                                />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="submit-area">
                                                                        <button type="submit" className="theme-btn">
                                                                            {statusEmail === 1 ? 'Bearbeitung...' 
                                                                            : (statusEmail === 2 ? 'Erfolgreich !'                      
                                                                            : (statusEmail === 3 ? 'Fehler !' : 'Senden'))}
                                                                        </button>
                                                                    </div>
                                                                </form>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </section>
                                        </div>
                                    }<br/>
                                    {isSubscribed && post.isGallery &&
                                        <div className="sortable-gallery">
                                            <div className="gallery-filters"></div>
                                            <div className="row">
                                                <div className="col-lg-12">
                                                    <div className="portfolio-grids gallery-container clearfix">
                                                        <Gallery >
                                                            <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 4 }}>
                                                                <Masonry columnsCount={4} gutter="30px">
                                                                    {shuffleArray(valeurs[post.gallery]).map((image, i) => (
                                                                        <div className="grid" key={i}>
                                                                            <Item
                                                                                original={image.img}
                                                                                thumbnail={image.img}
                                                                                width="100%"
                                                                                height="100%"
                                                                            >
                                                                                {({ ref, open }) => (
                                                                                    <img ref={ref} onClick={open} src={image.img} />
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
                                    }
                                </div><br/>
                                {/* <Newsletter/><br/><br/><br/><br/> */}

                                {/* <div className="more-posts">

                                    <div className="previous-post">
                                        <Link href="/blog-single/[slug]" as={`/blog-single/${post.slug}`}>
                                            <span className="post-control-link">Vorheriger Artikel</span>
                                        </Link>
                                        
                                    </div>
                                    <div className="next-post">
                                        <Link href="/blog-single/[slug]" as={`/blog-single/${post.slug}`}>
                                            <span className="post-control-link">Nächster Artikel</span>
                                        </Link>
                                        
                                    </div>
                                </div> */}

                                <div className="comments-area">
                                    <div className="comments-section">
                                        <h3 className="comments-title">Kommentar</h3>
                                        <ol className="comments">
                                            {(comments.length !== 0 && !loading) &&
                                                comments.map((comment ,i)=>(
                                                    <li className={`post `} key={i} id="comment-1">
                                                        <div>
                                                            <div className="comment-theme">
                                                                <div className="comment-image"><Image src={blog3} alt="" /></div>
                                                            </div>
                                                            <div className="comment-main-area">
                                                                <div className="comment-wrapper">
                                                                    <div className="comments-meta">
                                                                        <h4> <span className="comments-date" > {dateParser(comment.created_at)}</span>
                                                                        </h4>
                                                                    </div>
                                                                    <div className="comment-area">
                                                                        <p>{comment.name}</p>
                                                                        <p>{comment.content}</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                ))
                                            }
                                        </ol>
                                    </div>
                                    <div className="comment-respond">
                                        <h3 className="comment-reply-title">Einen Kommentar Hinzufügen</h3>
                                        <form onSubmit={submitHandler} id="commentform" className="comment-form">
                                           <div className="form-inputs">
                                                <input required value={name} onChange={(e)=>setAuthor(e.target.value)} placeholder="Name" type="text" />
                                                <input required value={email} onChange={(e)=>setMail(e.target.value)} placeholder="Email" type="email" />
                                            </div>
                                            <div className="form-textarea">
                                                <textarea required value={content} onChange={(e)=>setText(e.target.value)} id="comment" placeholder="Schreiben sie ihre kommentare..."></textarea>
                                            </div>
                                            
                                            <div className="form-submit">
                                                <input id="submit" value="Posten" type="submit" />
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </section>
            <FormSection />
            <MapSection />
            <Footer />
            <Scrollbar />
        </Fragment>
    );
};
export default BlogSingle;
