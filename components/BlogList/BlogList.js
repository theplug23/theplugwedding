import React from 'react';
import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import axios from 'axios';
import { countTitle } from '../../utils/index.js';
import logo from '/public/images/THEPLUG-WEGGING_logo.png'
import moment from 'moment';

const ClickHandler = () =>{
    window.scrollTo(10, 0);
 }

const BlogList = (props) => {
    const [posts, setPosts] = useState([])
    const [search, setSearch] = useState("")
    const [searchPosts, setSearchPosts] = useState([]) 
    const [isSearched, setIssearched] = useState(false)
    
    useEffect(() => {
        axios.get('https://api.theplug-wedding.com/api/posts')
        .then(res => setPosts(res.data))
        .catch(err => console.log(err))
    }, [])

    const SubmitHandler = (e) =>{
        e.preventDefault()
        const searchPosts= posts.filter(post => (post.title.includes(search) || post.content.includes(search)))
        setIssearched(true)
        setSearchPosts(searchPosts)
    }
    
    return(
        <section className="wpo-blog-pg-section section-padding">
        {/* <div className="container">
            <h1 className="" style={{textAlign:'center', fontWeight:'bold', marginBottom:'50px'}}>You can see all posts here</h1><br/>
        </div> */}
            <div className="container">
                <h1 className="" style={{textAlign:'center', fontWeight:'bold', marginBottom:'50px', color:"#b99226"}}>Alle Beiträge könnt ihr hier sehen</h1><br/>
                <div className="row">
                    <div className={`col col-lg-8 col-12 ${props.blRight}`}>
                        <div className="wpo-blog-content">
                            {posts.length > 0 ? (
                                !isSearched ? (
                                    <div className="row">
                                        {posts.map((post, bitem) => (
                                            <div className={`post col-md-6 ${post.blClass}`} key={bitem}>
                                                <div className="entry-media video-holder">
                                                        <Image src={post.image} alt="" width={1000} height={500}/>
                                                                {/* <VideoModal/> */}
                                                </div>
                                                <div className="entry-meta">
                                                    <ul>
                                                        <li><i className="fi flaticon-user"></i>  <Link href="https://www.comtheplug.com/" target='_blank'>{post.author}</Link> </li>
                                                        <li><i className="fa fa-camera"></i> <Link href='/' >THEPLUG Wedding</Link> </li><br/>
                                                        <li><i className="fa fa-eye"></i> {post.vues} views </li>
                                                        <li><i className="fi flaticon-calendar"></i> {moment(post.created_at).format('DD MMMM YYYY')}</li>
                                                    </ul>
                                                </div>
                                                <div className="entry-details">
                                                    <h3><Link href='/Blog/[slug]' as={`/Blog/${post.slug}`}>{post.title}</Link></h3>
                                                    <p>{countTitle(post.title)+"..."}</p>
                                                    <Link href='/Blog/[slug]' as={`/Blog/${post.slug}`} className="read-more">Mehr Lesen...</Link>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                ) : (
                                    searchPosts.length > 0 ? (
                                        <div className="row">
                                            {searchPosts.map((post, i) => (
                                                <div className={`post col-md-6 ${post.blClass}`} key={i}>
                                                    <div className="entry-media video-holder">
                                                        <Image src={post.image} alt="" width={1000} height={500}/>
                                                        {/* <VideoModal/> */}
                                                    </div>
                                                    <div className="entry-meta">
                                                        <ul>
                                                            <li><i className="fi flaticon-user"></i> By <Link href="https://www.comtheplug.com/" target='_blank'>{post.author}</Link> </li>
                                                            <li><i className="fa fa-camera"></i> <Link href='/' >THEPLUG Wedding</Link> </li>
                                                            <li><i className="fi fa-eye"></i>  {post.vues} views </li>
                                                            <li><i className="fi flaticon-calendar"></i> {moment(post.created_at).format('DD MMMM YYYY')}</li>
                                                        </ul>
                                                    </div>
                                                    <div className="entry-details">
                                                        <h3><Link href='/Blog/[slug]' as={`/Blog/${post.slug}`}>{post.title}</Link></h3>
                                                        <p>{countTitle(post.title)+"..."}</p>
                                                        <Link href='/Blog/[slug]' as={`/Blog/${post.slug}`} className="read-more">Mehr Lesen...</Link>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    ) : (
                                        <div className="col col-lg-10 col-12">
                                            <h1 style={{textAlign: 'center'}}>Leider entspricht kein Artikel Ihrer Suche !<br/><br/> Bitte versuche es erneut !</h1>
                                        </div>
                                    )
                                )
                            ) : (
                                <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                    <p style={{fontSize: '20px', textAlign: 'center'}}>Zur Zeit sind keine Beiträge verfügbar</p>
                                </div>
                            )}
                        </div>
                    </div>
                    
                    <div className={`col col-lg-4 col-12 ${props.blLeft}`}>
                        <div className="blog-sidebar">
                            <div className="widget about-widget">
                                <div className="img-holder">
                                    <Image src={logo} alt=""/>
                                </div>
                                <h4>THEPLUG Weeding</h4>
                                <p>THEPLUG Hochzeitsteam verewigt den schönsten Tag in Ihrem Leben</p>
                                <div className="social">
                                <ul className="clearfix">
                                    <li><Link onClick={ClickHandler} target={'_blank'} href="https://www.facebook.com/thepluggroup1"><i className="fi flaticon-facebook-app-symbol"></i></Link></li>
                                    <li><Link onClick={ClickHandler} target={'_blank'} href="https://www.youtube.com/channel/UCjSaZbsMA4qSiqtHQOmrjFA"><i className="fi flaticon-youtube"></i></Link></li>
                                    <li><Link onClick={ClickHandler} target={'_blank'} href="https://www.instagram.com/theplug_wedding/"><i className="fi flaticon-instagram-1"></i></Link></li>
                                    <li><Link onClick={ClickHandler} target={'_blank'} href="https://wa.me/4915752069252"><i className="fa fa-whatsapp"></i></Link></li>
                                </ul>
                                </div>
                            </div>
                            <div className="widget search-widget">
                                <form onSubmit={SubmitHandler}>
                                    <div>
                                        <input value={search} onChange={(e)=>setSearch(e.target.value)} type="text" className="form-control" placeholder="Beitrag durchsuchen" required/>
                                        <button type="submit"><i className="ti-search"></i></button>
                                    </div>
                                </form>
                            </div>
                            <div className="wpo-contact-widget widget">
                                <h2>Wie wir können <br/>Dir helfen !</h2>
                                <p>Was auch immer Ihr Bedarf, Ihr Anliegen oder Ihre Frage ist, zögern Sie nicht, uns direkt zu kontaktieren, wir werden Ihnen gerne antworten</p>
                                <Link onClick={ClickHandler} href="/Kontakt">Kontaktiere uns</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

     )
        
}

export default BlogList;